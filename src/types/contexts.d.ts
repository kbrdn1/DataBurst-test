export type Theme = 'dark' | 'light' | 'system';

export type Color =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColor?: Color;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: Color;
  setColor: (color: Color) => void;
};

export type Type = 'INT'
    | 'TINYINT'
    | 'SMALLINT'
    | 'MEDIUMINT'
    | 'BIGINT'
    | 'FLOAT'
    | 'DOUBLE'
    | 'REAL'
    | 'DECIMAL'
    | 'NUMERIC'
    | 'CHAR'
    | 'VARCHAR'
    | 'TEXT'
    | 'TINYTEXT'
    | 'MEDIUMTEXT'
    | 'LONGTEXT'
    | 'DATE'
    | 'TIME'
    | 'DATETIME'
    | 'TIMESTAMP'
    | 'BIT'
    | 'BOOLEAN'
    | 'SERIAL'
    | 'ENUM'
    | 'BOOLEAN'
    | 'SET'
    | 'BINARY'
    | 'VARBINARY'
    | 'BLOB'
    | 'TINYBLOB'
    | 'MEDIUMBLOB'
    | 'LONGBLOB'
    | 'JSON'
    | 'GEOMETRY'
    | 'UUID'
    | 'YEAR'
    | 'LINESTRING'
    | 'POINT'
    | 'POLYGON'
    | 'MULTIPOINT'
    | 'MULTILINESTRING'
    | 'MULTIPOLYGON'
    | 'GEOMETRYCOLLECTION';

export type Field = {
  name: string;
  type: Type;
  length?: number | undefined;
  default?: 'NULL' | 'CURRENT_TIMESTAMP';
  unsigned?: boolean;
  nullable?: boolean;
  unsigned?: boolean;
  primaryKey?: boolean;
  autoIncrement?: boolean;
  unique?: boolean;
};

export type ForeignKey = {
  entity_id: number;
  [key: string]: Field;
};

export type Entity = {
  _id: number;
  name: string;
  color: string;
  fields?: Field[];
  foreignKeys?: ForeignKey[];
  positions: {
    x: number;
    y: number;
  };
  relations?: number[];
};

export type EntityProviderState = {
  entities: Entity[];
  setEntities: (entities: Entity[]) => void;
  addEntity: (entity: Entity) => void;
  removeEntity: (id: number) => void;
  updateEntity: (id: number, entity: Entity) => void;
};

export type EntityProviderProps = {
  children: React.ReactNode;
  defaultEntities?: Entity[];
  storageKey?: string;
};

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