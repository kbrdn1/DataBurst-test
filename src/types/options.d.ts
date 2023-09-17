// transfert to editor
export type OptionsProviderProps = {
  children: React.ReactNode;
  defaultShowSettings?: boolean;
  defaultSettings?: Settings;
  defaultShowHelpFeedback?: boolean;
  storageKey?: string;
};

export type Settings = 'appearance' | 'board' | 'collaboration';

export type OptionsProviderState = {
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
  showHelpFeedback: boolean;
  setShowHelpFeedback: (showHelpFeedback: boolean) => void;
};