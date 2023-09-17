export interface CanvasPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface TextBlockProps extends CanvasPosition {
  color: string;
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
  storageKey?: string;
};

export type Background = 'dots' | 'grid' | 'cross' | 'dash' | 'none';
export type View = 'CDM' | 'UML' | 'LDM';

export type CanvasProviderState = {
  zoom: number;
  setZoom: (zoom: number) => void;
  background: Background;
  setBackground: (background: Background) => void;
  view: View;
  setView: (view: View) => void;
  collapseNavBoard: boolean;
  setCollapseNavBoard: (collapseNavBoard: boolean) => void;
};