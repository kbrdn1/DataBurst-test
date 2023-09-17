import CanvasProvider from '@/providers/CanvasProvider';
import EntityProvider from '@/providers/EntityProvider';
import ModeProvider from '@/providers/ModeProvider';
import ScriptProvider from '@/providers/ScriptProvider';
import OptionsProvider from '@/providers/OptionsProvider';
import { Entity } from '@/types';
import { PropsWithChildren } from 'react';
import Area from './Area';
import NavTools from './NavTools';
import NavBoard from './NavBoard';
import NavElements from './NavElements';
import NavScript from './NavScript';

const Editor = ({ children }: PropsWithChildren) => {
  const defaultEntitie: Entity[] =
    JSON.parse(localStorage.getItem('data-entity') as string) || [];

  return (
    <CanvasProvider
      defaultZoom={1}
      defaultBackground='dots'
      defaultView='CDM'
      defaultCollapseNavBoard={false}
      storageKey='canvas-ui'
    >
      <ScriptProvider
        defaultShowScript={false}
        defaultScriptView='SQL'
        storageKey='script'
      >
        <OptionsProvider
          defaultSettings='appearance'
          defaultShowHelpFeedback={false}
          storageKey='options'
        >
          <EntityProvider
            defaultEntities={defaultEntitie}
            storageKey='data-entity'
          >
            <ModeProvider defaultMode='normal' storageKey='mode'>
              <Area>{children}</Area>
              <NavBoard />
              <NavTools />
              <NavElements />
              <NavScript />
            </ModeProvider>
          </EntityProvider>
        </OptionsProvider>
      </ScriptProvider>
    </CanvasProvider>
  );
};

export default Editor;
