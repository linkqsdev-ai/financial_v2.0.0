import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const SURFACE = '#f8f9fa';
const SURFACE_WHITE = '#ffffff';
const SURFACE_LOW = '#f3f4f5';
const SURFACE_HIGH = '#e7e8e9';
const ON_SURFACE = '#191c1d';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE_VARIANT = '#c5c6d2';
const GREEN = '#16a34a';
const RED = '#ba1a1a';
const SECONDARY_CONTAINER = '#eddec5';

interface KPICardProps {
  label: string;
  value: string;
  change?: string;
  changeColor?: string;
  iconName: any;
  accentColor: string;
  isInvestment?: boolean;
  isSavings?: boolean;
}

function KPICard({ label, value, change, changeColor, iconName, accentColor, isInvestment, isSavings }: KPICardProps) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: SURFACE_WHITE,
      borderRadius: 16,
      padding: 14,
      borderLeftWidth: 4,
      borderLeftColor: accentColor,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
      elevation: 2,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <View style={{ position: 'absolute', top: 12, right: 12, opacity: 0.15 }}>
        <MaterialIcons name={iconName} size={28} color={accentColor} />
      </View>
      <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4, fontFamily: 'System' }}>{label}</Text>
      <Text style={{ fontSize: 22, fontWeight: '700', color: NAVY, letterSpacing: -0.5, marginBottom: 8, fontFamily: 'System' }}>{value}</Text>
      
      {isInvestment && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 11, fontWeight: '700', color: accentColor, fontFamily: 'System' }}>52%</Text>
        </View>
      )}

      {isSavings && (
        <View style={{ width: '100%', height: 4, backgroundColor: SURFACE_HIGH, borderRadius: 2, overflow: 'hidden', marginTop: 4 }}>
          <View style={{ width: '65%', height: '100%', backgroundColor: accentColor, borderRadius: 2 }} />
        </View>
      )}

      {change && !isInvestment && !isSavings && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <MaterialIcons name={change.startsWith('+') ? 'trending-up' : 'trending-down'} size={14} color={changeColor} />
          <Text style={{ fontSize: 10, fontWeight: '700', color: changeColor, fontFamily: 'System' }}>{change}</Text>
        </View>
      )}
    </View>
  );
}

interface TransactionItemProps {
  iconName: any;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  amount: string;
  amountColor: string;
}

function TransactionItem({ iconName, iconBg, iconColor, title, subtitle, amount, amountColor }: TransactionItemProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: iconBg, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name={iconName} size={20} color={iconColor} />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '700', color: ON_SURFACE, fontFamily: 'System' }}>{title}</Text>
          <Text style={{ fontSize: 11, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>{subtitle}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 15, fontWeight: '700', color: amountColor, fontFamily: 'System' }}>{amount}</Text>
    </View>
  );
}

interface BudgetRowProps {
  iconName: any;
  label: string;
  spent: string;
  budget: string;
  progress: number;
  progressColor: string;
  statusLeft: string;
  statusRight: string;
  statusLeftColor: string;
  statusRightColor: string;
}

