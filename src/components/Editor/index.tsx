import CanvasProvider from '@/providers/CanvasProvider';
import EntityProvider from '@/providers/EntityProvider';
import EditorProvider from '@/providers/EditorProvider';
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
      defaultShouldRender={true}
      defaultPixelRatio={window.devicePixelRatio || 1}
      defaultContainer={{ width: 0, height: 0 }}
      defaultPointer={{ x: 0, y: 0 }}
      defaultCamera={{ x: 0, y: 0, z: 0 }}
      storageKey='canvas-ui'
    >
      <EditorProvider
        defaultMode='normal'
        defaultShowSettings={false}
        defaultSettings='appearance'
        defaultShowHelpFeedback={false}
        defaultShowScript={false}
        defaultScriptView='SQL'
        defaultCollapseNavBoard={false}
        storageKey='editor-ui'
      >
        <EntityProvider
          defaultEntities={defaultEntitie}
          storageKey='data-entity'
        >
          <Area>{children}</Area>
          <NavBoard />
          <NavTools />
          <NavElements />
          <NavScript />
        </EntityProvider>
      </EditorProvider>
    </CanvasProvider>
  );
};

export default Editor;
