import { EntityProviderState } from '@/types';
import { createContext } from 'react';


const initialState: EntityProviderState = {
  entities: [],
  setEntities: () => null,
  addEntity: () => null,
  removeEntity: () => null,
  updateEntity: () => null
};

const EntityProviderContext = createContext<EntityProviderState>(initialState);

export default EntityProviderContext;