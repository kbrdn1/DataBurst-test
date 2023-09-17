import CanvasProviderContext from '@/contexts/CanvasContext';
import {
  Background,
  CanvasProviderProps,
  CanvasProviderState,
  View
} from '@/types';
import { useEffect, useState, useMemo } from 'react';

const CanvasProvider = ({
  children,
  defaultZoom = 1,
  defaultBackground = 'dots',
  defaultView = 'CDM',
  defaultCollapseNavBoard = false,
  storageKey = 'canvas-ui',
  ...props
}: CanvasProviderProps) => {
  const [zoom, setZoom] = useState<number>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).zoom || defaultZoom;

    return defaultZoom;
  });
  const [background, setBackground] = useState<Background>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).background || defaultBackground;

    return defaultBackground;
  });

  const [view, setView] = useState<View>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).view || defaultView;

    return defaultView;
  });

  const [collapseNavBoard, setCollapseNavBoard] = useState<boolean>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).collapseNavBord || defaultCollapseNavBoard;

    return defaultCollapseNavBoard;
  });

  useEffect(() => {
    const storage = {
      zoom,
      background,
      view,
      collapseNavBoard
    };
    localStorage.setItem(storageKey, JSON.stringify(storage));
  }, [zoom, background, view, collapseNavBoard, storageKey]);

  const value: CanvasProviderState = useMemo(() => {
    return {
      zoom,
      setZoom: (zoom: number) => {
        setZoom(zoom);
      },
      background,
      setBackground: (background: Background) => {
        setBackground(background);
      },
      view,
      setView: (view: View) => {
        setView(view);
      },
      collapseNavBoard,
      setCollapseNavBoard: (collapseNavBord: boolean) => {
        setCollapseNavBoard(collapseNavBord);
      }
    };
  }, [zoom, background, view, collapseNavBoard]);

  return (
    <CanvasProviderContext.Provider {...props} value={value}>
      {children}
    </CanvasProviderContext.Provider>
  );
};

export default CanvasProvider;
