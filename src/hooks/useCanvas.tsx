import { useContext } from 'react';
import CanvasProviderContext from '@/contexts/CanvasContext';

const useCanvas = () => {
  const context = useContext(CanvasProviderContext);

  if (context === undefined)
    throw new Error('useCanvas must be used within a CanvasProvider');

  return context;
};

export default useCanvas;