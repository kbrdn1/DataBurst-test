// transfert to editor
export type ModeProviderProps = {
  children: React.ReactNode;
  defaultMode?: Mode;
  storageKey?: string;
};

export type Mode = 'normal' | 'move' | 'select' | 'entity' | 'association' | 'inheritance' | 'constraint';

export type ModeProviderState = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};