import useCanvas from '@/hooks/useCanvas';
import {
  BoxSelect,
  Hand,
  MousePointer2,
  Redo2,
  SendToBack,
  Table,
  Triangle,
  Undo2,
  XCircle
} from 'lucide-react';
import ToolIcon from './ToolIcon';

const NavTools = () => {
  const { zoom, setZoom, camera, setCamera } = useCanvas();

  const handleResetZoom = () => {
    setZoom(1);
    setCamera({
      ...camera,
      z: 1000
    });
  };

  return (
    <nav className='flex shadow p-2 border rounded-xl justify-between fixed z-50 w-fit bg-background top-4 left-1/2 -translate-x-1/2'>
      <div className='h-full flex divide-x-2'>
        <div className='flex gap-1 pr-2'>
          <ToolIcon _mode='normal' name='Normal' shortcut='V'>
            <MousePointer2 className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon _mode='move' name='Move' shortcut='Space'>
            <Hand className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon _mode='select' name='Select' shortcut='S'>
            <BoxSelect className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon name='Undo' shortcut='⌘+Z'>
            <Undo2 className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon name='Redo' shortcut='⌘+Y'>
            <Redo2 className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
        </div>
        <div className='flex gap-1 px-2'>
          <ToolIcon _mode='entity' name='Entity' shortcut='T'>
            <Table className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon _mode='association' name='Association' shortcut='R'>
            <SendToBack className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon _mode='inheritance' name='Inheritance' shortcut='I'>
            <Triangle className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
          <ToolIcon _mode='constraint' name='Constraint' shortcut='C'>
            <XCircle className='h-[1.2rem] w-[1.2rem]' />
          </ToolIcon>
        </div>
        <div className='flex gap-1 px-2'>
          <ToolIcon
            name='Reset Zoom'
            size='default'
            shortcut='⌘+0'
            onClick={handleResetZoom}
          >
            <span className='text-sm whitespace-nowrap'>{`${(
              zoom * 100
            ).toFixed(0)} %`}</span>
          </ToolIcon>
        </div>
        <div className='flex gap-1 pl-2'>
          <ToolIcon
            name='Export'
            variant='secondary'
            size='default'
            shortcut='⌘+E'
          >
            <span className='text-sm'>Export</span>
          </ToolIcon>
        </div>
      </div>
    </nav>
  );
};

export default NavTools;
