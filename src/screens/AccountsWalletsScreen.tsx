import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StatusBar, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface SectionCardProps {
  children: React.ReactNode;
  style?: object;
}

function SectionCard({ children, style }: SectionCardProps) {
  const { colors, typography } = useTheme();

  return (
    <View style={[{
      backgroundColor: colors.surfaceLowest,
      borderRadius: 24,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 2,
    }, style]}>
      {children}
    </View>
  );
}

interface WalletCardProps {
  gradient: string[];
  label: string;
  name: string;
  account: string;
  balance: string;
  currency: string;
  bottomLeft: string;
  iconName: any;
}

function WalletCard({ gradient, label, name, account, balance, currency, bottomLeft, iconName }: WalletCardProps) {
  const { colors, typography } = useTheme();

  return (
    <View style={{
      width: 280,
      height: 175,
      borderRadius: 20,
      marginRight: 16,
      overflow: 'hidden',
      backgroundColor: gradient[0],
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
    }}>
      {/* Texture overlay using a subtle gradient */}
      <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.02)' }} />
      
      <View style={{ padding: 18, flex: 1, justifyContent: 'space-between' }}>
        {/* Top row */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View style={{ backgroundColor: 'rgba(255,255,255,0.12)', padding: 8, borderRadius: 10 }}>
            <MaterialIcons name={iconName} size={22} color="#fff" />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, }}>{label}</Text>
            <Text style={{ color: '#fff', fontSize: 15, fontFamily: typography.primaryBold }}>{name}</Text>
          </View>
        </View>

        {/* Balance */}
        <View>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: '500', letterSpacing: 0.5, fontFamily: typography.primary, marginBottom: 2 }}>{account}</Text>
          <Text style={{ color: colors.primary, fontSize: 22, letterSpacing: -0.5, }}>
            {balance} <Text style={{ fontSize: 12, opacity: 0.8 }}>{currency}</Text>
          </Text>
        </View>

        {/* Bottom row */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, fontStyle: 'italic', fontFamily: typography.primaryBold }}>{bottomLeft}</Text>
          <View style={{ width: 32, height: 20, backgroundColor: colors.primary, borderRadius: 4, opacity: 0.85 }} />
        </View>
      </View>
    </View>
  );
}

interface TransferItemProps {
  icon: any;
  from: string;
  to: string;
  date: string;
  amount: string;
  status: string;
  statusColor: string;
}

function TransferItem({ icon, from, to, date, amount, status, statusColor }: TransferItemProps) {
  const { colors, typography } = useTheme();

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,35,102,0.08)', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name={icon} size={20} color="#002366" />
          </View>
          <View>
            <Text style={{ fontSize: 14, color: colors.text, }}>{from} → {to}</Text>
            <Text style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>{date}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 15, color: colors.text, }}>{amount}</Text>
          <Text style={{ fontSize: 10, color: statusColor, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2, }}>{status}</Text>
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: colors.outlineVariant, opacity: 0.3 }} />
    </View>
  );
}

