import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface Transaction {
  id: string;
  type: 'income' | 'expense';
  title: string;
  subtitle: string;
  amount: number;
  date: string;
  tag?: string;
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'income',
    title: 'Monthly Dividend',
    subtitle: 'S&P 500 ETF Portfolio',
    amount: 12500.00,
    date: 'Oct 24, 2023',
    tag: 'Quarterly Payout'
  },
  {
    id: '2',
    type: 'expense',
    title: 'Real Estate Tax',
    subtitle: 'Luxury Condo - Unit 4B',
    amount: 2450.00,
    date: 'Oct 22, 2023'
  },
  {
    id: '3',
    type: 'expense',
    title: 'Business Travel',
    subtitle: 'Emirates Airlines',
    amount: 820.45,
    date: 'Oct 20, 2023',
    tag: 'Q4 Conference'
  },
  {
    id: '4',
    type: 'income',
    title: 'Consulting Fee',
    subtitle: 'Private Equity Advisory',
    amount: 5000.00,
    date: 'Oct 18, 2023'
  }
];

interface ActivityListScreenProps {
  navigation?: any;
}

export default function ActivityListScreen({ navigation }: ActivityListScreenProps) {
  const { colors, typography } = useTheme();

  const [filter, setFilter] = useState<'all' | 'expense' | 'income'>('all');
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter(item => item.id !== id));
  };

  const filteredTransactions = transactions.filter(item => {
    if (filter === 'expense') return item.type === 'expense';
    if (filter === 'income') return item.type === 'income';
    return true;
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
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
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
            <MaterialIcons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, color: colors.text, }}>Activity</Text>
            <Text style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>{transactions.length} Transactions</Text>
          </View>
        </View>

        <TouchableOpacity style={{ padding: 4 }}>
          <MaterialIcons name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Filter Bar */}
      <View style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          <TouchableOpacity
            onPress={() => setFilter('all')}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: filter === 'all' ? 'rgba(0, 17, 90, 0.08)' : '#f3f4f5',
              borderWidth: filter === 'all' ? 1 : 0,
              borderColor: colors.primaryContainer
            }}
          >
            <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: filter === 'all' ? colors.primaryContainer : colors.textSecondary }}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilter('expense')}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: filter === 'expense' ? 'rgba(239, 68, 68, 0.1)' : '#f3f4f5',
              borderWidth: filter === 'expense' ? 1 : 0,
              borderColor: colors.danger
            }}
          >
            <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: filter === 'expense' ? colors.danger : colors.textSecondary }}>Expenses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilter('income')}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: filter === 'income' ? 'rgba(16, 185, 129, 0.1)' : '#f3f4f5',
              borderWidth: filter === 'income' ? 1 : 0,
              borderColor: colors.success
            }}
          >
            <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: filter === 'income' ? colors.success : colors.textSecondary }}>Income</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Transactions List */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 96 }} showsVerticalScrollIndicator={false}>
        {filteredTransactions.length === 0 ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 60, opacity: 0.5, marginTop: 40 }}>
            <View style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderStyle: 'dashed', borderColor: colors.outline, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <MaterialIcons name="receipt-long" size={40} color={colors.outline} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: typography.primaryBold, color: colors.text }}>No transactions yet</Text>
            <Text style={{ fontSize: 13, color: colors.textSecondary, marginTop: 4 }}>Your transactions will appear here</Text>
          </View>
        ) : (
          <View style={{ gap: 14 }}>
            {filteredTransactions.map(item => (
              <View
                key={item.id}
                style={{
                  backgroundColor: colors.surfaceLowest,
                  borderRadius: 16,
                  padding: 16,
                  borderLeftWidth: 4,
                  borderLeftColor: item.type === 'income' ? colors.success : colors.danger,
                  shadowColor: '#00113a',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.04,
                  shadowRadius: 8,
                  elevation: 2
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 4,
                    backgroundColor: item.type === 'income' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                  }}>
                    <MaterialIcons name={item.type === 'income' ? 'arrow-upward' : 'arrow-downward'} size={12} color={item.type === 'income' ? colors.success : colors.danger} />
                    <Text style={{ fontSize: 10, fontFamily: typography.primaryBold, color: item.type === 'income' ? colors.success : colors.danger, textTransform: 'uppercase' }}>
                      {item.type}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, color: item.type === 'income' ? colors.success : colors.danger, }}>
                    {item.type === 'income' ? '+' : '-'}${item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                  <Text style={{ fontSize: 16, color: colors.text, }}>{item.title}</Text>
                  <Text style={{ fontSize: 13, color: colors.textSecondary, marginTop: 2 }}>{item.subtitle}</Text>
                </View>

                <View style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,0.06)', marginBottom: 12 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', gap: 6 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#f3f4f5', borderRadius: 8 }}>
                      <MaterialIcons name="calendar-today" size={12} color={colors.textSecondary} />
                      <Text style={{ fontSize: 11, color: colors.textSecondary }}>{item.date}</Text>
                    </View>
                    {item.tag && (
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: 'rgba(0, 35, 102, 0.06)', borderRadius: 8 }}>
                        <MaterialIcons name="notes" size={12} color={colors.text} />
                        <Text style={{ fontSize: 11, color: colors.text }}>{item.tag}</Text>
                      </View>
                    )}
                  </View>
                  <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ padding: 4 }}>
                    <MaterialIcons name="delete" size={18} color={colors.outline} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        onPress={() => navigation?.navigate('AddTransaction')}
        style={{
          position: 'absolute',
          bottom: 96,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: colors.primaryContainer,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 6,
          zIndex: 40
        }}
        activeOpacity={0.8}
      >
        <MaterialIcons name="add" size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
