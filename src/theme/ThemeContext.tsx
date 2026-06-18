import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export type ThemeColors = {
  primary: string;
  primaryContainer: string;
  background: string;
  surfaceLowest: string;
  surfaceLow: string;
  outline: string;
  outlineVariant: string;
  text: string;
  textSecondary: string;
  success: string;
  danger: string;
};

export type ThemeTypography = {
  primary: string;
  primaryBold: string;
  primaryExtraBold: string;
};

export type ThemeState = {
  isDark: boolean;
  colors: ThemeColors;
  typography: ThemeTypography;
};

const typography: ThemeTypography = {
  primary: 'PlusJakartaSans_400Regular',
  primaryBold: 'PlusJakartaSans_700Bold',
  primaryExtraBold: 'PlusJakartaSans_800ExtraBold',
};

const lightColors: ThemeColors = {
  primary: '#5D68E8',
  primaryContainer: '#4552C4',
  background: '#FFFFFF',
  surfaceLowest: '#FFFFFF',
  surfaceLow: '#F5F6FA',
  outline: '#cbd5e1',
  outlineVariant: '#e2e8f0',
  text: '#2D2D2D',
  textSecondary: '#64748b',
  success: '#10b981',
  danger: '#ef4444',
};

const darkColors: ThemeColors = {
  primary: '#5D68E8',
  primaryContainer: '#1a2a33',
  background: '#0d1d26',
  surfaceLowest: '#12202a',
  surfaceLow: '#1a2d3b',
  outline: '#475569',
  outlineVariant: '#334155',
  text: '#f9f9ff',
  textSecondary: '#94a3b8',
  success: '#059669',
  danger: '#dc2626',
};

const defaultTheme: ThemeState = {
  isDark: false,
  colors: lightColors,
  typography,
};

const ThemeContext = createContext<ThemeState>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const [theme, setTheme] = useState<ThemeState>({
    isDark,
    colors: isDark ? darkColors : lightColors,
    typography,
  });

  useEffect(() => {
    setTheme({
      isDark: scheme === 'dark',
      colors: scheme === 'dark' ? darkColors : lightColors,
      typography,
    });
  }, [scheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
