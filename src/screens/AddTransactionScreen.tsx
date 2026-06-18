import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const WHITE = '#ffffff';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const OUTLINE_VARIANT = '#c5c6d2';
const GREEN = '#059669';
const RED = '#DC2626';
const CHAMPAGNE = '#D4AF37';
const DARK_SLATE = '#0F172A';

interface AddTransactionScreenProps {
  navigation?: any;
}

export default function AddTransactionScreen({ navigation }: AddTransactionScreenProps) {
  const [transactionType, setTransactionType] = useState<'expense' | 'income'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food & Dining');
  const [subcategory, setSubcategory] = useState('Groceries');
  const [bucket, setBucket] = useState('Main Savings (Chase)');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    // Simulated save and back
    navigation?.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Top Header */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 64,
        backgroundColor: '#ffffff',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.08)'
      }}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
          <MaterialIcons name="arrow-back" size={24} color={NAVY} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Add Transaction</Text>
        <TouchableOpacity style={{ padding: 4 }}>
          <MaterialIcons name="more-vert" size={24} color={NAVY} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
          
          {/* Transaction Type Toggle */}
          <View style={{
            backgroundColor: '#e7e8e9',
            borderRadius: 16,
            padding: 4,
            flexDirection: 'row',
            height: 48,
            position: 'relative',
            marginBottom: 24
          }}>
            <TouchableOpacity
              onPress={() => setTransactionType('expense')}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                backgroundColor: transactionType === 'expense' ? WHITE : 'transparent',
                borderWidth: transactionType === 'expense' ? 1 : 0,
                borderColor: RED
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: '700', color: transactionType === 'expense' ? RED : ON_SURFACE_VARIANT }}>Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setTransactionType('income')}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                backgroundColor: transactionType === 'income' ? WHITE : 'transparent',
                borderWidth: transactionType === 'income' ? 1 : 0,
                borderColor: GREEN
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: '700', color: transactionType === 'income' ? GREEN : ON_SURFACE_VARIANT }}>Income</Text>
            </TouchableOpacity>
          </View>

          {/* Amount Glass Card */}
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 20,
            padding: 20,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.3)',
            shadowColor: '#00113a',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.04,
            shadowRadius: 10,
            elevation: 2,
            marginBottom: 28,
            position: 'relative'
          }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1 }}>
              {transactionType === 'expense' ? 'You Spend' : 'You Receive'}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Text style={{ fontSize: 32, fontWeight: '700', color: NAVY }}>$</Text>
              <TextInput
                style={{ flex: 1, fontSize: 32, fontWeight: '700', color: NAVY, padding: 0 }}
                placeholder="0.00"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                autoFocus={false}
              />
            </View>

            {/* Swap Button Overlay */}
            <TouchableOpacity
              onPress={() => setTransactionType(transactionType === 'expense' ? 'income' : 'expense')}
              style={{
                position: 'absolute',
                bottom: -20,
                left: '50%',
                marginLeft: -20,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: NAVY,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 4,
                borderColor: '#f8f9fa',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 4
              }}
            >
              <MaterialIcons name="swap-vert" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Tax Optimization Tip Banner */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            backgroundColor: 'rgba(212,175,55,0.1)',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: 'rgba(212,175,55,0.3)',
            marginBottom: 20
          }}>
            <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: CHAMPAGNE, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="content-cut" size={20} color={NAVY} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>Tax Optimization</Text>
              <Text style={{ fontSize: 11, color: ON_SURFACE_VARIANT, marginTop: 1 }}>Strategic tracking helps maximize your deductions.</Text>
            </View>
          </View>

          {/* Details Card */}
          <View style={{
            backgroundColor: WHITE,
            borderRadius: 20,
            padding: 16,
            gap: 16,
            shadowColor: '#00113a',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.04,
            shadowRadius: 10,
            elevation: 2,
            marginBottom: 24
          }}>
            {/* Category Dropdown */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1 }}>Category</Text>
                <TouchableOpacity onPress={() => navigation?.navigate('ManageCategories')}>
                  <Text style={{ fontSize: 11, color: NAVY, fontWeight: '600' }}>Manage Categories</Text>
                </TouchableOpacity>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f3f4f5',
                borderRadius: 12,
                height: 52,
                paddingHorizontal: 16
              }}>
                <TextInput
                  style={{ flex: 1, fontSize: 15, color: NAVY, fontWeight: '600' }}
                  value={category}
                  onChangeText={setCategory}
                  placeholder="Category Name"
                />
                <MaterialIcons name="keyboard-arrow-down" size={20} color={ON_SURFACE_VARIANT} />
              </View>
            </View>

            {/* Subcategory */}
            <View>
              <Text style={{ fontSize: 10, fontWeight: '700', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Subcategory</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f3f4f5',
                borderRadius: 12,
                height: 52,
                paddingHorizontal: 16
              }}>
                <TextInput
                  style={{ flex: 1, fontSize: 15, color: NAVY }}
                  value={subcategory}
                  onChangeText={setSubcategory}
                  placeholder="Subcategory Name"
                />
                <MaterialIcons name="keyboard-arrow-down" size={20} color={ON_SURFACE_VARIANT} />
              </View>
            </View>

            {/* Account Bucket */}
            <View>
              <Text style={{ fontSize: 10, fontWeight: '700', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Account Bucket</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f3f4f5',
                borderRadius: 12,
                height: 52,
                paddingHorizontal: 16
              }}>
                <TextInput
                  style={{ flex: 1, fontSize: 15, color: NAVY }}
                  value={bucket}
                  onChangeText={setBucket}
                  placeholder="Account"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: CHAMPAGNE }} />
                  <MaterialIcons name="keyboard-arrow-down" size={20} color={ON_SURFACE_VARIANT} />
                </View>
              </View>
            </View>

            {/* Notes */}
            <View>
              <Text style={{ fontSize: 10, fontWeight: '700', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Notes</Text>
              <TextInput
                style={{
                  backgroundColor: '#f3f4f5',
                  borderRadius: 12,
                  padding: 12,
                  fontSize: 14,
                  color: NAVY,
                  height: 80,
                  textAlignVertical: 'top'
                }}
                placeholder="What was this for?"
                multiline={true}
                value={notes}
                onChangeText={setNotes}
              />
            </View>
          </View>

          {/* Attachments */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Attachments</Text>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity style={{
                flex: 1,
                height: 84,
                borderRadius: 16,
                borderWidth: 2,
                borderColor: OUTLINE_VARIANT,
                borderStyle: 'dashed',
                backgroundColor: 'rgba(243,244,245,0.5)',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6
              }}>
                <MaterialIcons name="photo-camera" size={22} color={OUTLINE} />
                <Text style={{ fontSize: 12, color: OUTLINE, fontWeight: '600' }}>Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex: 1,
                height: 84,
                borderRadius: 16,
                borderWidth: 2,
                borderColor: OUTLINE_VARIANT,
                borderStyle: 'dashed',
                backgroundColor: 'rgba(243,244,245,0.5)',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6
              }}>
                <MaterialIcons name="videocam" size={22} color={OUTLINE} />
                <Text style={{ fontSize: 12, color: OUTLINE, fontWeight: '600' }}>Video</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={{ gap: 12 }}>
            <TouchableOpacity
              onPress={handleSave}
              style={{
                backgroundColor: DARK_SLATE,
                height: 56,
                borderRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <MaterialIcons name="check-circle" size={20} color="#fff" />
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                  {transactionType === 'expense' ? 'Save Expense' : 'Save Income'}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="chevron-right" size={20} color="rgba(255,255,255,0.4)" />
                <MaterialIcons name="chevron-right" size={20} color="#fff" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation?.goBack()} style={{ paddingVertical: 12, alignItems: 'center' }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: ON_SURFACE_VARIANT }}>Cancel</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
