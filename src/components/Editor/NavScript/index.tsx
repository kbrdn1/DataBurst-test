import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import useScript from '@/hooks/useScript';
import { ScriptProps } from '@/types';
import { X } from 'lucide-react';

const NavScript = () => {
  const { showScript, setShowScript, scriptView, setScriptView } = useScript();

  const handleSQL = () => {
    setScriptView('SQL');
    setShowScript(true);
  };

  const handlePDM = () => {
    setScriptView('PDM');
    setShowScript(true);
  };

  const Script = ({ setShow }: ScriptProps) => {
    return (
      <div className='shadow w-full h-full z-40 bg-background p-3 pb-0 rounded-xl rounded-b-none border'>
        <div className='relative h-full w-full'>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-0 right-0'
            onClick={() => setShow(false)}
          >
            <X className='w-[1.5rem] h-[1.5rem]' />
          </Button>
          <Textarea className='w-full h-full resize-none overflow-auto rounded-b-none bg-zinc-950 dark:bg-zinc-900' />
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className={`flex flex-col items-center rounded-xl justify-between fixed z-50 w-fit duration-200 ease-out ${
          showScript ? 'bottom-0' : 'bottom-4'
        } left-1/2 -translate-x-1/2`}
      >
        <div
          className={`h-full flex  gap-1 border bg-background p-2 rounded-xl z-50 ${
            showScript
              ? 'rounded-b-none border-b-0 translate-y-[1px] pb-0'
              : 'mb-4'
          }`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={handleSQL}
                  className={
                    scriptView === 'SQL' ? 'bg-accent text-primary' : ''
                  }
                >
                  SQL
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                SQL Script
                <DropdownMenuShortcut>⌘+O</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className='border'></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={handlePDM}
                  className={
                    scriptView === 'PDM' ? 'bg-accent text-primary' : ''
                  }
                >
                  PDM
                </Button>
              </TooltipTrigger>
              <TooltipContent className='flex gap-2 items-center'>
                Physiqual Data Model
                <DropdownMenuShortcut>⌘+L</DropdownMenuShortcut>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          className={`${
            showScript ? 'h-[50vh]' : 'h-0 -mb-4'
          } duration-200 ease-out overflow-hidden resize-x min-w-[50vw] max-w-[100vw]`}
        >
          <Script setShow={setShowScript} />
        </div>
      </nav>
    </>
  );
};

export default NavScript;
