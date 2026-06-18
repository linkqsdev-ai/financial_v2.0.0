import React from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  progress: number; // 0 to 1
  colorClass?: string;
  trackColorClass?: string;
}

export function ProgressBar({ 
  progress, 
  colorClass = "bg-primary", 
  trackColorClass = "bg-surface-container-highest" 
}: ProgressBarProps) {
  return (
    <View className={`w-full h-2.5 rounded-full overflow-hidden ${trackColorClass}`}>
      <View 
        className={`h-full rounded-full ${colorClass}`} 
        style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }} 
      />
    </View>
  );
}
