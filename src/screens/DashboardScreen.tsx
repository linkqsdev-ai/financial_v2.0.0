import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// ── Helpers ────────────────────────────────────────────────
const NAVY = '#00113a';
const GOLD = '#D4AF37';
const CHAMPAGNE = '#e9c176';
const SURFACE = '#f8f9fa';
const SURFACE_HIGH = '#e7e8e9';
const SURFACE_WHITE = '#ffffff';
const ON_SURFACE = '#191c1d';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const OUTLINE_VARIANT = '#c5c6d2';
const GREEN = '#34C759';
const RED = '#ba1a1a';

// ── Sub-components ─────────────────────────────────────────

function Header() {
  return (
    <View style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: 'rgba(255,255,255,0.85)',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
      paddingHorizontal: 16, height: 56,
      borderBottomWidth: 0.5, borderBottomColor: OUTLINE_VARIANT,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: OUTLINE_VARIANT, backgroundColor: '#f0edef' }}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLABy4cCs6dWmFl6fme9MGQ8UQBMB0l_8hk58fwYXm5kjkBZmTdLc2n97cPWCOb9V8gHUkwBHLLZihq7O0dE6gcdPnYJESxGuqaSc8wS-LHKhZFgvAPzgDKr5bxBoRG92Ra7AS3cE33s9gQ2gXdIBEgRqOEjeBUlNirCRnFYvniZT4zVugInKqSb80R7zb1fDbarFTseujRuOGjDnuNtI87cNF_1Gmt5Ptv5Ii3Ht2wzoitHOdWPn_og_geP7FycS5ZZWCFjRIf1' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        <Text style={{ fontFamily: 'System', fontWeight: '700', fontSize: 24, color: '#00081e', letterSpacing: -0.5 }}>Finboom</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons name="notifications" size={24} color="#00081e" />
      </TouchableOpacity>
    </View>
  );
}

interface SectionCardProps {
  children: React.ReactNode;
  style?: object;
}

function SectionCard({ children, style }: SectionCardProps) {
  return (
    <View style={[{
      backgroundColor: SURFACE_WHITE,
      borderRadius: 24,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
    }, style]}>
      {children}
    </View>
  );
}

interface ProgressBarProps {
  progress: number;
  color: string;
}

function ProgressBar({ progress, color }: ProgressBarProps) {
  return (
    <View style={{ backgroundColor: SURFACE_HIGH, height: 6, borderRadius: 99, overflow: 'hidden', marginTop: 8 }}>
      <View style={{ width: `${progress}%` as any, height: '100%', backgroundColor: color, borderRadius: 99 }} />
    </View>
  );
}

