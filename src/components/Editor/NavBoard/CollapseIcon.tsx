import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useEditor from '@/hooks/useEditor';

const CollapseIcon = () => {
    const { collapseNavBoard, setCollapseNavBoard } = useEditor();
    return (
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
    );
};

export default CollapseIcon;