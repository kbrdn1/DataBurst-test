import { createContext } from 'react';
import { ThemeProviderState } from '@/types';

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  color: 'orange',
  setColor: () => null
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default ThemeProviderContext;
