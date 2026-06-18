import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

const NAVY = '#00113a';
const CHAMPAGNE = '#D4AF37';
const SURFACE_GRAY = '#F2F2F7';
const WHITE = '#ffffff';
const ON_SURFACE = '#1b1b1d';
const ON_SURFACE_VARIANT = '#44464e';
const OUTLINE = '#75777f';
const OUTLINE_VARIANT = '#c5c6cf';
const GREEN = '#34C759';
const ROYAL_NAVY = '#0A1F44';
const GOLD = '#D4AF37';

interface AssetsPortfolioScreenProps {
  navigation?: any;
}

export default function AssetsPortfolioScreen({ navigation }: AssetsPortfolioScreenProps) {
  const [activeTab, setActiveTab] = useState<'allocation' | 'accounts'>('allocation');

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE_GRAY }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE_GRAY} />

      {/* Top Header Bar */}
      <View style={{
        zIndex: 50,
        backgroundColor: SURFACE_GRAY,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: OUTLINE_VARIANT }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMzdrnG1f7TuHym7JIIoi5aDUgeg8pLkkC3F6oFZ9fIM_9WyhuvoJUXoV-69yM2r1FE8ncgsjOdq_qw0zpd-Z2lG1MJFKf92z4RzoF1mUpdWm4RAMe8xofntRxiJHrLeGJrhVFLt7JkPnqNdqo0pFfUTtKS6y9AbZ47j3bhHieowBUSrnC8VTMPLfZ2KKLVt6mni6HaTzqUwtcG_-BAucyVKXVt-2aTRls2uWaekdkR0LxtseguoORs8kCIyFbvAKasC0Tmrrv2Ka5' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 22, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Portfolio</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity style={{ padding: 4 }}>
            <MaterialIcons name="notifications" size={24} color={NAVY} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Toggle Switch */}
        <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0,17,58,0.06)', borderRadius: 14, padding: 3 }}>
            <TouchableOpacity
              onPress={() => setActiveTab('allocation')}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 11,
                alignItems: 'center',
                backgroundColor: activeTab === 'allocation' ? WHITE : 'transparent',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: activeTab === 'allocation' ? 0.08 : 0,
                shadowRadius: 4,
                elevation: activeTab === 'allocation' ? 2 : 0,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '700', color: activeTab === 'allocation' ? NAVY : ON_SURFACE_VARIANT, fontFamily: 'System' }}>Allocation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('accounts')}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 11,
                alignItems: 'center',
                backgroundColor: activeTab === 'accounts' ? WHITE : 'transparent',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: activeTab === 'accounts' ? 0.08 : 0,
                shadowRadius: 4,
                elevation: activeTab === 'accounts' ? 2 : 0,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '700', color: activeTab === 'accounts' ? NAVY : ON_SURFACE_VARIANT, fontFamily: 'System' }}>Accounts & Wallets</Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === 'allocation' ? (
          /* Allocation Donut View */
          <View style={{ paddingHorizontal: 16, gap: 24 }}>
            {/* Donut Chart Summary Card */}
            <View style={{
              backgroundColor: WHITE,
              borderRadius: 24,
              padding: 20,
              alignItems: 'center',
              shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 12,
              elevation: 2,
            }}>
              <View style={{ width: 180, height: 180, position: 'relative', marginBottom: 20 }}>
                {/* SVG Donut Chart */}
                <Svg width="180" height="180" viewBox="0 0 100 100">
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke="#F2F2F7" strokeWidth="8" />
                  {/* Equity: 26% */}
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke={NAVY} strokeWidth="8" strokeDasharray="65.3 251.2" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                  {/* Mutual Funds: 21% */}
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke="#4c5e86" strokeWidth="8" strokeDasharray="52.8 251.2" strokeDashoffset="-65.3" transform="rotate(-90 50 50)" />
                  {/* Real Estate: 24% */}
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke={CHAMPAGNE} strokeWidth="8" strokeDasharray="60.3 251.2" strokeDashoffset="-118.1" transform="rotate(-90 50 50)" />
                  {/* Gold: 8% */}
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke="#735c00" strokeWidth="8" strokeDasharray="20.1 251.2" strokeDashoffset="-178.4" transform="rotate(-90 50 50)" />
                  {/* EPF & PPF: 21% */}
                  <Circle cx="50" cy="50" r="40" fill="transparent" stroke="#0a1f44" strokeWidth="8" strokeDasharray="52.8 251.2" strokeDashoffset="-198.5" transform="rotate(-90 50 50)" />
                </Svg>
                
                {/* Center Content */}
                <View style={{
                  position: 'absolute', inset: 24,
                  backgroundColor: WHITE,
                  borderRadius: 66,
                  alignItems: 'center', justifyContent: 'center',
                  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 6,
                  elevation: 2,
                }}>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5 }}>Total Assets</Text>
                  <Text style={{ fontSize: 24, fontWeight: '700', color: NAVY, marginTop: 2, fontFamily: 'System' }}>₹2.34 Cr</Text>
                </View>
              </View>

              {/* Legend Grid */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: 12, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 100 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: NAVY }} />
                  <View>
                    <Text style={{ fontSize: 11, color: OUTLINE, fontWeight: '600' }}>Equity</Text>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>26%</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 100 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#4c5e86' }} />
                  <View>
                    <Text style={{ fontSize: 11, color: OUTLINE, fontWeight: '600' }}>MF</Text>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>21%</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 100 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: CHAMPAGNE }} />
                  <View>
                    <Text style={{ fontSize: 11, color: OUTLINE, fontWeight: '600' }}>Real Estate</Text>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>24%</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, minWidth: 100 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#735c00' }} />
                  <View>
                    <Text style={{ fontSize: 11, color: OUTLINE, fontWeight: '600' }}>Gold</Text>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>8%</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Asset Classes Section */}
            <View style={{ gap: 12 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, paddingLeft: 4, fontFamily: 'System' }}>Asset Classes</Text>
              
              <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
                
                {/* Equity */}
                <TouchableOpacity style={styles.assetRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,17,58,0.06)', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="trending-up" size={20} color={NAVY} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Equity</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>12 stocks</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>₹62L</Text>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: GREEN, marginTop: 2 }}>+14.2%</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={20} color={OUTLINE_VARIANT} />
                  </View>
                </TouchableOpacity>

                {/* Mutual Funds */}
                <TouchableOpacity style={styles.assetRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,17,58,0.06)', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="account-balance-wallet" size={20} color={NAVY} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Mutual Funds</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>8 active SIPs</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>₹48L</Text>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: GREEN, marginTop: 2 }}>+8.5%</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={20} color={OUTLINE_VARIANT} />
                  </View>
                </TouchableOpacity>

                {/* Real Estate */}
                <TouchableOpacity style={styles.assetRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(254, 224, 136, 0.25)', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="home" size={20} color="#735c00" />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Real Estate</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>2 properties</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>₹55L</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2 }}>Estimated</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={20} color={OUTLINE_VARIANT} />
                  </View>
                </TouchableOpacity>

                {/* Gold & SGBs */}
                <TouchableOpacity style={styles.assetRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(254, 219, 199, 0.4)', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="payments" size={20} color="#311300" />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Gold & SGBs</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Digital & Physical</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>₹18L</Text>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: GREEN, marginTop: 2 }}>+2.1%</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={20} color={OUTLINE_VARIANT} />
                  </View>
                </TouchableOpacity>

                {/* Fixed Income EPF/PPF */}
                <TouchableOpacity style={[styles.assetRow, { borderBottomWidth: 0 }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,17,58,0.06)', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="savings" size={20} color={NAVY} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>EPF & PPF</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Retirement Funds</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>₹32L</Text>
                      <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2 }}>Locked</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={20} color={OUTLINE_VARIANT} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Pro Insight Alert */}
            <View style={{
              backgroundColor: ROYAL_NAVY,
              borderRadius: 24,
              padding: 20,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <View style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.1 }}>
                <MaterialIcons name="stars" size={120} color="#fff" />
              </View>
              <View style={{ alignSelf: 'flex-start', backgroundColor: CHAMPAGNE, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, marginBottom: 12 }}>
                <Text style={{ fontSize: 9, fontWeight: '700', color: ROYAL_NAVY, textTransform: 'uppercase', letterSpacing: 1 }}>Pro Insight</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 8, fontFamily: 'System' }}>Allocation Alert</Text>
              <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 20, marginBottom: 16, fontFamily: 'System' }}>
                Your Equity allocation is 5% above your target. Consider rebalancing into Gold to maintain your risk profile.
              </Text>
              <TouchableOpacity 
                onPress={() => navigation?.navigate('PremiumSubscription')}
                style={{ alignSelf: 'flex-start', backgroundColor: WHITE, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 }}
              >
                <Text style={{ fontSize: 14, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Review Strategy</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          /* Accounts & Wallets View (Copied from AccountsWalletsScreen layout) */
          <View style={{ paddingHorizontal: 16, gap: 20 }}>
            {/* Carousel simulation header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Your Accounts</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 13, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>View All</Text>
              </TouchableOpacity>
            </View>

            {/* Simulated horizontal bank cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16, paddingLeft: 16 }}>
              {/* Card 1 */}
              <View style={[styles.walletCard, { backgroundColor: '#002366' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <View style={{ backgroundColor: 'rgba(255,255,255,0.12)', padding: 6, borderRadius: 8 }}>
                    <MaterialIcons name="account-balance" size={20} color="#fff" />
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 9, fontWeight: '600', textTransform: 'uppercase' }}>Primary</Text>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>Bank of Liberty</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, marginBottom: 2 }}>Checking Account - 5678</Text>
                  <Text style={{ color: CHAMPAGNE, fontSize: 20, fontWeight: '700' }}>45,230.15 <Text style={{ fontSize: 11 }}>USD</Text></Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontStyle: 'italic', fontWeight: '700' }}>VISA</Text>
                  <View style={{ width: 28, height: 16, backgroundColor: GOLD, borderRadius: 3 }} />
                </View>
              </View>
              
              {/* Card 2 */}
              <View style={[styles.walletCard, { backgroundColor: '#064e3b', marginRight: 32 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <View style={{ backgroundColor: 'rgba(255,255,255,0.12)', padding: 6, borderRadius: 8 }}>
                    <MaterialIcons name="account-balance-wallet" size={20} color="#fff" />
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 9, fontWeight: '600', textTransform: 'uppercase' }}>Growth</Text>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>Savings Wallet</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, marginBottom: 2 }}>Rainy Day Fund - 1234</Text>
                  <Text style={{ color: CHAMPAGNE, fontSize: 20, fontWeight: '700' }}>12,500.00 <Text style={{ fontSize: 11 }}>USD</Text></Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: '700' }}>Yield 4.2%</Text>
                  <View style={{ width: 28, height: 16, backgroundColor: GOLD, borderRadius: 3 }} />
                </View>
              </View>
            </ScrollView>

            {/* Precision Rebalancing banner */}
            <View style={{
              backgroundColor: WHITE,
              borderRadius: 24,
              padding: 16,
              shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
              elevation: 2,
            }}>
              <View style={{ height: 120, width: '100%', borderRadius: 16, overflow: 'hidden', position: 'relative', marginBottom: 16 }}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cc6xmkWmAu8vWQjXuxWxqvUgnDNby4L9VDo6SJZssEMZZk0E7-Xi5wlgQ3khnwWR38IfRP4B2_1vRmjj4LWu-NwRDbBpShyy7v2ysW8VKHXF2TqDiUafNdncKC8EVpyDkMSafsoSK-b5Cx0uKXsK8hJnvRBbrGeyAo3-0o1cuC2TJNfQXdX0iOJROc2YFVPOnx5N4VJLkAwZ7Y4Xi7XOjcY7LrJd7YQiwRSzU3UB7zvprKUVoEdMGwr5mTeeIJpNF_VTbWVSz1oN' }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                />
                <View style={{ position: 'absolute', bottom: 8, left: 12, backgroundColor: 'rgba(0,17,58,0.7)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }}>
                  <Text style={{ fontSize: 9, fontWeight: '700', color: CHAMPAGNE, textTransform: 'uppercase', letterSpacing: 1 }}>Precision Rebalancing Active</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <MaterialIcons name="swap-horiz" size={24} color={NAVY} />
                <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY }}>Transfer Assets</Text>
              </View>

              <View style={{ gap: 14 }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>From Account</Text>
                    <View style={styles.dropdown}>
                      <Text style={{ fontSize: 14, color: ON_SURFACE }}>Bank of Liberty</Text>
                      <MaterialIcons name="keyboard-arrow-down" size={16} color={ON_SURFACE_VARIANT} />
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>To Account</Text>
                    <View style={styles.dropdown}>
                      <Text style={{ fontSize: 14, color: ON_SURFACE }}>Savings Wallet</Text>
                      <MaterialIcons name="keyboard-arrow-down" size={16} color={ON_SURFACE_VARIANT} />
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ fontSize: 10, fontWeight: '600', color: ON_SURFACE_VARIANT, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>Transfer Amount</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1.5, borderBottomColor: OUTLINE_VARIANT, paddingBottom: 6 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, marginRight: 8 }}>$</Text>
                    <TextInput style={{ flex: 1, fontSize: 20, fontWeight: '700', color: NAVY }} placeholder="0.00" keyboardType="numeric" />
                  </View>
                </View>

                <TouchableOpacity style={{
                  backgroundColor: NAVY,
                  borderRadius: 12,
                  height: 48,
                  flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}>
                  <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }}>Confirm Transfer</Text>
                  <MaterialIcons name="arrow-forward" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Recent Transfers Feed */}
            <View style={{
              backgroundColor: WHITE,
              borderRadius: 24,
              padding: 16,
              shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
              elevation: 2,
            }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, marginBottom: 12 }}>Recent Transfers</Text>
              
              <View style={styles.transferRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={styles.transferIcon}><MaterialIcons name="trending-up" size={18} color={NAVY} /></View>
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Bank → Savings</Text>
                    <Text style={{ fontSize: 11, color: OUTLINE }}>Wealth Allocation • Oct 25</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>-$200.00</Text>
              </View>

              <View style={styles.transferRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={styles.transferIcon}><MaterialIcons name="trending-down" size={18} color={NAVY} /></View>
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Savings → Bank</Text>
                    <Text style={{ fontSize: 11, color: OUTLINE }}>Liquidity Adjustment • Oct 23</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>-$50.00</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        onPress={() => navigation?.navigate('AddAssetSource')}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 96,
          backgroundColor: NAVY,
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: NAVY,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
          elevation: 8,
          zIndex: 40,
        }}
        activeOpacity={0.8}
      >
        <MaterialIcons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  assetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f2f2f7',
  },
  walletCard: {
    width: 260,
    height: 160,
    borderRadius: 16,
    marginRight: 14,
    padding: 14,
    justifyContent: 'space-between',
  },
  dropdown: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: '#c5c6cf',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transferRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f2f2f7',
  },
  transferIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,35,102,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
