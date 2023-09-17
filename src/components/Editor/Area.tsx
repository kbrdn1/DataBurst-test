import EntityForm from '@/components/Forms/EntityForm';
import useCanvas from '@/hooks/useCanvas';
import useMode from '@/hooks/useMode';
import {
  MouseEvent,
  PropsWithChildren,
  WheelEventHandler,
  useState
} from 'react';
import ChangeMode from './ChangeMode';
import Shortcut from './Shortcut';

const Area = ({ children }: PropsWithChildren) => {
  const { zoom, setZoom, background } = useCanvas();
  const { mode, setMode } = useMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEntityForm, setShowEntityForm] = useState<boolean>(false);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    const { deltaY } = e;
    let value = zoom;

    deltaY > 0 ? (value -= deltaY / 100) : (value -= deltaY / 100);
    value > 2 ? (value = 2) : value < 0.5 ? (value = 0.5) : value;

    setZoom(value);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (mode === 'entity') {
      setShowEntityForm(true);
      setMode('normal');
      setMousePosition({ x: e.clientX / zoom, y: e.clientY / zoom });
    }
  };

  return (
    <ChangeMode>
      <Shortcut>
        <section
          className={`absolute w-screen bg-light dark:bg-dark bg-center h-screen overflow-hidden
      bg-${background}
      `}
          onClick={handleClick}
        >
            <EntityForm
              show={showEntityForm}
              setShow={setShowEntityForm}
              position={mousePosition}
            />
            {children}
        </section>
      </Shortcut>
    </ChangeMode>
  );
};

export default Area;
