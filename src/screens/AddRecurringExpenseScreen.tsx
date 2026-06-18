import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, StatusBar, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const WHITE = '#ffffff';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const CHAMPAGNE = '#e9c176';
const GOLD = '#D4AF37';

interface AddRecurringExpenseScreenProps {
  navigation?: any;
}

export default function AddRecurringExpenseScreen({ navigation }: AddRecurringExpenseScreenProps) {
  const [expenseName, setExpenseName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Other');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Yearly'>('Monthly');
  const [startDate, setStartDate] = useState('2023-10-27');
  const [remindMe, setRemindMe] = useState(true);

  const handleCreate = () => {
    navigation?.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top App Bar */}
      <View style={{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 64,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.08)'
      }}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
          <MaterialIcons name="arrow-back" size={24} color={NAVY} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>New Recurring Bill</Text>
        <TouchableOpacity style={{ padding: 4 }}>
          <MaterialIcons name="more-vert" size={24} color={NAVY} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 24 }}>
          
          {/* Section 1: Expense Details */}
          <View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, paddingHorizontal: 4 }}>Expense Details</Text>
            <View style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 20,
              padding: 16,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
              shadowColor: '#00113a',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.04,
              shadowRadius: 10,
              elevation: 2,
              gap: 16
            }}>
              {/* Card Image Decor */}
              <View style={{ alignItems: 'center' }}>
                <View style={{ width: 120, height: 120, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' }}>
                  <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5EYWI7pn2Kc4XeGVw3Jjj5rE8bRjxQGKTluL3gxlhfkdDt9Lc5k9FYfPY1huKKjqEugCcOHo0arL5uHEgbRp_7Tia5qk2dMF48pWnDE6kDmbp5F_c5pG9mbCznOOw_5T9jP0qd01KwI9PmBlhwuDhytw4qbw8kuRVx_ytphPI68TtgdfxDaRuWSZbu_XsO-pmulxsrQYGkvRczInkL_-qrvsCTCc7x6fTUH7jZQJ7sWG-V3h2CLZ8leJDvHjVSYgckvHwzdAj1_J' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 10, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Expense Name</Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    fontSize: 16,
                    color: NAVY,
                    paddingVertical: 6
                  }}
                  placeholder="e.g. Netflix, Rent"
                  value={expenseName}
                  onChangeText={setExpenseName}
                />
              </View>

              {/* Categories grid */}
              <View>
                <Text style={{ fontSize: 10, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Category</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  {[
                    { name: 'Media', icon: 'movie' },
                    { name: 'Housing', icon: 'home' },
                    { name: 'Food', icon: 'restaurant' },
                    { name: 'Other', icon: 'grid-view' }
                  ].map(cat => {
                    const isSelected = selectedCategory === cat.name;
                    return (
                      <TouchableOpacity
                        key={cat.name}
                        onPress={() => setSelectedCategory(cat.name)}
                        style={{ alignItems: 'center', gap: 6 }}
                      >
                        <View style={{
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          backgroundColor: isSelected ? 'rgba(0,17,58,0.08)' : '#f3f4f5',
                          borderWidth: isSelected ? 2 : 0,
                          borderColor: NAVY,
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <MaterialIcons name={cat.icon as any} size={20} color={NAVY} />
                        </View>
                        <Text style={{ fontSize: 10, fontWeight: isSelected ? '700' : '500', color: isSelected ? NAVY : OUTLINE }}>
                          {cat.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>

          {/* Section 2: Financial Details */}
          <View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, paddingHorizontal: 4 }}>Financial Details</Text>
            <View style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 20,
              padding: 24,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
              shadowColor: '#00113a',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.04,
              shadowRadius: 10,
              elevation: 2,
              alignItems: 'center',
              gap: 8
            }}>
              <Text style={{ fontSize: 10, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1 }}>Amount</Text>
              <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
                <Text style={{ fontSize: 24, color: 'rgba(0,17,58,0.4)', fontWeight: '700' }}>$</Text>
                <TextInput
                  style={{ fontSize: 36, fontWeight: '800', color: NAVY, textAlign: 'center', minWidth: 120 }}
                  placeholder="0.00"
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>

              <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                <View style={{ backgroundColor: '#eddec5', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 }}>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: '#6c614e' }}>USD</Text>
                </View>
                <TouchableOpacity style={{
                  backgroundColor: '#f3f4f5',
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4
                }}>
                  <Text style={{ fontSize: 11, color: OUTLINE, fontWeight: '600' }}>From: Checking</Text>
                  <MaterialIcons name="expand-more" size={14} color={OUTLINE} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Section 3: Frequency */}
          <View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, paddingHorizontal: 4 }}>Frequency</Text>
            <View style={{
              borderRadius: 20,
              padding: 6,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
              shadowColor: '#00113a',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.04,
              shadowRadius: 10,
              elevation: 2,
              flexDirection: 'row',
              backgroundColor: '#edeeef'
            }}>
              {(['Daily', 'Weekly', 'Monthly', 'Yearly'] as const).map(freq => {
                const isSelected = frequency === freq;
                return (
                  <TouchableOpacity
                    key={freq}
                    onPress={() => setFrequency(freq)}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 8,
                      borderRadius: 14,
                      backgroundColor: isSelected ? WHITE : 'transparent',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: isSelected ? 2 : 0 },
                      shadowOpacity: isSelected ? 0.08 : 0,
                      shadowRadius: 2,
                      elevation: isSelected ? 2 : 0
                    }}
                  >
                    <Text style={{ fontSize: 13, fontWeight: isSelected ? '700' : '500', color: isSelected ? NAVY : OUTLINE }}>
                      {freq}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Section 4: Timeline */}
          <View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, paddingHorizontal: 4 }}>Timeline</Text>
            <View style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
              shadowColor: '#00113a',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.04,
              shadowRadius: 10,
              elevation: 2,
              overflow: 'hidden'
            }}>
              {/* Start Date */}
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(0,0,0,0.06)'
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <MaterialIcons name="calendar-today" size={20} color={NAVY} />
                  <Text style={{ fontSize: 15, fontWeight: '600', color: NAVY }}>Start Date</Text>
                </View>
                <TextInput
                  style={{ fontSize: 15, fontWeight: '700', color: NAVY, textAlign: 'right', padding: 0 }}
                  value={startDate}
                  onChangeText={setStartDate}
                  placeholder="YYYY-MM-DD"
                />
              </View>

              {/* Remind Me */}
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <MaterialIcons name="notifications-active" size={20} color={NAVY} />
                  <Text style={{ fontSize: 15, fontWeight: '600', color: NAVY }}>Remind me</Text>
                </View>
                <Switch
                  value={remindMe}
                  onValueChange={setRemindMe}
                  trackColor={{ false: '#c5c6d2', true: NAVY }}
                  thumbColor="#ffffff"
                />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Footer Fixed Action Area */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(248,249,250,0.95)',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(0,0,0,0.06)'
      }}>
        <TouchableOpacity
          onPress={handleCreate}
          style={{
            backgroundColor: GOLD,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingVertical: 16,
            borderRadius: 14,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>Create Recurring Bill</Text>
          <MaterialIcons name="arrow-forward" size={18} color={NAVY} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
