import { CanvasProviderState } from '@/types';
import { createContext } from 'react';


const initialState: CanvasProviderState = {
  zoom: 1,
  setZoom: () => null,
  background: 'dots',
  setBackground: () => null,
  view: 'CDM',
  setView: () => null,
  collapseNavBoard: false, // editor
  setCollapseNavBoard: () => null, // editor
  shouldRender: true,
  setShouldRender: () => null,
  pixelRatio: window.devicePixelRatio || 1,
  setPixelRatio: () => null,
  container: {
    width: 0,
    height: 0
  },
  setContainer: () => null,
  pointer: {
    x: 0,
    y: 0
  },
  setPointer: () => null,
  camera: {
    x: 0,
    y: 0,
    z: 0
  },
  setCamera: () => null,
  initialize: () => null,
  moveCamera: () => null,
  zoomCamera: () => null,
  movePointer: () => null,
  getScale: () => ({ x: 0, y: 0 }),
  getScreen: () => ({ x: 0, y: 0, width: 0, height: 0 })
};

const CanvasProviderContext = createContext<CanvasProviderState>(initialState);

export default CanvasProviderContext;