import { ModeProviderState } from '@/types';
import { createContext } from 'react';


const initialState: ModeProviderState = {
  mode: 'normal',
  setMode: () => null,
};

const ModeProviderContext = createContext<ModeProviderState>(initialState);

export default ModeProviderContext;