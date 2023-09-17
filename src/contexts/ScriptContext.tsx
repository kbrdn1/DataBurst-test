import { createContext } from 'react';
import { ScriptProviderState } from '@/types';

const initialState: ScriptProviderState = {
  showScript: false,
  setShowScript: () => null,
  scriptView: 'SQL',
  setScriptView: () => null
};

const ScriptProviderContext = createContext<ScriptProviderState>(initialState);

export default ScriptProviderContext;
