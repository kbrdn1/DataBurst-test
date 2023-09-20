import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import useEditor from '@/hooks/useEditor';
import { ScriptIconProps } from '@/types';
import { PropsWithChildren } from 'react';

const ScriptIcon = ({
  _scriptView,
  name,
  shortcut,
  onClick,
  children
}: PropsWithChildren<ScriptIconProps>) => {
  const { scriptView } = useEditor();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            onClick={onClick}
            className={
              scriptView === _scriptView ? 'text-primary bg-accent' : ''
            }
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

export default ScriptIcon;
