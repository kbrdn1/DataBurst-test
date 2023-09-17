// transfert to editor
export type ScriptProviderState = {
  showScript: boolean;
  setShowScript: (showScript: boolean) => void;
  scriptView: ScriptView;
  setScriptView: (scriptView: ScriptView) => void;
};

export type ScriptView = 'SQL' | 'PDM';

export type ScriptProviderProps = {
  children: React.ReactNode;
  defaultShowScript?: boolean;
  defaultScriptView?: ScriptView;
  storageKey?: string;
};

export type ScriptProps = {
  setShow: (show: boolean) => void;
};