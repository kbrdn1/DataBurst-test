import { useContext } from 'react';
import OptionsProviderContext from '@/contexts/OptionsContext';

const useOptions = () => {
  const context = useContext(OptionsProviderContext);

  if (context === undefined)
    throw new Error('useOptions must be used within a OptionsProvider');

  return context;
};

export default useOptions;
