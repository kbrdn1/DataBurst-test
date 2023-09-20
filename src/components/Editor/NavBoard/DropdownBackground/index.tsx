import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { backgrounds } from '@/utils/constants';
import { Layers } from 'lucide-react';
import BackgroundItem from './BackgroundItem';

const DropdownBackground = () => {
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='text-stone-300 dark:text-stone-700'
              >
                <Layers className='h-5 w-5' />
                <span className='sr-only'>Background Layers</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className='flex gap-2 items-center'>
            Background Layers
            <DropdownMenuShortcut>⌘+B</DropdownMenuShortcut>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        <DropdownMenuLabel>Background Layers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {backgrounds.map((item, index) => (
          <BackgroundItem key={index} _background={item} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownBackground;
