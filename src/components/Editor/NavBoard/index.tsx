import { Separator } from '@/components/ui/separator';
import useEditor from '@/hooks/useEditor';
import CollapseIcon from './CollapseIcon';
import Options from './Options';
import SearchBox from './SearchBox';
import Views from './Views';

const NavBoard = () => {
  const { collapseNavBoard } = useEditor();

  return (
    <aside
      className={`fixed shadow top-4 left-4 flex flex-col gap-4 pt-4 border bg-background rounded-xl min-w-[256px] resize-x ${
        !collapseNavBoard ? 'h-[calc(100%-2rem)]' : 'h-[74px]'
      } duration-200 ease-out overflow-hidden`}
    >
      <div className='flex justify-between px-4 items-center'>
        <h1 className='text-xl font-semibold'>Project Name</h1>
        <CollapseIcon />
      </div>
      <SearchBox />
      <Views />
      <Separator />
      <div className='w-full h-full'></div>
      <Separator />
      <Options />
    </aside>
  );
};

export default NavBoard;
