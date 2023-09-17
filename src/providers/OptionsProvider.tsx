import OptionsProviderContext from '@/contexts/OptionsContext';
import { Settings, OptionsProviderProps, OptionsProviderState } from '@/types';
import { useEffect, useMemo, useState } from 'react';

const OptionsProvider = ({
  children,
  defaultShowSettings = false,
  defaultSettings = 'appearance',
  defaultShowHelpFeedback = false,
  storageKey = 'options',
  ...props
}: OptionsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).settings || defaultSettings;

    return defaultSettings;
  });

  const [showSettings, setShowSettings] = useState<boolean>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).open || defaultShowSettings;

    return defaultShowSettings;
  });

  const [showHelpFeedback, setShowHelpFeedback] = useState<boolean>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage)
      return JSON.parse(storage).showHelpFeedback || defaultShowHelpFeedback;

    return defaultShowHelpFeedback;
  });

  useEffect(() => {
    const storage = {
      showSettings,
      settings,
      showHelpFeedback
    };
    localStorage.setItem(storageKey, JSON.stringify(storage));
  }, [showSettings, settings, showHelpFeedback, storageKey]);

  const value: OptionsProviderState = useMemo(() => {
    return {
      showSettings,
      setShowSettings: (showSettings: boolean) => {
        setShowSettings(showSettings);
      },
      settings,
      setSettings: (settings: Settings) => {
        setSettings(settings);
      },
      showHelpFeedback,
      setShowHelpFeedback: (showHelpFeedback: boolean) => {
        setShowHelpFeedback(showHelpFeedback);
      }
    };
  }, [showSettings, showHelpFeedback,settings]);

  return (
    <OptionsProviderContext.Provider {...props} value={value}>
      {children}
    </OptionsProviderContext.Provider>
  );
};

export default OptionsProvider;
