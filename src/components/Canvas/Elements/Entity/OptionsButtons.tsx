import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

const OptionsButtons = () => {
  return (
    <div className='absolute top-0 right-0 -z-10 group-hover:-translate-y-[calc(100%+.4rem)] transition-all ease-in-out'>
      <Button
        variant='outline'
        size='icon'
        className='rounded-r-none'
      >
        <Pencil size={16} />
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='rounded-l-none hover:bg-destructive text-destructive hover:text-white'
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
};

export default OptionsButtons;
