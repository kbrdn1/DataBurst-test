import { Background } from ".";
export type Theme = 'dark' | 'light' | 'system';

export type Color =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColor?: Color;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: Color;
  setColor: (color: Color) => void;
};

export type ColorItemProps = {
  _color: Color;
  hex: string;
}

export type BackgroundItemProps = {
  _background: Background;
}