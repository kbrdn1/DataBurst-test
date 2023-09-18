import { useContext } from 'react';
import EditorProviderContext from '@/contexts/EditorContext';

const useEditor = () => {
  const context = useContext(EditorProviderContext);

  if (context === undefined)
    throw new Error('useEditor must be used within a EditorProvider');

  return context;
};

export default useEditor;
