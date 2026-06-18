import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Switch, StatusBar, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const CHAMPAGNE = '#D4AF37';
const SURFACE_GRAY = '#F2F2F7';
const WHITE = '#ffffff';
const ON_SURFACE = '#1b1b1d';
const ON_SURFACE_VARIANT = '#44464e';
const OUTLINE = '#75777f';
const OUTLINE_VARIANT = '#c5c6cf';
const GREEN = '#34C759';
const RED = '#FF3B30';

interface ProfileSettingsScreenProps {
  navigation?: any;
}

export default function ProfileSettingsScreen({ navigation }: ProfileSettingsScreenProps) {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);

  const handleSignOut = () => {
    // Navigate back to Login
    navigation?.replace('Login');
  };

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE_GRAY }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE_GRAY} />

      {/* Top Header Bar */}
      <View style={{
        zIndex: 50,
        backgroundColor: 'rgba(242, 242, 247, 0.85)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
            <MaterialIcons name="arrow-back-ios" size={18} color={NAVY} />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: '700', color: NAVY, letterSpacing: -0.5, fontFamily: 'System' }}>Finboom</Text>
        </View>
        <TouchableOpacity style={{ padding: 4 }}>
          <MaterialIcons name="notifications" size={24} color={NAVY} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={{ alignItems: 'center', marginVertical: 20, gap: 12 }}>
          <View style={{ position: 'relative' }}>
            <View style={{
              width: 96, height: 96, borderRadius: 48,
              borderWidth: 2, borderColor: CHAMPAGNE,
              overflow: 'hidden',
              shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8,
              elevation: 4,
            }}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfNRZTUxSCdguG94Sb51BD01SZbUTcKO6cub7XkkWRn--Bfanbj0MSEWsaKOAVCpFFLrGgHeEFUbDRr1PDLz2HhqD06qXY-vISdnCn-qYINNsaUM3i-SPW3WnTGCLDmXKXz64HNyuKaB_5LHLWBIk_n3Mh6IzWuCgIlM-1-Dk0maDxaNtDHjdM0Tw7b0xYVabfFwuS0BFnOmCRSVUW4vOzh39vWtRv4CMskARcrW2rLzmRDS_WBHRTpfV3mHyAZv_gPMdObkuAB4Ap' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <View style={{
              position: 'absolute', bottom: 0, right: 0,
              backgroundColor: CHAMPAGNE,
              width: 24, height: 24, borderRadius: 12,
              alignItems: 'center', justifyContent: 'center',
              borderWidth: 2, borderColor: WHITE,
            }}>
              <MaterialIcons name="verified" size={14} color="#241a00" />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Alexander Sterling</Text>
            <View style={{ backgroundColor: 'rgba(254, 214, 91, 0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, marginTop: 6 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: '#745c00', textTransform: 'uppercase', letterSpacing: 0.5, fontFamily: 'System' }}>Private Wealth Tier</Text>
            </View>
          </View>
        </View>

        {/* Pro Badge Banner */}
        <View style={{
          backgroundColor: NAVY,
          borderRadius: 20,
          padding: 1,
          marginBottom: 24,
          shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10,
          elevation: 2,
        }}>
          <View style={{ backgroundColor: WHITE, borderRadius: 19, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ backgroundColor: 'rgba(254, 218, 165, 0.2)', padding: 10, borderRadius: 12 }}>
                <MaterialIcons name="workspace-premium" size={24} color="#ad8a46" />
              </View>
              <View>
                <Text style={{ fontSize: 17, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Finboom Pro</Text>
                <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Active until Oct 2025</Text>
              </View>
            </View>
            <TouchableOpacity 
              onPress={() => navigation?.navigate('PremiumSubscription')}
              style={{ backgroundColor: CHAMPAGNE, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 }}
            >
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#241a00', fontFamily: 'System' }}>Manage</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Lists */}
        <View style={{ gap: 24 }}>

          {/* Account Group */}
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginLeft: 12, fontFamily: 'System' }}>
              Account
            </Text>
            <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
              
              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="people-outline" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Family & Business Profiles</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Manage separate wealth entities</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="link" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Linked Accounts</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Manage linked broker holdings</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>4 Linked</Text>
                  <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="share" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Shared Access</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Invite CA or Spouse</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Data & Integrations Group */}
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginLeft: 12, fontFamily: 'System' }}>
              Data & Integrations
            </Text>
            <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
              
              <TouchableOpacity onPress={() => navigation?.navigate('AddAssetSource')} style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="file-upload" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Import Portfolio</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Zerodha, Groww, or CSV</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <View style={{ backgroundColor: 'rgba(52,199,89,0.1)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 }}>
                    <Text style={{ fontSize: 9, fontWeight: '700', color: GREEN, textTransform: 'uppercase', letterSpacing: 0.5 }}>New</Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation?.navigate('ManageCategories')} style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="category" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Manage Categories</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Create and edit budget categories</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation?.navigate('SubscriptionsRecurringBills')} style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="repeat" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Recurring Expenses</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Repeating bills & subscriptions</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="file-download" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Data Export</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>CSV or JSON full backup</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Security & Privacy Group */}
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginLeft: 12, fontFamily: 'System' }}>
              Security & Privacy
            </Text>
            <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
              
              <View style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="fingerprint" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Biometrics</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Use fingerprint to unlock</Text>
                  </View>
                </View>
                <Switch
                  value={biometricsEnabled}
                  onValueChange={setBiometricsEnabled}
                  trackColor={{ false: '#c5c6cf', true: NAVY }}
                  thumbColor={WHITE}
                />
              </View>

              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="security" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Two-Factor Auth</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Add security layer</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="lock-outline" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Security Settings</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>2FA, Sessions & Encryption</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>
            </View>
          </View>

          {/* App Settings Group */}
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginLeft: 12, fontFamily: 'System' }}>
              App Settings
            </Text>
            <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
              
              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="attach-money" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Default Currency</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Base currency for net worth</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: '700', color: OUTLINE, fontFamily: 'System' }}>USD ($)</Text>
                  <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="notifications-none" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Notifications</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Configure alert channels</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="palette" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Appearance</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Light, Dark, or System theme</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: '700', color: OUTLINE, fontFamily: 'System' }}>System</Text>
                  <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Support Group */}
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1.5, marginLeft: 12, fontFamily: 'System' }}>
              Support
            </Text>
            <View style={{ backgroundColor: WHITE, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }}>
              
              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="help-outline" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Help Center</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>FAQs & support chat</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="policy" size={22} color={NAVY} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: NAVY, fontFamily: 'System' }}>Privacy Policy</Text>
                    <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2, fontFamily: 'System' }}>Your data safety terms</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={OUTLINE} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <MaterialIcons name="delete-forever" size={22} color={RED} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: RED, fontFamily: 'System' }}>Delete Account</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(255,59,48,0.6)', marginTop: 2, fontFamily: 'System' }}>Permanently wipe all data</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Out Button */}
          <TouchableOpacity
            onPress={handleSignOut}
            style={{
              backgroundColor: 'rgba(255,59,48,0.08)',
              height: 56,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 8,
              marginTop: 12,
              borderWidth: 1, borderColor: 'rgba(255,59,48,0.15)',
            }}
          >
            <MaterialIcons name="logout" size={20} color={RED} />
            <Text style={{ fontSize: 16, fontWeight: '700', color: RED, fontFamily: 'System' }}>Sign Out</Text>
          </TouchableOpacity>

          {/* Version Footer */}
          <View style={{ alignItems: 'center', marginTop: 12, gap: 4 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE_VARIANT, textTransform: 'uppercase', letterSpacing: 1 }}>
              Finboom Version 4.2.1 (Platinum Build)
            </Text>
            <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE_VARIANT, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              © 2024 FINBOOM GLOBAL WEALTH INC.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f2f2f7',
  }
});
