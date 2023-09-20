import { Background, Color, Type } from '@/types';
import { radians } from "./math-utils";

export const backgrounds: Background[] = [
  'dots',
  'grid',
  'cross',
  'dash',
  'none'
];
export const colors: Color[] = [
  'zinc',
  'slate',
  'stone',
  'gray',
  'neutral',
  'red',
  'rose',
  'orange',
  'green',
  'blue',
  'yellow',
  'violet'
]

export type ColorItem = {
  name: Color;
  hex: string;
}

export const colorItems: ColorItem[] = [
  { name: 'zinc', hex: '#52525b' },
  { name: 'slate', hex: '#475569' },
  { name: 'stone', hex: '#57534e' },
  { name: 'gray', hex: '#4b5563' },
  { name: 'neutral', hex: '#525252' },
  { name: 'red', hex: '#dc2626' },
  { name: 'rose', hex: '#e11d48' },
  { name: 'orange', hex: '#ea580c' },
  { name: 'green', hex: '#22c55e' },
  { name: 'blue', hex: '#3b82f6' },
  { name: 'yellow', hex: '#facc15' },
  { name: 'violet', hex: '#6d28d9' }
]
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

export const CAMERA_ANGLE = radians(30);
export const RECT_W = 1000;
export const RECT_H = 1000;
