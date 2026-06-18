import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const CHAMPAGNE = '#D4AF37';
const SURFACE_GRAY = '#F2F2F7';
const OUTLINE_VARIANT = '#c5c6cf';

export default function CreateGoalScreen({ navigation }: { navigation?: any }) {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE_GRAY }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE_GRAY} />

      {/* Header */}
      <View style={{
        zIndex: 50,
        backgroundColor: SURFACE_GRAY,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
            <MaterialIcons name="arrow-back-ios" size={18} color={NAVY} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Create Goal</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, marginBottom: 8 }}>Goal Name</Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 20, borderWidth: 1, borderColor: OUTLINE_VARIANT }}>
          <TextInput
            placeholder="e.g. Dream House, Vacation..."
            placeholderTextColor="#999"
            style={{ fontSize: 16, color: NAVY }}
            value={goalName}
            onChangeText={setGoalName}
          />
        </View>

        <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, marginBottom: 8 }}>Target Amount</Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 20, borderWidth: 1, borderColor: OUTLINE_VARIANT }}>
          <TextInput
            placeholder="₹0.00"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={{ fontSize: 16, color: NAVY }}
            value={targetAmount}
            onChangeText={setTargetAmount}
          />
        </View>

        <TouchableOpacity 
          style={{
            backgroundColor: NAVY,
            paddingVertical: 16,
            borderRadius: 16,
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => navigation?.goBack()}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Save Goal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
