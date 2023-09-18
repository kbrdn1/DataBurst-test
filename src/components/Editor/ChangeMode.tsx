import Hotkeys from 'react-hot-keys';
import useEditor from '@/hooks/useEditor';
import { PropsWithChildren } from 'react';

const ChangeMode = ({ children }: PropsWithChildren) => {
  const { setMode } = useEditor();
  return (
    <>
      <Hotkeys keyName='v,V,Escape' onKeyDown={() => setMode('normal')}>
        <Hotkeys keyName='space' onKeyDown={() => setMode('move')}>
          <Hotkeys keyName='s,S' onKeyDown={() => setMode('select')}>
            <Hotkeys keyName='t,T' onKeyDown={() => setMode('entity')}>
              <Hotkeys keyName='r,R' onKeyDown={() => setMode('association')}>
                <Hotkeys keyName='i,I' onKeyDown={() => setMode('inheritance')}>
                  <Hotkeys
                    keyName='c,C'
                    onKeyDown={() => setMode('constraint')}
                  >
                    {children}
                  </Hotkeys>
                </Hotkeys>
              </Hotkeys>
            </Hotkeys>
          </Hotkeys>
        </Hotkeys>
      </Hotkeys>
    </>
  );
};

export default ChangeMode;
