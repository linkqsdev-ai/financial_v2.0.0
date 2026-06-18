import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


export default function CreateGoalScreen({ navigation }: { navigation?: any }) {
  const { colors, typography } = useTheme();

  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={{
        zIndex: 50,
        backgroundColor: colors.background,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
            <MaterialIcons name="arrow-back-ios" size={18} color={colors.text} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: colors.text, }}>Create Goal</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text, marginBottom: 8 }}>Goal Name</Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 20, borderWidth: 1, borderColor: colors.outlineVariant }}>
          <TextInput
            placeholder="e.g. Dream House, Vacation..."
            placeholderTextColor="#999"
            style={{ fontSize: 16, color: colors.text }}
            value={goalName}
            onChangeText={setGoalName}
          />
        </View>

        <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text, marginBottom: 8 }}>Target Amount</Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 20, borderWidth: 1, borderColor: colors.outlineVariant }}>
          <TextInput
            placeholder="₹0.00"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={{ fontSize: 16, color: colors.text }}
            value={targetAmount}
            onChangeText={setTargetAmount}
          />
        </View>

        <TouchableOpacity 
          style={{
            backgroundColor: colors.primaryContainer,
            paddingVertical: 16,
            borderRadius: 16,
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => navigation?.goBack()}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: typography.primaryBold }}>Save Goal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
