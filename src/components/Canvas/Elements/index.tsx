import useCanvas from '@/hooks/useCanvas';
import { PropsWithChildren } from 'react';
import { inBounds } from '@/utils/math-utils';
import { CanvasPosition, Screen } from '@/types';

const Position = ({
  left,
  top,
  width,
  height,
  children
}: PropsWithChildren<CanvasPosition>) => {
  const { getScreen } = useCanvas();
  const screen: Screen = getScreen();

  if (
    inBounds(
      { left, top, height, width },
      {
        left: screen.x,
        top: screen.y,
        width: screen.width,
        height: screen.height
      }
    )
  ) {
    return (
      <div
        className='absolute inline-block'
        style={{
          left: `${left - screen.x}px`,
          top: `${top - screen.y}px`
        }}
      >
        {children}
      </div>
    );
  } else return null;
};

export default Position;
