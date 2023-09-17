import Collaboration from './Collaboration';
import { Separator } from '@/components/ui/separator';

const NavElements = () => {
  return (
    <aside className='fixed shadow top-4 right-4 flex flex-col gap-4 p-4 border bg-background rounded-xl min-w-[256px] h-[calc(100%-2rem)] resize-x'>
      <Collaboration />
      <Separator />
    </aside>
  );
};

export default NavElements;
