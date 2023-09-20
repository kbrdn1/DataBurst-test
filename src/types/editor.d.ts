export type EditorProviderProps = {
  children: React.ReactNode;
  defaultMode?: Mode;
  defaultShowSettings?: boolean;
  defaultSettings?: Settings;
  defaultShowHelpFeedback?: boolean;
  defaultShowScript?: boolean;
  defaultScriptView?: ScriptView;
  defaultCollapseNavBoard?: boolean;
  storageKey?: string;
};

export type Mode =
  | 'normal'
  | 'move'
  | 'select'
  | 'entity'
  | 'association'
  | 'inheritance'
  | 'constraint';
export type Settings = 'appearance' | 'board' | 'collaboration';
export type ScriptView = 'SQL' | 'PDM';

export type EditorProviderState = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
  showHelpFeedback: boolean;
  setShowHelpFeedback: (showHelpFeedback: boolean) => void;
  showScript: boolean;
  setShowScript: (showScript: boolean) => void;
  scriptView: ScriptView;
  setScriptView: (scriptView: ScriptView) => void;
  collapseNavBoard: boolean;
  setCollapseNavBoard: (collapseNavBoard: boolean) => void;
};

export type ToolIconProps = {
  _mode?: Mode;
  name: string;
  shortcut?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  onClick?: () => void;
}