function BudgetRow({ iconName, label, spent, budget, progress, progressColor, statusLeft, statusRight, statusLeftColor, statusRightColor }: BudgetRowProps) {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MaterialIcons name={iconName} size={20} color={progressColor === RED ? RED : ON_SURFACE_VARIANT} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: ON_SURFACE, fontFamily: 'System' }}>{label}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 2 }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>{spent}</Text>
          <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, fontFamily: 'System' }}> / {budget}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: SURFACE_HIGH, height: 8, borderRadius: 99, overflow: 'hidden' }}>
        <View style={{ width: `${Math.min(progress, 100)}%` as any, height: '100%', backgroundColor: progressColor, borderRadius: 99 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
        <Text style={{ fontSize: 11, color: statusLeftColor, fontWeight: '700', fontFamily: 'System' }}>{statusLeft}</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 11, color: statusRightColor, fontWeight: '700', fontFamily: 'System' }}>{statusRight}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CashFlowScreen({ navigation }: { navigation?: any }) {
  const [activeTab, setActiveTab] = useState<'Monthly' | 'Quarterly' | 'Yearly'>('Monthly');

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE} />

      {/* Header */}
      <View style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12,
        borderBottomWidth: 0.5, borderBottomColor: OUTLINE_VARIANT,
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', backgroundColor: '#e1e3e4' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYlGmGm0SXsKazhAyAfjYKg6016ny5G58xI3cRCy-8J-1CDMP81wd_QoS4hwG3S8gJhgpKBOf2r3QVOnJTJeHkykRbR1tDVwtCLyNmIdK8LS1Rtye0U41EVOXOOmXsfWKEzcGIRhAJIYON5jHGrtMeaKSoD-q1qn58qCp0WPT3rsQuDyaAqENu-6YJ8gZVcw0rTBsU2LwX0NivxhzULmZQZ7Gd59hh8EQH1cReXBziSqbmIYCa_BPoR7oL_OWHOID-kn4vV24xAzHW' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 22, fontWeight: '800', color: NAVY, fontFamily: 'System', letterSpacing: -0.5 }}>FIRE Navigator</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="notifications" size={24} color={NAVY} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 16, paddingBottom: 120, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>

        {/* Filter + Action Row */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          {/* Segmented control */}
          <View style={{ flexDirection: 'row', backgroundColor: SURFACE_LOW, padding: 4, borderRadius: 12, gap: 2 }}>
            {(['Monthly', 'Quarterly', 'Yearly'] as const).map(tab => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                  backgroundColor: activeTab === tab ? SURFACE_WHITE : 'transparent',
                  shadowColor: activeTab === tab ? '#000' : 'transparent',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: activeTab === tab ? 0.08 : 0,
                  shadowRadius: 2,
                  elevation: activeTab === tab ? 2 : 0,
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: activeTab === tab ? '700' : '500', color: activeTab === tab ? NAVY : ON_SURFACE_VARIANT, fontFamily: 'System' }}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Generate button */}
          <TouchableOpacity 
            onPress={() => navigation?.navigate('VisualReports')}
            style={{
              backgroundColor: NAVY,
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 99,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <MaterialIcons name="auto-fix-high" size={16} color="#fff" />
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', fontFamily: 'System' }}>Generate</Text>
          </TouchableOpacity>
        </View>

        {/* KPI Grid 2x2 */}
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
          <KPICard label="Total Income" value="$12,450" change="+12% vs LY" changeColor={GREEN} iconName="payments" accentColor="#435b9f" />
          <KPICard label="Total Expense" value="$4,120" change="-5% vs Plan" changeColor={RED} iconName="shopping-cart" accentColor={RED} />
        </View>
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
          <KPICard label="Total Investment" value="$6,500" iconName="monitoring" accentColor="#e9c176" isInvestment={true} />
          <KPICard label="Net Savings" value="$1,830" iconName="savings" accentColor="#ad8a46" isSavings={true} />
        </View>

        {/* Recent Transactions */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Recent Transactions</Text>
            <TouchableOpacity onPress={() => navigation?.navigate('ActivityList')}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            backgroundColor: SURFACE_WHITE,
            borderRadius: 20,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.05,
            shadowRadius: 10,
            elevation: 2,
          }}>
            <TransactionItem
              iconName="work"
              iconBg="#dcfce7"
              iconColor={GREEN}
              title="Tech Global Corp"
              subtitle="Salary • Oct 01"
              amount="+$8,500.00"
              amountColor={GREEN}
            />
            <View style={{ height: 0.5, backgroundColor: OUTLINE_VARIANT, opacity: 0.3, marginHorizontal: 16 }} />
            <TransactionItem
              iconName="home"
              iconBg="#fee2e2"
              iconColor={RED}
              title="Skyline Rentals"
              subtitle="Rent • Oct 02"
              amount="-$2,800.00"
              amountColor={ON_SURFACE}
            />
            <View style={{ height: 0.5, backgroundColor: OUTLINE_VARIANT, opacity: 0.3, marginHorizontal: 16 }} />
            <TransactionItem
              iconName="account-balance"
              iconBg="#dbeafe"
              iconColor="#1d4ed8"
              title="Vanguard VTI"
              subtitle="Dividends • Oct 05"
              amount="+$124.50"
              amountColor={GREEN}
            />
            <View style={{ height: 0.5, backgroundColor: OUTLINE_VARIANT, opacity: 0.3, marginHorizontal: 16 }} />
            <TransactionItem
              iconName="shopping-bag"
              iconBg={SURFACE_HIGH}
              iconColor={ON_SURFACE_VARIANT}
              title="Apple Store"
              subtitle="Tech • Oct 08"
              amount="-$1,299.00"
              amountColor={ON_SURFACE}
            />
          </View>
        </View>

        {/* Budget Planner */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, marginBottom: 14, fontFamily: 'System' }}>Budget Planner</Text>

          <View style={{
            backgroundColor: SURFACE_LOW,
            borderRadius: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.04,
            shadowRadius: 6,
            elevation: 1,
          }}>
            <BudgetRow
              iconName="restaurant"
              label="Food & Dining"
              spent="$650"
              budget="$800"
              progress={81}
              progressColor={NAVY}
              statusLeft="81% Used"
              statusRight="Safe limit"
              statusLeftColor={ON_SURFACE_VARIANT}
              statusRightColor="#ad8a46"
            />
            <BudgetRow
              iconName="warning"
              label="Shopping"
              spent="$1,200"
              budget="$1,000"
              progress={120}
              progressColor={RED}
              statusLeft="OVERSPENT 20%"
              statusRight="Adjust Plan"
              statusLeftColor={RED}
              statusRightColor={NAVY}
            />

            {/* FIRE Milestone premium card */}
            <View style={{
              padding: 16,
              borderRadius: 16,
              backgroundColor: SECONDARY_CONTAINER,
              borderWidth: 1,
              borderColor: '#d3c5ad',
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#221b0b', textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'System' }}>FIRE Milestone</Text>
                <MaterialIcons name="auto-awesome" size={18} color="#221b0b" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#221b0b', marginBottom: 10, fontFamily: 'System' }}>Luxury Travel Fund</Text>
              <View style={{ backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: 99, height: 10, overflow: 'hidden', marginBottom: 8 }}>
                <View style={{ width: '45%', height: '100%', backgroundColor: NAVY, borderRadius: 99 }} />
              </View>
              <Text style={{ fontSize: 11, color: '#4f4533', fontFamily: 'System' }}>$4,500 of $10,000 saved</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
