import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import useCanvas from '@/hooks/useCanvas';
import { View } from '@/types';
import { Check, Layers } from 'lucide-react';

const Views = () => {
  const { background, setBackground, view, setView } = useCanvas();
  const handleView = (view: View) => {
    setView(view);
  };
  return (
    <div className='pt-2'>
      <div className='px-4 pb-1 flex items-center justify-between'>
        <h2 className='text-lg font-medium'>Views</h2>
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
            <DropdownMenuItem onClick={() => setBackground('dots')}>
              Dots{' '}
              {background === 'dots' && (
                <Check className='w-4 h-4 ml-auto text-primary' />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBackground('grid')}>
              Grid{' '}
              {background === 'grid' && (
                <Check className='w-4 h-4 ml-auto text-primary' />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBackground('cross')}>
              Cross{' '}
              {background === 'cross' && (
                <Check className='w-4 h-4 ml-auto text-primary' />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBackground('dash')}>
              Dash{' '}
              {background === 'dash' && (
                <Check className='w-4 h-4 ml-auto text-primary' />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBackground('none')}>
              None{' '}
              {background === 'none' && (
                <Check className='w-4 h-4 ml-auto text-primary' />
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      <div className='pt-4 px-4 pl-6'>
        <RadioGroup
          defaultValue='CDM'
          className='gap-3'
          onValueChange={handleView}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='flex items-center space-x-2 relative'>
                  <Check
                    className={`absolute w-4 h-4 top-0 -left-3 ${
                      view === 'CDM' ? 'text-primary' : 'text-transparent'
                    }`}
                  />
                  <RadioGroupItem checkmark value='CDM' id='cdm-view' />
                  <Label
                    htmlFor='cdm-view'
                    className={
                      view !== 'CDM' ? 'text-stone-300 dark:text-stone-600' : 'text-primary'
                    }
                  >
                    CDM
                  </Label>
                </div>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Coceptual Data Model
                <DropdownMenuShortcut>⌘+1</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='flex items-center space-x-2 relative'>
                  <Check
                    className={`absolute w-4 h-4 top-0 -left-3 ${
                      view === 'UML' ? 'text-primary' : 'text-transparent'
                    }`}
                  />
                  <RadioGroupItem checkmark value='UML' id='uml-view' />
                  <Label
                    htmlFor='uml-view'
                    className={
                      view !== 'UML' ? 'text-stone-300 dark:text-stone-600' : 'text-primary'
                    }
                  >
                    UML
                  </Label>
                </div>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Unified Modeling Language
                <DropdownMenuShortcut>⌘+2</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='flex items-center space-x-2 relative'>
                  <Check
                    className={`absolute w-4 h-4 top-0 -left-3 ${
                      view === 'LDM' ? 'text-primary' : 'text-transparent'
                    }`}
                  />
                  <RadioGroupItem checkmark value='LDM' id='ldm-view' />
                  <Label
                    htmlFor='ldm-view'
                    className={
                      view !== 'LDM' ? 'text-stone-300 dark:text-stone-600' : 'text-primary'
                    }
                  >
                    LDM
                  </Label>
                </div>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Logical Data Model
                <DropdownMenuShortcut>⌘+3</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Views;
