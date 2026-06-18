import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';

export function FAB() {
  return (
    <TouchableOpacity 
      className="absolute bottom-28 right-6 w-14 h-14 bg-royal-navy rounded-full items-center justify-center z-40 active:scale-90 transition-transform"
      style={{
        shadowColor: '#0A1F44',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
      }}
    >
      <Plus color="white" size={28} />
    </TouchableOpacity>
  );
}
