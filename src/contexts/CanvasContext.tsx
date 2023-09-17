import { CanvasProviderState } from '@/types';
import { createContext } from 'react';


const initialState: CanvasProviderState = {
  zoom: 1,
  setZoom: () => null,
  background: 'dots',
  setBackground: () => null,
  view: 'CDM',
  setView: () => null,
  collapseNavBoard: false,
  setCollapseNavBoard: () => null
};

const CanvasProviderContext = createContext<CanvasProviderState>(initialState);

export default CanvasProviderContext;