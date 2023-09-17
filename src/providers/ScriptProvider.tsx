import ScriptProviderContext from '@/contexts/ScriptContext';
import { ScriptView, ScriptProviderProps } from '@/types';
import { useEffect, useState } from 'react';

const ScriptProvider = ({
  children,
  defaultShowScript = false,
  defaultScriptView = 'SQL',
  storageKey = 'vite-ui-script',
  ...props
}: ScriptProviderProps) => {
  const [showScript, setShowScript] = useState<boolean>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).showScript || defaultShowScript;

    return defaultShowScript;
  });

  const [scriptView, setScriptView] = useState<ScriptView>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).color || defaultScriptView;

    return defaultScriptView;
  });

  useEffect(() => {
    const storage = {
      showScript,
      scriptView
    };

    localStorage.setItem(storageKey, JSON.stringify(storage));
  }, [showScript, scriptView, storageKey]);

  const value = {
    showScript,
    setShowScript: (showScript: boolean) => {
      setShowScript(showScript);
    },
    scriptView,
    setScriptView: (scriptView: ScriptView) => {
      setScriptView(scriptView);
    }
  };

  return (
    <ScriptProviderContext.Provider {...props} value={value}>
      {children}
    </ScriptProviderContext.Provider>
  );
};

export default ScriptProvider;
