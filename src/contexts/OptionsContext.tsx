import { OptionsProviderState } from '@/types';
import { createContext } from 'react';


const initialState: OptionsProviderState = {
  showSettings: false,
  setShowSettings: () => null,
  settings: 'appearance',
  setSettings: () => null,
  showHelpFeedback: false,
  setShowHelpFeedback: () => null
};

const OptionsProviderContext = createContext<OptionsProviderState>(initialState);

export default OptionsProviderContext;