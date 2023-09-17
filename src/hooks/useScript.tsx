import { useContext } from 'react';
import ScriptProviderContext from '@/contexts/ScriptContext';

const useScript = () => {
  const context = useContext(ScriptProviderContext);

  if (context === undefined)
    throw new Error('useScript must be used within a ScriptProvider');

  return context;
};

export default useScript;