export default function AccountsWalletsScreen({ navigation }: { navigation?: any }) {
  const { colors, typography } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={{
        backgroundColor: colors.surfaceLowest,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12,
        borderBottomWidth: 0.5, borderBottomColor: colors.outlineVariant,
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} activeOpacity={0.7}>
            <MaterialIcons name="arrow-back" size={24} color="#00113a" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, color: colors.text, }}>Accounts & Wallets</Text>
        </View>
        <View style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#dbe1ff', overflow: 'hidden', backgroundColor: '#e1e3e4' }}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCknSEvROnRXTBjIrP7DLlfVv3ssfPhhuyeRWWZTfvRA5LZ-U8WOIgcn_mZa2xDkUW5ClYdPRF4st-oCsp5w-lbM61JxOfpVNbVIiNbLl6q3-hmBpvkFD2CnfNI9SGP4lIyGY54hbPbF7ebJfvXXcmbh95miz30v6MhPWHj0_uOwHtyQou7qmnAv5zENn3BfDLSz5rigM79u_XyrUB1aCt66uljMjycOEx0pvP1zpn_7YrmjILl7cRRaE0mjnPmmuZDymYkywiDvkd9' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 32 }} showsVerticalScrollIndicator={false}>

        {/* Wallet Carousel */}
        <View style={{ paddingTop: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 20, marginBottom: 16 }}>
            <View>
              <Text style={{ fontSize: 22, color: colors.text, }}>Your Portfolio</Text>
              <Text style={{ fontSize: 14, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>Manage your liquid assets</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={{ fontSize: 14, color: colors.text, }}>View All</Text>
              <MaterialIcons name="arrow-forward" size={14} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <WalletCard
              gradient={['#002366', '#00113a']}
              label="Primary Account"
              name="Bank of Liberty"
              account="Checking Account - 5678"
              balance="45,230.15"
              currency="USD"
              bottomLeft="VISA"
              iconName="account-balance"
            />
            <WalletCard
              gradient={['#064e3b', '#022c22']}
              label="Growth Asset"
              name="Savings Wallet"
              account="Rainy Day Fund - 1234"
              balance="12,500.00"
              currency="USD"
              bottomLeft="Yield 4.2%"
              iconName="account-balance-wallet"
            />
            <WalletCard
              gradient={['#1e293b', '#0f172a']}
              label="Credit Line"
              name="Platinum Credit"
              account="Credit Line - 9876"
              balance="8,750.50"
              currency="USD"
              bottomLeft="◉"
              iconName="credit-card"
            />
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 20 }}>

          {/* Transfer Assets Form */}
          <SectionCard style={{ marginBottom: 24, borderLeftWidth: 4, borderLeftColor: colors.primaryContainer }}>
            {/* Header banner image */}
            <View style={{ height: 120, width: '100%', borderRadius: 12, marginBottom: 16, overflow: 'hidden', position: 'relative' }}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cc6xmkWmAu8vWQjXuxWxqvUgnDNby4L9VDo6SJZssEMZZk0E7-Xi5wlgQ3khnwWR38IfRP4B2_1vRmjj4LWu-NwRDbBpShyy7v2ysW8VKHXF2TqDiUafNdncKC8EVpyDkMSafsoSK-b5Cx0uKXsK8hJnvRBbrGeyAo3-0o1cuC2TJNfQXdX0iOJROc2YFVPOnx5N4VJLkAwZ7Y4Xi7XOjcY7LrJd7YQiwRSzU3UB7zvprKUVoEdMGwr5mTeeIJpNF_VTbWVSz1oN' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
              <View style={{ position: 'absolute', bottom: 8, left: 12, backgroundColor: 'rgba(0,17,58,0.7)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }}>
                <Text style={{ fontSize: 9, fontFamily: typography.primaryBold, color: colors.primary, textTransform: 'uppercase', letterSpacing: 1 }}>Precision Rebalancing Active</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <MaterialIcons name="swap-horiz" size={24} color={colors.text} />
              <Text style={{ fontSize: 20, color: colors.text, }}>Transfer Assets</Text>
            </View>

            {/* From / To selectors */}
            <View style={{ flexDirection: 'row', gap: 10, marginBottom: 14 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 10, color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, marginLeft: 4, }}>From Account</Text>
                <View style={{ backgroundColor: colors.surfaceLowest, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 14, color: colors.text, fontFamily: typography.primary }}>Bank of Liberty</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={16} color={colors.textSecondary} />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 10, color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, marginLeft: 4, }}>To Account</Text>
                <View style={{ backgroundColor: colors.surfaceLowest, borderWidth: 1, borderColor: colors.outlineVariant, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 14, color: colors.text, fontFamily: typography.primary }}>Savings Wallet</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={16} color={colors.textSecondary} />
                </View>
              </View>
            </View>

            {/* Amount */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 10, color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, marginLeft: 4, }}>Transfer Amount</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: colors.outlineVariant, paddingBottom: 8 }}>
                <Text style={{ fontSize: 22, color: colors.text, marginRight: 8, }}>$</Text>
                <TextInput
                  style={{ flex: 1, fontSize: 22, color: colors.text, fontFamily: typography.primary }}
                  placeholder="0.00"
                  placeholderTextColor={colors.outlineVariant}
                  keyboardType="numeric"
                />
              </View>
              <Text style={{ fontSize: 11, color: colors.textSecondary, textAlign: 'right', marginTop: 4, fontFamily: typography.primary }}>Daily limit: $10,000.00</Text>
            </View>

            {/* Confirm button */}
            <TouchableOpacity style={{
              backgroundColor: colors.primaryContainer,
              borderRadius: 14,
              paddingVertical: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
              <Text style={{ color: '#fff', fontSize: 16, fontFamily: typography.primaryBold }}>Confirm Transfer</Text>
              <MaterialIcons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </SectionCard>

          {/* Recent Transfers */}
          <SectionCard style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <MaterialIcons name="history" size={22} color="#685d4a" />
                <Text style={{ fontSize: 18, color: colors.text, }}>Recent Transfers</Text>
              </View>
              <View style={{ backgroundColor: '#eddec5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>
                <Text style={{ fontSize: 10, color: '#6c614e', textTransform: 'uppercase', letterSpacing: 0.5, }}>Live Feed</Text>
              </View>
            </View>

            <TransferItem
              icon="trending-up"
              from="Bank"
              to="Savings"
              date="Wealth Allocation • Oct 25"
              amount="-$200.00"
              status="Success"
              statusColor={colors.success}
            />
            <TransferItem
              icon="trending-down"
              from="Savings"
              to="Bank"
              date="Liquidity Adjustment • Oct 23"
              amount="-$50.00"
              status="Success"
              statusColor={colors.success}
            />
            <View style={{ opacity: 0.6 }}>
              <TransferItem
                icon="schedule"
                from="External"
                to="Bank"
                date="Scheduled: Dividends • Oct 30"
                amount="+$1,450.00"
                status="Pending"
                statusColor="#685d4a"
              />
            </View>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: `${colors.primaryContainer}20`, borderRadius: 10, paddingVertical: 12, alignItems: 'center', marginTop: 12 }}>
              <Text style={{ fontSize: 14, color: colors.text, }}>Download Statements</Text>
            </TouchableOpacity>
          </SectionCard>

          {/* FIRE Progress Banner */}
          <View style={{
            backgroundColor: colors.primaryContainer,
            borderRadius: 24,
            padding: 20,
            marginBottom: 16,
            overflow: 'hidden',
          }}>
            <View style={{ position: 'absolute', top: 12, right: 12, opacity: 0.1 }}>
              <MaterialIcons name="insights" size={60} color="#fff" />
            </View>
            <Text style={{ fontSize: 18, color: colors.primary, marginBottom: 6, }}>Financial Independence Status</Text>
            <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 20, marginBottom: 16, fontFamily: typography.primary }}>
              Your liquid assets cover <Text style={{ fontFamily: typography.primaryBold }}>2.4 years</Text> of expenses. You're 15% closer to FIRE this month.
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.15)', height: 8, borderRadius: 99, overflow: 'hidden' }}>
                <View style={{ width: '40%', height: '100%', backgroundColor: colors.primary, borderRadius: 99 }} />
              </View>
              <Text style={{ fontSize: 14, color: '#fff', }}>40%</Text>
            </View>
            <Text style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1, marginTop: 8, }}>Overall Progress</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
