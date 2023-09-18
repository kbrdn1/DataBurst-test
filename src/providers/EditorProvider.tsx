import EditorProviderContext from '@/contexts/EditorContext';
import {
  Mode,
  Settings,
  ScriptView,
  EditorProviderProps,
  EditorProviderState
} from '@/types';
import { useEffect, useMemo, useState } from 'react';

const EditorProvider = ({
  children,
  defaultMode = 'normal',
  storageKey = 'mode',
  defaultShowSettings = false,
  defaultSettings = 'appearance',
  defaultShowHelpFeedback = false,
  defaultShowScript = false,
  defaultScriptView = 'SQL',
  defaultCollapseNavBoard = false,
  ...props
}: EditorProviderProps) => {
  const [mode, setMode] = useState<Mode>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).mode || defaultMode;

    return defaultMode;
  });

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

   const [collapseNavBoard, setCollapseNavBoard] = useState<boolean>(() => {
     const storage = localStorage.getItem(storageKey);
     if (storage)
       JSON.parse(storage).collapseNavBord || defaultCollapseNavBoard;

     return defaultCollapseNavBoard;
   });

  useEffect(() => {
    const storage = {
      mode,
      showSettings,
      settings,
      showHelpFeedback,
      showScript,
      scriptView,
      collapseNavBoard
    };
    localStorage.setItem(storageKey, JSON.stringify(storage));
  }, [
    mode,
    showSettings,
    settings,
    showHelpFeedback,
    showScript,
    scriptView,
    collapseNavBoard,
    storageKey
  ]);

  const value: EditorProviderState = useMemo(() => {
    return {
      mode,
      setMode: (settings: Mode) => {
        setMode(settings);
      },
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
      },
      showScript,
      setShowScript: (showScript: boolean) => {
        setShowScript(showScript);
      },
      scriptView,
      setScriptView: (scriptView: ScriptView) => {
        setScriptView(scriptView);
      },
      collapseNavBoard,
      setCollapseNavBoard: (collapseNavBoard: boolean) => {
        setCollapseNavBoard(collapseNavBoard);
      }
    };
  }, [mode, showSettings, showHelpFeedback, settings, showScript, scriptView, collapseNavBoard]);

  return (
    <EditorProviderContext.Provider {...props} value={value}>
      {children}
    </EditorProviderContext.Provider>
  );
};

export default EditorProvider;
