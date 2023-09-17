import { Type, Background } from '@/types';
export const backgrounds: Background[] = [
  'dots',
  'grid',
  'cross',
  'dash',
  'none'
];
export const types: Type[] = [
  'INT',
  'TINYINT',
  'SMALLINT',
  'MEDIUMINT',
  'BIGINT',
  'FLOAT',
  'DOUBLE',
  'REAL',
  'DECIMAL',
  'NUMERIC',
  'CHAR',
  'VARCHAR',
  'TEXT',
  'TINYTEXT',
  'MEDIUMTEXT',
  'LONGTEXT',
  'DATE',
  'TIME',
  'DATETIME',
  'TIMESTAMP',
  'BIT',
  'SERIAL',
  'ENUM',
  'BOOLEAN',
  'SET',
  'BINARY',
  'VARBINARY',
  'BLOB',
  'TINYBLOB',
  'MEDIUMBLOB',
  'LONGBLOB',
  'JSON',
  'GEOMETRY',
  'UUID',
  'YEAR',
  'LINESTRING',
  'POINT',
  'POLYGON',
  'MULTIPOINT',
  'MULTILINESTRING',
  'MULTIPOLYGON',
  'GEOMETRYCOLLECTION'
];

import { radians } from "./math-utils";

export const CAMERA_ANGLE = radians(30);
export const RECT_W = 1000;
export const RECT_H = 1000;
