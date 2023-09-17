import useCanvas from '@/hooks/useCanvas';
import { PointerEvent, useEffect, useRef, WheelEvent } from 'react';
import useSize from '@react-hook/size';
import InfiniteCanvas from './InfiniteCanvas';
// import useRenderLoop from './RenderLoop';

const CanvasRoot = () => {
  const { moveCamera, zoomCamera, movePointer, initialize } = useCanvas();
  const canvas = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(canvas);
  useEffect(() => {
    if (width === 0 || height === 0) return;
    initialize(width, height);
  }, [width, height, initialize]);
  // const frame = useRenderLoop(144);
  
  const wheelListener = (e: WheelEvent) => {
    const friction = 1;
    const deltaX = e.deltaX * friction;
    const deltaY = e.deltaY * friction;
    if (!e.ctrlKey) {
      moveCamera(deltaX, deltaY);
    } else {
      zoomCamera(deltaX, deltaY);
    }
  };

  const pointerListener = (event: PointerEvent) => {
    movePointer(event.clientX, event.clientY);
  };
  return (
    <div className='w-full h-full'>
      <div
        className='w-full h-full relative overflow-hidden overscroll-none'
        ref={canvas}
        onWheel={wheelListener}
        onPointerMove={pointerListener}
      >
        <InfiniteCanvas
          // frame={frame}
        ></InfiniteCanvas>
      </div>
    </div>
  );
};

export default CanvasRoot;
