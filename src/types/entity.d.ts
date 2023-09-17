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

export type EntityFormProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  position: {
    x: number;
    y: number;
  };
};