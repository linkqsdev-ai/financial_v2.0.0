import React from 'react';
import { View, ViewProps } from 'react-native';

export function SquircleCard({ className = '', children, ...props }: ViewProps) {
  return (
    <View 
      className={`bg-surface-container-lowest rounded-squircle p-6 shadow-sm ${className}`} 
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 2,
      }}
      {...props}
    >
      {children}
    </View>
  );
}
