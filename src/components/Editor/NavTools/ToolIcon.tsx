import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import useEditor from '@/hooks/useEditor';
import { ToolIconProps } from '@/types';
import { PropsWithChildren } from 'react';

const ToolIcon = ({ _mode, name, shortcut, onClick, variant, size, children}: PropsWithChildren<ToolIconProps>) => {
  const { mode, setMode } = useEditor();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant || 'ghost'}
            size={size || 'icon'}
            onClick={ _mode ? () => setMode(_mode) : onClick}
            className={mode === _mode ? 'text-primary bg-accent' : ''}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className='flex gap-2 items-center'>
            {name}
          <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolIcon;
