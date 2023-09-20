import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { colorItems } from '@/utils/constants';
import ColorItem from './ColorItem';

const DropdownColor = () => {
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
                <div className='h-5 w-5 rounded-full border bg-primary'></div>
                <span className='sr-only'>Theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className='flex gap-2 items-center'>
            Theme
            <DropdownMenuShortcut>⌘+M</DropdownMenuShortcut>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {colorItems.map((item, index) => (
          <ColorItem key={index} _color={item.name} hex={item.hex} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownColor;
