import { useContext } from 'react';
import ModeProviderContext from '@/contexts/ModeContext';

const useMode = () => {
  const context = useContext(ModeProviderContext);

  if (context === undefined)
    throw new Error('useMode must be used within a ModeProvider');

  return context;
};

export default useMode;