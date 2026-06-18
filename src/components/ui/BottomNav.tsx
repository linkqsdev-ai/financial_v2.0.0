import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const ON_SURFACE_VARIANT = '#444650';

interface BottomNavProps {
  state?: any;
  navigation?: any;
}

const TABS = [
  { name: 'Home', route: 'Home', iconName: 'home' as any },
  { name: 'Assets', route: 'Assets', iconName: 'account-balance-wallet' as any },
  { name: 'Cash Flow', route: 'CashFlow', iconName: 'payments' as any },
  { name: 'Goals', route: 'Goals', iconName: 'track-changes' as any },
  { name: 'Profile', route: 'Profile', iconName: 'person' as any },
];

export function BottomNav({ state, navigation }: BottomNavProps) {
  const activeIndex = state?.index ?? 0;

  return (
    <View style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      backgroundColor: 'rgba(255,255,255,0.96)',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: Platform.OS === 'ios' ? 24 : 10,
      paddingTop: 8,
      borderTopWidth: 0.5,
      borderTopColor: '#e5e5ea',
      shadowColor: '#00113a',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.04,
      shadowRadius: 16,
      elevation: 20,
    }}>
      {TABS.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation?.navigate(tab.route)}
            style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 4, minWidth: 60 }}
            activeOpacity={0.7}
          >
            <MaterialIcons 
              name={tab.iconName} 
              size={24} 
              color={isActive ? NAVY : ON_SURFACE_VARIANT} 
              style={{ marginBottom: 4, opacity: isActive ? 1 : 0.6 }} 
            />
            <Text style={{
              fontSize: 11,
              fontWeight: isActive ? '700' : '500',
              color: isActive ? NAVY : ON_SURFACE_VARIANT,
              letterSpacing: 0.2,
              fontFamily: 'System'
            }}>
              {tab.name}
            </Text>
            {isActive && (
              <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: NAVY, marginTop: 2 }} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
