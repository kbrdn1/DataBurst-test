export interface CanvasPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface CanvasState {
  shouldRender: boolean;
  pixelRatio: number; // our resolution for dip calculations
  container: {
    //holds information related to our screen container
    width: number;
    height: number;
  };
  pointer: {
    x: number;
    y: number;
  };
  camera: {
    //holds camera state
    x: number;
    y: number;
    z: number;
  };
}

export type CanvasProviderProps = {
  children: React.ReactNode;
  defaultZoom?: number;
  defaultBackground?: Background;
  defaultView?: View;
  defaultCollapseNavBoard?: boolean;
  defaultShouldRender?: boolean;
  defaultPixelRatio?: number;
  defaultContainer?: {
    width: number;
    height: number;
  };
  defaultPointer?: {
    x: number;
    y: number;
  };
  defaultCamera?: {
    x: number;
    y: number;
    z: number;
  };
  storageKey?: string;
};

export type Background = 'dots' | 'grid' | 'cross' | 'dash' | 'none';
export type View = 'CDM' | 'UML' | 'LDM';
export type Screen = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type Container = {
  width: number;
  height: number;
};
export type Pointer = {
  x: number;
  y: number;
};
export type Camera = {
  x: number;
  y: number;
  z: number;
};
export type Scale = {
  x: number;
  y: number;
};

export type CanvasProviderState = {
  zoom: number;
  setZoom: (zoom: number) => void;
  background: Background;
  setBackground: (background: Background) => void;
  view: View;
  setView: (view: View) => void;
  collapseNavBoard: boolean; // editor
  setCollapseNavBoard: (collapseNavBoard: boolean) => void; // editor
  shouldRender: boolean;
  setShouldRender: (shouldRender: boolean) => void;
  pixelRatio: number;
  setPixelRatio: (pixelRatio: number) => void;
  container: Container;
  setContainer: (container: Container) => void;
  pointer: Pointer;
  setPointer: (pointer: Pointer) => void;
  camera: Camera;
  setCamera: (camera: Camera) => void;
  initialize: (width: number, height: number) => void;
  moveCamera: (mx: number, my: number) => void;
  zoomCamera: (deltaX: number, deltaY: number) => void;
  movePointer: (deltaX: number, deltaY: number) => void;
  getScale: () => Scale;
  getScreen: () => Screen;
};
