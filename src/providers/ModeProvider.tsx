import ModeProviderContext from '@/contexts/ModeContext';
import { Mode, ModeProviderProps, ModeProviderState } from '@/types';
import { useEffect, useMemo, useState } from 'react';

const ModeProvider = ({
  children,
  defaultMode = 'normal',
  storageKey = 'mode',
  ...props
}: ModeProviderProps) => {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem(storageKey) as Mode) || defaultMode
  );

  useEffect(() => {
    localStorage.setItem(storageKey, mode);
  }, [mode, storageKey]);

  const value: ModeProviderState = useMemo(() => {
    return {
      mode,
      setMode: (settings: Mode) => {
        setMode(settings);
      }
    };
  }, [mode]);

  return (
    <ModeProviderContext.Provider {...props} value={value}>
      {children}
    </ModeProviderContext.Provider>
  );
};

export default ModeProvider;
