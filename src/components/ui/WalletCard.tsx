import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Landmark, CreditCard, Wallet } from 'lucide-react-native';
import { useTheme } from '../../theme/ThemeContext';

export type WalletType = 'bank' | 'savings' | 'credit';

interface WalletCardProps {
  type: WalletType;
  name: string;
  accountLabel: string;
  amount: string;
  colors: [string, string, ...string[]];
}

export function WalletCard({ type, name, accountLabel, amount, colors }: WalletCardProps) {
  const { colors, typography } = useTheme();

  const Icon = type === 'bank' ? Landmark : type === 'credit' ? CreditCard : Wallet;
  
  return (
    <TouchableOpacity className="active:scale-[0.98] transition-transform shadow-lg rounded-2xl mx-2" style={{ elevation: 5 }}>
      <LinearGradient 
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-[300px] h-[190px] rounded-2xl p-4 justify-between"
      >
        <View className="flex-row justify-between items-start">
          <View className="bg-white/10 p-2 rounded-lg">
            <Icon color="white" size={24} />
          </View>
          <View className="items-end">
            <Text className="text-[10px] text-white/70 uppercase tracking-widest font-bold">{accountLabel}</Text>
            <Text className="text-white font-bold text-lg">{name}</Text>
          </View>
        </View>
        <View>
          <Text className="text-[10px] text-white/60 mb-1">{accountLabel} - ****</Text>
          <View className="flex-row items-baseline gap-1">
             <Text className="text-3xl font-bold text-[#D4AF37]">{amount}</Text>
             <Text className="text-xs text-[#D4AF37]">USD</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
            {type === 'credit' ? (
                 <Text className="text-[10px] text-white/40 font-bold uppercase">MEMBERSHIP SINCE '18</Text>
            ) : (
                <Text className="text-white/80 font-bold italic tracking-tighter text-xl">VISA</Text>
            )}
            <View className="flex-row -space-x-2">
                <View className="w-6 h-6 rounded-full bg-[#D4AF37]/40 border border-white/20" />
                <View className="w-6 h-6 rounded-full bg-[#EEDC82]/40 border border-white/20" />
            </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
