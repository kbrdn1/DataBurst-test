import { useContext } from 'react';
import EntityProviderContext from '@/contexts/EntityContext';

const useEntity = () => {
  const context = useContext(EntityProviderContext);

  if (context === undefined)
    throw new Error('useEntity must be used within a EntityProvider');

  return context;
};

export default useEntity;
