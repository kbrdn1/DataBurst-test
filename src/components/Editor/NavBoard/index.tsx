import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import useCanvas from '@/hooks/useCanvas';
import { ChevronLeft } from 'lucide-react';
import Options from './Options';
import SearchBox from './SearchBox';
import Views from './Views';

const NavBoard = () => {
  const { collapseNavBoard, setCollapseNavBoard } = useCanvas();

  return (
    <aside
      className={`fixed shadow top-4 left-4 flex flex-col gap-4 pt-4 border bg-background rounded-xl min-w-[256px] resize-x ${
        !collapseNavBoard ? 'h-[calc(100%-2rem)]' : 'h-[74px]'
      } duration-200 ease-out overflow-hidden`}
    >
      <div className='flex justify-between px-4 items-center'>
        <h1 className='text-xl font-semibold'>Project Name</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setCollapseNavBoard(!collapseNavBoard)}
              >
                <ChevronLeft
                  className={`h-[1.2rem] w-[1.2rem] ${
                    collapseNavBoard ? '-rotate-90' : null
                  } transition-all`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className='flex gap-2 items-center'>
              Collapse
              <DropdownMenuShortcut>⌘+Q</DropdownMenuShortcut>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <SearchBox />
      <Views />
      <Separator />
      <div className='w-full h-full'></div>
      <Separator />
      <Options />
    </aside>
  );
};

export default NavBoard;
