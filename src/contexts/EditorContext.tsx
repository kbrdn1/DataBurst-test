import { EditorProviderState } from '@/types';
import { createContext } from 'react';


const initialState: EditorProviderState = {
  mode: 'normal',
  setMode: () => null,
  showSettings: false,
  setShowSettings: () => null,
  settings: 'appearance',
  setSettings: () => null,
  showHelpFeedback: false,
  setShowHelpFeedback: () => null,
  showScript: false,
  setShowScript: () => null,
  scriptView: 'SQL',
  setScriptView: () => null,
  collapseNavBoard: false,
  setCollapseNavBoard: () => null,
};

const EditorProviderContext = createContext<EditorProviderState>(initialState);

export default EditorProviderContext;