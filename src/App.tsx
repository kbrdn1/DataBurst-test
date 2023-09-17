import Editor from '@/components/Editor';
import EntityElement from '@/components/Elements/Entity';
import { Entity } from '@/types';
import Canvas from '@/components/Canvas';


const entity: Entity = {
  _id: 1,
  name: 'Users',
  color: '#F87171',
  fields: [
    {
      name: 'id',
      type: 'INT',
      notNull: true,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    {
      name: 'name',
      type: 'VARCHAR',
      limit: 255,
      notNull: true,
    },
    {
      name: 'email',
      type: 'VARCHAR',
      limit: 255,
      notNull: true,
      unique: true,
    },
    {
      name: 'password',
      type: 'VARCHAR',
      limit: 255,
      notNull: true,
    },
  ],
  positions: {
    x: 100,
    y: 100
  }
};

const App = () => {
  return (
    <Editor>
      <Canvas />
    </Editor>
  );
};

export default App;
