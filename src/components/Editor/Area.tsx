// import EntityForm from '@/components/Forms/EntityForm';
import useCanvas from '@/hooks/useCanvas';
import useMode from '@/hooks/useMode';
import {
  MouseEvent,
  PropsWithChildren,
  // useState
} from 'react';
import ChangeMode from './ChangeMode';
import Shortcut from './Shortcut';

const Area = ({ children }: PropsWithChildren) => {
  const { background } = useCanvas();
  const { mode, setMode } = useMode();
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [showEntityForm, setShowEntityForm] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (mode === 'entity') {
      // setShowEntityForm(true);
      setMode('normal');
      // setMousePosition({ x: e.clientX / zoom, y: e.clientY / zoom });
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
            {/* <EntityForm
              show={showEntityForm}
              setShow={setShowEntityForm}
              position={mousePosition}
            /> */}
            {children}
        </section>
      </Shortcut>
    </ChangeMode>
  );
};

export default Area;
