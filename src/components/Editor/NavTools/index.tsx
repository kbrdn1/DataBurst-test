import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import useCanvas from '@/hooks/useCanvas';
import useMode from '@/hooks/useMode';
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
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';

const NavTools = () => {
  const { zoom, setZoom, camera, setCamera } = useCanvas();
  const { mode, setMode } = useMode();

  const handleResetZoom = () => {
    setZoom(1);
    setCamera({
      ...camera,
      z: 1000
    });
  }

  return (
    <nav className='flex shadow p-2 border rounded-xl justify-between fixed z-50 w-fit bg-background top-4 left-1/2 -translate-x-1/2'>
      <div className='h-full flex divide-x-2'>
        <div className='flex gap-1 pr-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('normal')}
                  className={mode === 'normal' ? 'text-primary bg-accent' : ''}
                >
                  <MousePointer2 className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Normal
                <DropdownMenuShortcut>V</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('move')}
                  className={mode === 'move' ? 'text-primary bg-accent' : ''}
                >
                  <Hand className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Move
                <DropdownMenuShortcut>Space</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('select')}
                  className={mode === 'select' ? 'text-primary bg-accent' : ''}
                >
                  <BoxSelect className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Selection
                <DropdownMenuShortcut>S</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Undo2 className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Undo
                <DropdownMenuShortcut>⌘+Z</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Redo2 className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Redo
                <DropdownMenuShortcut>⌘+Y</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='flex gap-1 px-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('entity')}
                  className={mode === 'entity' ? 'text-primary bg-accent' : ''}
                >
                  <Table className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Add Entity
                <DropdownMenuShortcut>T</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('association')}
                  className={
                    mode === 'association' ? 'text-primary bg-accent' : ''
                  }
                >
                  <SendToBack className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Add Association
                <DropdownMenuShortcut>R</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('inheritance')}
                  className={
                    mode === 'inheritance' ? 'text-primary bg-accent' : ''
                  }
                >
                  <Triangle className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Add Inheritance
                <DropdownMenuShortcut>I</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setMode('constraint')}
                  className={
                    mode === 'constraint' ? 'text-primary bg-accent' : ''
                  }
                >
                  <XCircle className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Add Constraint
                <DropdownMenuShortcut>C</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='flex gap-1 px-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' onClick={handleResetZoom}>
                  <span className='text-sm whitespace-nowrap'>{`${(
                    zoom * 100
                  ).toFixed(0)} %`}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Reset Zoom
                <DropdownMenuShortcut>⌘+0</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='flex gap-1 pl-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='secondary'>
                  <span className='text-sm'>Export</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Export
                <DropdownMenuShortcut>⌘+E</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </nav>
  );
};

export default NavTools;
