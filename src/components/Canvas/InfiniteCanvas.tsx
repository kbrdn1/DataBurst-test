import { Entity } from '@/types';
import { memo } from 'react';
import EntityElement from './Elements/Entity';
import CanvasStore from './CanvasStore';

const entity: Entity = {
  _id: 1,
  name: 'Users',
  color: '#F87171',
  fields: [
    {
      name: 'id',
      type: 'INT',
      nullable: true,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    {
      name: 'name',
      type: 'VARCHAR',
      length: 255,
      nullable: true
    },
    {
      name: 'email',
      type: 'VARCHAR',
      length: 255,
      nullable: true,
      unique: true
    },
    {
      name: 'password',
      type: 'VARCHAR',
      length: 255,
      nullable: true
    }
  ],
  positions: {
    x: 1.2,
    y: 1.2
  }
};

const InfiniteCanvas = ({ frame }: { frame: string }) => {
  const scale = CanvasStore.scale;

  return (
    <div
      className='w-full h-full'
      style={{
        transform: `scale(${(scale.x, scale.y)})`,
        transformOrigin: 'top left'
      }}
    >
      <EntityElement data={entity} />
    </div>
  );
};

export default memo(InfiniteCanvas) as typeof InfiniteCanvas;
