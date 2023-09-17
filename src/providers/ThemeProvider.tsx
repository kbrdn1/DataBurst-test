import ThemeProviderContext from '@/contexts/ThemeContext';
import { Color, Theme, ThemeProviderProps } from '@/types';
import { useEffect, useState } from 'react';

const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  defaultColor = 'orange',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).theme || defaultTheme;

    return defaultTheme;
  });

  const [color, setColor] = useState<Color>(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) return JSON.parse(storage).color || defaultColor;

    return defaultColor;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.remove(
      'zinc',
      'slate',
      'stone',
      'gray',
      'neutral',
      'red',
      'rose',
      'orange',
      'green',
      'blue',
      'yellow',
      'violet'
    );

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      const storage = {
        theme,
        color
      };

      localStorage.setItem(storageKey, JSON.stringify(storage));
      root.classList.add(systemTheme);
      root.classList.add(color);
      return;
    }

    const storage = {
      theme,
      color
    };

    localStorage.setItem(storageKey, JSON.stringify(storage));

    root.classList.add(theme);
    root.classList.add(color);
  }, [theme, color, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
    color,
    setColor: (color: Color) => {
      setColor(color);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
