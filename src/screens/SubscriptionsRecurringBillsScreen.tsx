import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, Switch, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const SURFACE = '#f8f9fa';
const WHITE = '#ffffff';
const CHAMPAGNE = '#e9c176';
const GOLD = '#D4AF37';
const OUTLINE = '#757682';
const ON_SURFACE_VARIANT = '#444650';
const GREEN = '#10B981';
const RED = '#ba1a1a';

interface BillItem {
  id: string;
  name: string;
  category: string;
  amount: string;
  period: string;
  nextDueDate: string;
  iconName: any;
  iconBg: string;
  iconColor: string;
  active: boolean;
}

interface SubscriptionsRecurringBillsScreenProps {
  navigation?: any;
}

export default function SubscriptionsRecurringBillsScreen({ navigation }: SubscriptionsRecurringBillsScreenProps) {
  const [bills, setBills] = useState<BillItem[]>([
    {
      id: '1',
      name: 'Netflix',
      category: 'Entertainment',
      amount: '₹499',
      period: 'Monthly on the 15th',
      nextDueDate: 'Next: Oct 15, 2023',
      iconName: 'smart-display',
      iconBg: '#fee2e2',
      iconColor: '#dc2626',
      active: true,
    },
    {
      id: '2',
      name: 'House Rent',
      category: 'Housing',
      amount: '₹25,000',
      period: 'Monthly on the 1st',
      nextDueDate: 'Next: Nov 01, 2023',
      iconName: 'home',
      iconBg: '#dbeafe',
      iconColor: '#1d4ed8',
      active: true,
    },
    {
      id: '3',
      name: 'Gym Membership',
      category: 'Health',
      amount: '₹2,000',
      period: 'Monthly on the 5th',
      nextDueDate: 'Next: Nov 05, 2023',
      iconName: 'fitness-center',
      iconBg: '#dcfce7',
      iconColor: '#15803d',
      active: true,
    },
    {
      id: '4',
      name: 'iCloud Storage',
      category: 'Cloud Services',
      amount: '₹75',
      period: 'Monthly on the 20th',
      nextDueDate: 'Next: Oct 20, 2023',
      iconName: 'cloud',
      iconBg: '#ecfeff',
      iconColor: '#0891b2',
      active: true,
    },
  ]);

  const toggleSwitch = (id: string) => {
    setBills(prev => prev.map(bill => 
      bill.id === id ? { ...bill, active: !bill.active } : bill
    ));
  };

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE} />

      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
            <MaterialIcons name="arrow-back" size={24} color={NAVY} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Recurring Bills</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMmM4Ft6g3TxEpjlatB1IALo9EX6HzGfzsrYuR0QvjuFZuS44tGbzzDDsgaFtY3ggpr-HDvOvAJgek7qMe6NcsfhCRvggmHZrEwwo8IoAw36mDSjEmXS9aBzY_EntjAV8itjZo4rD0vroHJFTgrm0wbQokwf4YmBHUhCD-EIMOqMVSqc-YlYXiIbPRG3CKtE66yBCmW1123cpG1fdx4wYU6uuti8fx8IQPgHnm51HZh0x4KEPM3bWEOymocovfFqh1Lniq6L5XSeyb' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 96 }} showsVerticalScrollIndicator={false}>
        
        {/* Total Commitments Card */}
        <View style={styles.commitmentsCard}>
          {/* Card background mock vector decoration */}
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv6StaMal02hMy3CZRFsNeMo8c_qCGtzyZ5fjBV2QZSSYXKuwZIMW6rY73jQ5jmgBwJ3EpodSgzsj7AJ4P_4CN2WKgq5swW4Wsg6Y2aQDp0SQwHS2cTmC-LWVU-LWhHrJ22lIyVql7xTF6iNXIfcRV6Zu-ODmVjWVCNewjm-8xSIXdFMZWkb4gV2AjDYbg8ccR60pwb6svcbCrok-b8gsSMOdXgpRslV03pDPqyMxNaPVZXmqPw-2N8Ye96qT2e4i8yrheFL6QsQ0F' }}
            style={styles.commitmentsCardBg}
            resizeMode="cover"
          />
          <View style={styles.commitmentsOverlay}>
            <Text style={styles.commitmentsLabel}>Total Monthly Commitments</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
              <Text style={styles.commitmentsValue}>₹27,574</Text>
              <Text style={styles.commitmentsSubValue}>82% of Goal</Text>
            </View>
          </View>
        </View>

        {/* Subscription List */}
        <View style={{ gap: 16 }}>
          {bills.map(bill => (
            <View 
              key={bill.id} 
              style={[
                styles.billCard, 
                !bill.active && { opacity: 0.6 }
              ]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                <View style={[styles.iconBox, { backgroundColor: bill.iconBg }]}>
                  <MaterialIcons name={bill.iconName} size={24} color={bill.iconColor} />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <Text style={styles.billName}>{bill.name}</Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{bill.category}</Text>
                    </View>
                  </View>
                  <Text style={styles.billPeriod}>{bill.period}</Text>
                  <Text style={styles.billDueDate}>{bill.nextDueDate}</Text>
                </View>
              </View>

              <View style={{ alignItems: 'flex-end', gap: 12 }}>
                <Text style={styles.billAmount}>{bill.amount}</Text>
                <Switch
                  value={bill.active}
                  onValueChange={() => toggleSwitch(bill.id)}
                  trackColor={{ false: '#e9e9ea', true: NAVY }}
                  thumbColor={WHITE}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Visual Asset Banner */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHhVFzCMxabaWL5bWJTUVpZ8aH5H5bS7xDIXIPTjkN7Yf-RHoSEpz-E1zmtOXxbFEKTs2JxrrrpDv9g2syMZKLSrx89nIWpYbExfrXPnVeoSTdVHHhMEbMVAN5KyFkjjrrXpioCJ-iUkZ_Tc8CXqvpFHJseLLzJJTwhZ-tA5RleX4gKuzLZRMmte_XMgmIpStUE5M9nftefHM4dEnKkMpyW2TboEjfdu7Cm7UVSJe7M3qcwpbllluA7f6D4M6c76rwKCBtmKvX5Ibf' }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerLabel}>Fire Objective</Text>
            <Text style={styles.bannerValue}>Optimization: Complete</Text>
          </View>
        </View>

      </ScrollView>

      {/* FAB to add a new recurring bill */}
      <TouchableOpacity
        onPress={() => navigation?.navigate('AddRecurringExpense')}
        style={styles.fab}
        activeOpacity={0.85}
      >
        <MaterialIcons name="add" size={28} color={NAVY} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 64,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: NAVY,
    fontFamily: 'System',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e9c176',
  },
  commitmentsCard: {
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  commitmentsCardBg: {
    position: 'absolute',
    inset: 0,
    opacity: 0.2,
    backgroundColor: '#ffffff',
  },
  commitmentsOverlay: {
    position: 'absolute',
    inset: 0,
    padding: 16,
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#ad8a46',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  commitmentsLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: ON_SURFACE_VARIANT,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    fontFamily: 'System',
  },
  commitmentsValue: {
    fontSize: 28,
    fontWeight: '700',
    color: NAVY,
    fontFamily: 'System',
  },
  commitmentsSubValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ad8a46',
    fontFamily: 'System',
  },
  billCard: {
    backgroundColor: WHITE,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#00113a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billName: {
    fontSize: 18,
    fontWeight: '700',
    color: NAVY,
    fontFamily: 'System',
  },
  categoryBadge: {
    backgroundColor: '#f3f4f5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 99,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '700',
    color: ON_SURFACE_VARIANT,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  billPeriod: {
    fontSize: 14,
    color: ON_SURFACE_VARIANT,
    marginTop: 2,
    fontFamily: 'System',
  },
  billDueDate: {
    fontSize: 11,
    color: OUTLINE,
    marginTop: 4,
    fontFamily: 'System',
  },
  billAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: NAVY,
    fontFamily: 'System',
  },
  bannerContainer: {
    marginTop: 40,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    height: 140,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 17, 58, 0.65)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  bannerLabel: {
    color: CHAMPAGNE,
    fontWeight: '700',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  bannerValue: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    bottom: 96,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ffdea5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
    zIndex: 50,
  },
});