// ── Main Screen ────────────────────────────────────────────
export default function DashboardScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F7" />
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingTop: 72, paddingBottom: 120, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <View style={{ marginBottom: 24, marginTop: 8 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: ON_SURFACE, letterSpacing: -0.5, fontFamily: 'System' }}>Good morning, Arjun</Text>
          <Text style={{ fontSize: 17, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Here is your financial snapshot.</Text>
        </View>

        {/* Quick Link to Expense Dashboard & Visual Reports */}
        <TouchableOpacity 
          onPress={() => navigation?.navigate('ExpenseDashboard')}
          activeOpacity={0.8}
          style={{
            backgroundColor: '#002366',
            borderRadius: 20,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            shadowColor: '#002366',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            elevation: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 10, borderRadius: 10 }}>
              <MaterialIcons name="insights" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: '#fff' }}>Expense Dashboard</Text>
              <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Analyze your budget & transactions</Text>
            </View>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Net Worth Hero Card */}
        <SectionCard style={{ marginBottom: 24, padding: 0, overflow: 'hidden' }}>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: OUTLINE, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'System' }}>Total Net Worth</Text>
              <TouchableOpacity
                onPress={() => navigation?.navigate('PremiumSubscription')}
                style={{ backgroundColor: 'rgba(212,175,55,0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, flexDirection: 'row', alignItems: 'center', gap: 4 }}
              >
                <MaterialIcons name="trending-up" size={14} color="#00174a" />
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#00174a', letterSpacing: 0.5, fontFamily: 'System' }}>PRO</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
              <Text style={{ fontSize: 40, fontWeight: '700', color: '#00081e', letterSpacing: -1, fontFamily: 'System' }}>₹2.08 Cr</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <MaterialIcons name="arrow-upward" size={14} color={GREEN} />
                <Text style={{ fontSize: 12, fontWeight: '600', color: GREEN, fontFamily: 'System' }}>18.2%</Text>
              </View>
            </View>
          </View>
          {/* Sparkline area */}
          <View style={{ height: 110, width: '100%', backgroundColor: `${NAVY}08`, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, overflow: 'hidden' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuxQB8FUfj8RenMhCzlTRogmrU5ZosGfiW6bYEGmrRuGEHyxTmdjMBckUlV0Wp53LUW3b9SVCTc3PDcLOdbUIKbHcOwcccQuxs8v0wntvZjk9nbpnRlJAdRpEzushH6_WHPanwAmgxqBhlyNmB6_xNqonBI7ylGQIBTfz1PBj35UcrVd3LuRSeP4Lnu4-xcaTDB0kkapo7UR1ELl17TtgzYCGROLyiJFBnMIgbj2LfnxXSRiTrJ_So8ma0v' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </SectionCard>

        {/* Assets & Liabilities Grid */}
        <View style={{ flexDirection: 'row', gap: 16, marginBottom: 24 }}>
          <SectionCard style={{ flex: 1, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <View style={{ padding: 8, backgroundColor: '#0A1F44', borderRadius: 12 }}>
                <MaterialIcons name="account-balance-wallet" size={18} color="#fff" />
              </View>
              <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.8, fontFamily: 'System' }}>Assets</Text>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: '#00081e', letterSpacing: -0.5, fontFamily: 'System' }}>₹2.34 Cr</Text>
            <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>67 assets</Text>
          </SectionCard>

          <SectionCard style={{ flex: 1, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <View style={{ padding: 8, backgroundColor: 'rgba(255,59,48,0.1)', borderRadius: 12 }}>
                <MaterialIcons name="credit-card" size={18} color="#FF3B30" />
              </View>
              <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.8, fontFamily: 'System' }}>Liabilities</Text>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: '#00081e', letterSpacing: -0.5, fontFamily: 'System' }}>₹26.4L</Text>
            <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>3 loans</Text>
          </SectionCard>
        </View>

        {/* Wealth Health Section */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: ON_SURFACE, letterSpacing: -0.3, marginBottom: 12, fontFamily: 'System' }}>Wealth Health</Text>

          {/* Savings Rate */}
          <SectionCard style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <View>
                <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4, fontFamily: 'System' }}>Savings Rate</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}>
                  <Text style={{ fontSize: 22, fontWeight: '700', color: '#00081e', fontFamily: 'System' }}>60%</Text>
                  <Text style={{ fontSize: 13, color: GREEN, fontFamily: 'System', fontWeight: '600' }}>▲ 5%</Text>
                </View>
              </View>
              {/* Circular progress simulated */}
              <View style={{ width: 52, height: 52, borderRadius: 26, borderWidth: 4, borderColor: SURFACE_HIGH, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <View style={{ width: 52, height: 52, borderRadius: 26, borderWidth: 4, borderColor: '#0A1F44', position: 'absolute',
                  borderTopColor: SURFACE_HIGH, borderRightColor: SURFACE_HIGH }} />
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#0A1F44', fontFamily: 'System' }}>60%</Text>
              </View>
            </View>
            <ProgressBar progress={60} color="#0A1F44" />
          </SectionCard>

          {/* Emergency Fund */}
          <TouchableOpacity onPress={() => navigation?.navigate('PremiumSubscription')} activeOpacity={0.95}>
            <SectionCard style={{ marginBottom: 16 }}>
              <View style={{ position: 'absolute', top: 16, right: 16, backgroundColor: GOLD, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 }}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: '#0A1F44', fontFamily: 'System' }}>PRO</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <View style={{ padding: 8, backgroundColor: '#f2f2f7', borderRadius: 12 }}>
                  <MaterialIcons name="medical-services" size={20} color="#0A1F44" />
                </View>
                <View>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.8, fontFamily: 'System' }}>Emergency Fund</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: ON_SURFACE, fontFamily: 'System' }}>₹3.2L</Text>
                    <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, fontFamily: 'System' }}> / ₹5L</Text>
                  </View>
                </View>
              </View>
              <ProgressBar progress={64} color={GOLD} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.5, fontFamily: 'System' }}>85% Covered</Text>
                <Text style={{ fontSize: 11, fontWeight: '600', color: GREEN, fontFamily: 'System' }}>On Track</Text>
              </View>
            </SectionCard>
          </TouchableOpacity>
        </View>

        {/* Active Goals */}
        <View style={{ marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 22, fontWeight: '700', color: ON_SURFACE, letterSpacing: -0.3, fontFamily: 'System' }}>Active Goals</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, fontWeight: '700', color: '#0A1F44', letterSpacing: 0.8, fontFamily: 'System' }}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>

          {/* Retirement Goal Card */}
          <View style={{
            backgroundColor: '#00081e',
            borderRadius: 24,
            padding: 24,
            overflow: 'hidden',
            position: 'relative',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.15,
            shadowRadius: 16,
            elevation: 6,
          }}>
            <View style={{ position: 'absolute', right: -16, bottom: -16, opacity: 0.1 }}>
              <MaterialIcons name="rocket-launch" size={100} color="#fff" />
            </View>
            <Text style={{ fontSize: 11, fontWeight: '600', color: 'rgba(180,198,244,0.8)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, fontFamily: 'System' }}>Retirement Corpus</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
              <Text style={{ fontSize: 32, fontWeight: '700', color: '#fff', fontFamily: 'System' }}>₹12.4 Cr</Text>
              <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontFamily: 'System' }}>Target</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.2)', height: 8, borderRadius: 99, overflow: 'hidden' }}>
                <View style={{ width: '42%', height: '100%', backgroundColor: GOLD, borderRadius: 99 }} />
              </View>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#fff', fontFamily: 'System' }}>42%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
