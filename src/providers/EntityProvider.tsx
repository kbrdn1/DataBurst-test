import { useEffect, useState } from 'react';
import { Entity, EntityProviderProps } from '@/types';
import EntityProviderContext from '@/contexts/EntityContext';

const EntityProvider = ({
  children,
  defaultEntities = [],
  storageKey = 'data-entity',
  ...props
}: EntityProviderProps) => {
  const [entities, setEntities] = useState<Entity[]>(
    () =>
      (JSON.parse(localStorage.getItem(storageKey) as string) as Entity[]) ||
      defaultEntities
  );

  useEffect(() => {}, [entities]);

  const value = {
    entities,
    setEntities: (entities: Entity[]) => {
      localStorage.setItem(storageKey, JSON.stringify(entities));
      setEntities(entities);
    },
    addEntity: (entity: Entity) => {
      setEntities([...entities, entity]);
    },
    removeEntity: (id: number) => {
      setEntities(entities.filter((entity) => entity._id !== id));
    },
    updateEntity: (id: number, entityUpdated: Entity) => {
      setEntities(
        entities.map((entity) => (entity._id === id ? entity : entityUpdated))
      );
    }
  };

  return (
    <EntityProviderContext.Provider {...props} value={value}>
      {children}
    </EntityProviderContext.Provider>
  );
};

export default EntityProvider;
