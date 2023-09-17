import CanvasProviderContext from '@/contexts/CanvasContext';
import {
  Background,
  CanvasProviderProps,
  CanvasProviderState,
  View,
  Container,
  Pointer,
  Camera,
  Screen,
  Scale
} from '@/types';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { CAMERA_ANGLE, RECT_H, RECT_W } from '@/utils/constants';
import {
  cameraToScreenCoordinates,
  scaleWithAnchorPoint
} from '@/utils/camera-utils';

const CanvasProvider = ({
  children,
  defaultZoom = 1,
  defaultBackground = 'dots',
  defaultView = 'CDM',
  defaultCollapseNavBoard = false,
  defaultShouldRender = true,
  defaultPixelRatio = window.devicePixelRatio || 1,
  defaultContainer = { width: 0, height: 0 },
  defaultPointer = { x: 0, y: 0 },
  defaultCamera = { x: 0, y: 0, z: 0 },
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

  const [shouldRender, setShouldRender] = useState<boolean>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).shouldRender || defaultShouldRender;

    return defaultShouldRender;
  });

  const [pixelRatio, setPixelRatio] = useState<number>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).pixelRatio || defaultPixelRatio;

    return defaultPixelRatio;
  });

  const [container, setContainer] = useState<Container>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).container || defaultContainer;

    return defaultContainer;
  });

  const [pointer, setPointer] = useState<Pointer>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).pointer || defaultPointer;

    return defaultPointer;
  });

  const [camera, setCamera] = useState<Camera>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) JSON.parse(storage).camera || defaultCamera;

    return defaultCamera;
  });

  const initialize = useCallback((width: number, height: number) => {
    setPixelRatio(window.devicePixelRatio || 1);
    setContainer({ width, height });
    setCamera({
      x: 1.5 * RECT_W,
      y: 1.5 * RECT_H,
      z: width / (2 * Math.tan(CAMERA_ANGLE))
    });
  }, []);

  const getAspect = useCallback(() => {
    const { width, height } = container;
    return width / height;
  }, [container]);

  const getScreen = useCallback((): Screen => {
    const { x, y, z } = camera;
    const aspect = getAspect();
    const angle = CAMERA_ANGLE;
    return cameraToScreenCoordinates(x, y, z, angle, aspect);
  }, [camera, getAspect]);

  const getScale = useCallback((): Scale => {
    const { width: screenWidth, height: screenHeight } = getScreen();
    const { width: containerWidth, height: containerHeight } = container;
    return {
      x: containerWidth / screenWidth,
      y: containerHeight / screenHeight
    };
  }, [getScreen, container]);

  const isCameraInBounds = useCallback((
    cameraX: number,
    cameraY: number,
    cameraZ: number
  ): boolean => {
    return cameraX && cameraY && cameraZ ? true : false;
    // const angle = radians(30);
    // const { x, y, width, height } = cameraToScreenCoordinates(
    //   cameraX,
    //   cameraY,
    //   cameraZ,
    //   angle,
    //   this.aspect
    // );
    // const isXInBounds = x >= 0 && x <= this.data.canvas.width;
    // const isYInBounds = y >= 0 && y <= this.data.canvas.height;
    // return isXInBounds && isYInBounds;
  }, []);

    const movePointer = useCallback((deltaX: number, deltaY: number) => {
    const scale = getScale();
    const { x: left, y: top } = getScreen();
    const newX = left + deltaX / scale.x;
    const newY = top + deltaY / scale.y;
    setPointer({ x: newX, y: newY });
  }, [getScale, getScreen, setPointer]);

  const moveCamera = useCallback((mx: number, my: number) => {
    const scrollFactor = 1.5;
    const deltaX = mx * scrollFactor,
      deltaY = my * scrollFactor;
    const { x, y, z } = camera;
    if (isCameraInBounds(x + deltaX, y + deltaY, z)) {
      camera.x += deltaX;
      camera.y += deltaY;
      // move pointer by the same amount
      setShouldRender(true);
      movePointer(deltaY, deltaY);
    }
  }, [camera, setShouldRender, isCameraInBounds, movePointer])

  const zoomCamera = useCallback((_: number, deltaY: number) => {
    // Normal zoom is quite slow, we want to scale the amount quite a bit
    const zoomScaleFactor = 10;
    const deltaAmount = zoomScaleFactor * Math.max(deltaY);
    const { x: oldX, y: oldY, z: oldZ } = camera;
    const oldScale = { ...getScale() };

    const { width: containerWidth, height: containerHeight } = container;
    const { width, height } = cameraToScreenCoordinates(
      oldX,
      oldY,
      oldZ + deltaAmount,
      CAMERA_ANGLE,
      getAspect()
    );
    const newScaleX = containerWidth / width;
    const newScaleY = containerHeight / height;
    const { x: newX, y: newY } = scaleWithAnchorPoint(
      pointer.x,
      pointer.y,
      oldX,
      oldY,
      oldScale.x,
      oldScale.y,
      newScaleX,
      newScaleY
    );
    let newZ = oldZ + deltaAmount;
    newZ = newZ < 500 ? 500 : newZ;
    newZ = newZ > 2000 ? 2000 : newZ;
    setShouldRender(true);
    if (isCameraInBounds(oldX, oldY, newZ)) {
      setCamera({
        x: newX,
        y: newY,
        z: newZ
      });
      setZoom(newZ/1000);
    }
  },[camera, container, pointer, setCamera, setZoom, setShouldRender, getScale, getAspect, isCameraInBounds])

  useEffect(() => {
    const storage = {
      zoom,
      background,
      view,
      collapseNavBoard,
      shouldRender,
      pixelRatio,
      container,
      pointer,
      camera
    };
    localStorage.setItem(storageKey, JSON.stringify(storage));
  }, [
    zoom,
    background,
    view,
    collapseNavBoard,
    shouldRender,
    pixelRatio,
    container,
    pointer,
    camera,
    storageKey
  ]);

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
      collapseNavBoard, // editor
      setCollapseNavBoard: (collapseNavBord: boolean) => {
        // editor
        setCollapseNavBoard(collapseNavBord);
      },
      shouldRender,
      setShouldRender: (shouldRender: boolean) => {
        setShouldRender(shouldRender);
      },
      pixelRatio,
      setPixelRatio: (pixelRatio: number) => {
        setPixelRatio(pixelRatio);
      },
      container,
      setContainer: (container: Container) => {
        setContainer(container);
      },
      pointer,
      setPointer: (pointer: Pointer) => {
        setPointer(pointer);
      },
      camera,
      setCamera: (camera: Camera) => {
        setCamera(camera);
      },
      initialize,
      moveCamera,
      zoomCamera,
      movePointer,
      getScale,
      getScreen
    };
  }, [
    zoom,
    background,
    view,
    collapseNavBoard,
    shouldRender,
    pixelRatio,
    container,
    pointer,
    camera,
    initialize,
    moveCamera,
    zoomCamera,
    movePointer,
    getScale,
    getScreen
  ]);

  return (
    <CanvasProviderContext.Provider {...props} value={value}>
      {children}
    </CanvasProviderContext.Provider>
  );
};

export default CanvasProvider;
