import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const WHITE = '#ffffff';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const RED = '#ba1a1a';
const GREEN = '#2E7D32';

interface CategoryReport {
  id: string;
  name: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  amount: number;
  percentage: number;
  progressBarColor: string;
  budgetProgress?: string;
}

const CATEGORIES_DATA: CategoryReport[] = [
  {
    id: '1',
    name: 'Food & Dining',
    icon: 'restaurant',
    iconBg: 'rgba(233,193,118,0.2)',
    iconColor: '#ad8a46',
    amount: 858.00,
    percentage: 40,
    progressBarColor: '#ad8a46',
    budgetProgress: '80%'
  },
  {
    id: '2',
    name: 'Transport',
    icon: 'commute',
    iconBg: 'rgba(0,17,58,0.08)',
    iconColor: NAVY,
    amount: 429.00,
    percentage: 20,
    progressBarColor: NAVY
  },
  {
    id: '3',
    name: 'Shopping',
    icon: 'shopping-bag',
    iconBg: 'rgba(186,26,26,0.1)',
    iconColor: RED,
    amount: 321.75,
    percentage: 15,
    progressBarColor: RED
  },
  {
    id: '4',
    name: 'Utilities',
    icon: 'bolt',
    iconBg: 'rgba(104,93,74,0.15)',
    iconColor: '#685d4a',
    amount: 214.50,
    percentage: 10,
    progressBarColor: '#4a685d'
  }
];

interface VisualReportsScreenProps {
  navigation?: any;
}

export default function VisualReportsScreen({ navigation }: VisualReportsScreenProps) {
  const [selectedMonth, setSelectedMonth] = useState('August 2023');

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Header */}
      <View style={{
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.08)',
        gap: 12
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 48 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
              <MaterialIcons name="arrow-back" size={24} color={NAVY} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Financial Insights</Text>
          </View>

          <View style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden', borderWidth: 2, borderColor: '#b3c5ff' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2b1_pkSQYfgUKCsWs1XSRon2ElZJ38e5dBkazjan-56oGjExpRcxmqcH5Xe_rpFQntWgbJf1MsFpay2lPjVs3liYitoOdgAU490GVz_2KRlDhcoftx36tVEaHHfCiGClcB8TrNaOF1c4qANLwC-6vTj5Th_SUxJ8k9K-6nk3gqS3nXAiL-atXmOhWZgomFRzBP6bY3RJJZxO1qfv3iKPiOCPNkzgSQ2kNHah-uYLxIerMRo6GOJDRPKCmF8sWXq_nkI5vCxbducyj' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Month Picker button */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#f3f4f5',
            borderRadius: 20
          }}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: NAVY }}>{selectedMonth}</Text>
            <MaterialIcons name="expand-more" size={18} color={ON_SURFACE_VARIANT} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        {/* Summary Card */}
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderLeftWidth: 4,
          borderLeftColor: NAVY,
          borderRadius: 16,
          padding: 16,
          shadowColor: '#00113a',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.04,
          shadowRadius: 10,
          elevation: 2,
          gap: 16,
          marginBottom: 24
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1 }}>Total Income</Text>
              <Text style={{ fontSize: 20, fontWeight: '700', color: GREEN, marginTop: 4 }}>+₹4,500.00</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1 }}>Total Expenses</Text>
              <Text style={{ fontSize: 20, fontWeight: '700', color: RED, marginTop: 4 }}>-₹2,145.00</Text>
            </View>
          </View>

          <View style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,0.06)' }} />

          <View>
            <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Net Savings</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: NAVY }}>₹2,355.00</Text>
              <View style={{ backgroundColor: '#dbe1ff', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 }}>
                <Text style={{ fontSize: 11, color: NAVY, fontWeight: '700' }}>52% Rate</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Chart Card */}
        <View style={{
          backgroundColor: WHITE,
          borderRadius: 20,
          padding: 20,
          shadowColor: '#00113a',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 10,
          elevation: 1,
          marginBottom: 24
        }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, marginBottom: 16 }}>Spending Allocation</Text>

          {/* Simulated Spending Chart */}
          <View style={{ height: 200, width: '100%', borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)', marginBottom: 16 }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXgFvOlyA4Ol-vOvrvbGSCDOc0BJ3RsIEiaJ5Su0n3pgD5LQSbv45zMpbAgrbfJgIgwv3c_s7T0TeblUcVuXCm9w16s6BlRkdfdU1Yxy5CKhpAz11E03RXVILjBctgvK0ZmwOcKagJKGzA_LCzjbYQCQmHQSbSOT-l1XmElN4rZ75ySCPjq3EJYB2sMxZGGdB504ritzBPDHN10rzllnKGZsxZ1wjXI6yCW4-5vlgmlp5cBng6Co4t903XVlijht7ePst_W4oDpIsD' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>

          {/* Legend Grid */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 80 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#ad8a46' }} />
              <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, fontWeight: '600' }}>Dining</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 80 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: NAVY }} />
              <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, fontWeight: '600' }}>Transport</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 80 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: RED }} />
              <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, fontWeight: '600' }}>Shopping</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 80 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#4a685d' }} />
              <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, fontWeight: '600' }}>Utilities</Text>
            </View>
          </View>
        </View>

        {/* Top Categories */}
        <View style={{
          backgroundColor: WHITE,
          borderRadius: 20,
          padding: 20,
          shadowColor: '#00113a',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.03,
          shadowRadius: 10,
          elevation: 1
        }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, marginBottom: 16 }}>Top Categories</Text>

          <View style={{ gap: 20 }}>
            {CATEGORIES_DATA.map(cat => (
              <View key={cat.id} style={{ gap: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: cat.iconBg, alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name={cat.icon} size={20} color={cat.iconColor} />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: '700', color: NAVY }}>{cat.name}</Text>
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>₹{cat.amount.toFixed(2)}</Text>
                </View>

                {/* Progress Bar */}
                <View style={{ width: '100%', height: 8, backgroundColor: '#f3f4f5', borderRadius: 4, overflow: 'hidden' }}>
                  <View style={{ width: `${cat.percentage}%` as any, height: '100%', backgroundColor: cat.progressBarColor, borderRadius: 4 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 11, color: OUTLINE }}>{cat.percentage}% of expenses</Text>
                  {cat.budgetProgress && (
                    <Text style={{ fontSize: 11, color: OUTLINE }}>Progress to budget: {cat.budgetProgress}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
