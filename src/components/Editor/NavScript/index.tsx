import useEditor from '@/hooks/useEditor';
import Script from './Script';
import ScriptIcon from './ScriptIcon';

const NavScript = () => {
  const { showScript, setShowScript, setScriptView } = useEditor();

  const handleSQL = () => {
    setScriptView('SQL');
    setShowScript(true);
  };

  const handlePDM = () => {
    setScriptView('PDM');
    setShowScript(true);
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
          <ScriptIcon
            _scriptView='SQL'
            name='SQL Script'
            shortcut='⌘+O'
            onClick={handleSQL}
          >
            SQL
          </ScriptIcon>
          <div className='border'></div>
          <ScriptIcon
            _scriptView='PDM'
            name='PDM Script'
            shortcut='⌘+L'
            onClick={handlePDM}
          >
            PDM
          </ScriptIcon>
        </div>
        <div
          className={`${
            showScript ? 'h-[50vh]' : 'h-0 -mb-4'
          } duration-200 ease-out overflow-hidden resize-x min-w-[50vw] max-w-[100vw]`}
        >
          <Script />
        </div>
      </nav>
    </>
  );
};

export default NavScript;
