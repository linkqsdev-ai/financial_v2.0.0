import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Bell } from 'lucide-react-native';

export function GlassHeader() {
  return (
    <BlurView intensity={70} tint="light" className="absolute top-0 w-full z-50 flex-row justify-between items-center px-4 h-24 pt-10 bg-glass-bg">
      <View className="flex-row items-center gap-3">
        <View className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
            <View className="w-full h-full bg-champagne-gold" />
        </View>
        <Text className="font-display-lg-mobile text-2xl text-primary font-bold tracking-tight">Finboom</Text>
      </View>
      <TouchableOpacity className="active:scale-95 duration-200">
        <Bell color="#00081e" size={24} />
      </TouchableOpacity>
    </BlurView>
  );
}
