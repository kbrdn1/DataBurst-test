import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import useEditor from '@/hooks/useEditor';
import { X } from 'lucide-react';

const Script = () => {
  const { setShowScript } = useEditor();
  return (
    <div className='shadow w-full h-full z-40 bg-background p-3 pb-0 rounded-xl rounded-b-none border'>
      <div className='relative h-full w-full'>
        <Button
          variant='ghost'
          size='icon'
          className='absolute top-0 right-0'
          onClick={() => setShowScript(false)}
        >
          <X className='w-[1.5rem] h-[1.5rem]' />
        </Button>
        <Textarea className='w-full h-full resize-none overflow-auto rounded-b-none bg-zinc-950 dark:bg-zinc-900' />
      </div>
    </div>
  );
};

export default Script;
