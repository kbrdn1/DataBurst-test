import { Button } from '@/components/ui/button';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';

const Collaboration = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6'>
        <div className='w-9 h-9 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 dark:ring-background'>
          PM
        </div>
        <div className='w-9 h-9 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-background'>
          OD
        </div>
        <div className='w-9 h-9 rounded-full flex items-center justify-center bg-accent shadow-lg ring-2 ring-background'>
          +2
        </div>
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <span className='font-semibold'>Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className='flex gap-2 items-center'>
              Share
              <DropdownMenuShortcut>⌘+P</DropdownMenuShortcut>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Collaboration;
