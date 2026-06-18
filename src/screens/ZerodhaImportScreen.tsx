import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const CHAMPAGNE = '#D4AF37';
const SURFACE_GRAY = '#F2F2F7';
const WHITE = '#ffffff';
const ON_SURFACE = '#1b1b1d';
const ON_SURFACE_VARIANT = '#44464e';
const OUTLINE = '#75777f';
const OUTLINE_VARIANT = '#c5c6cf';
const ROYAL_NAVY = '#0A1F44';

interface ZerodhaImportScreenProps {
  navigation?: any;
}

export default function ZerodhaImportScreen({ navigation }: ZerodhaImportScreenProps) {
  const [uploading, setUploading] = useState(false);

  const handleSelectFile = () => {
    setUploading(true);
    // Simulate upload sequence and navigate to review screen
    setTimeout(() => {
      setUploading(false);
      navigation?.navigate('ReviewConfirmAssets');
    }, 1500);
  };

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE_GRAY, overflow: 'hidden' }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE_GRAY} />

      {/* Top Header Bar */}
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(242, 242, 247, 0.85)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
          <MaterialIcons name="arrow-back" size={24} color={ROYAL_NAVY} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Import from Zerodha</Text>
        <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: OUTLINE_VARIANT }}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb429qMm0QG7f5qDFLF-yloL6hAULGWF1EodEbbES54uEtij9eWngGznYGxcwtxmSJHjLTZWDBtARlQ-2KhUuNVUcZaaFIVi_Uj-57Y8-xARtSjaDWeM2y7yjtSq_Tj04h3WIbMPPdF0qLpjFVX5IsK_aNRbtBvOc4U-WxQCipmOIMxJWmPtEwJYYnqhagjbtfoVwxD-A2t8xnv3cONjd7Kt6c7so1oXaIUm_WdGp_LD2baI8pNDkgdmQzNM1CqgS6Z80FFpIizHGf' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: 84, paddingBottom: 32, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Block */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 26, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 8, fontFamily: 'System' }}>Transfer your portfolio</Text>
          <Text style={{ fontSize: 16, color: ON_SURFACE_VARIANT, fontFamily: 'System', lineHeight: 22 }}>
            Follow these simple steps to sync your Zerodha holdings with Finboom's elite analytics engine.
          </Text>
        </View>

        {/* Steps List */}
        <View style={{ gap: 24, marginBottom: 32 }}>
          {/* Step 1 */}
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View style={styles.stepNum}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: WHITE }}>01</Text>
            </View>
            <View style={{ flex: 1, paddingTop: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 6, fontFamily: 'System' }}>Log into Zerodha Console</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, lineHeight: 20, fontFamily: 'System' }}>
                Navigate to console.zerodha.com and sign in with your Kite credentials to access your secure holdings dashboard.
              </Text>
            </View>
          </View>

          {/* Step 2 */}
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View style={styles.stepNum}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: WHITE }}>02</Text>
            </View>
            <View style={{ flex: 1, paddingTop: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 6, fontFamily: 'System' }}>Export Holdings as CSV</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, lineHeight: 20, fontFamily: 'System' }}>
                Go to the 'Portfolio' tab, select 'Holdings', and click the 'Download' icon to save your data in .csv format.
              </Text>
              {/* Pro Tip Callout */}
              <View style={{
                backgroundColor: 'rgba(254, 218, 165, 0.15)',
                borderWidth: 1, borderColor: CHAMPAGNE,
                borderRadius: 14,
                padding: 14,
                flexDirection: 'row', gap: 10,
                marginTop: 12,
              }}>
                <MaterialIcons name="lightbulb-outline" size={20} color={CHAMPAGNE} style={{ marginTop: 2 }} />
                <Text style={{ flex: 1, fontSize: 13, color: ROYAL_NAVY, fontStyle: 'italic', lineHeight: 18, fontFamily: 'System' }}>
                  Pro tip: Ensure all filters are cleared to export your entire history.
                </Text>
              </View>
            </View>
          </View>

          {/* Step 3 */}
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View style={styles.stepNum}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: WHITE }}>03</Text>
            </View>
            <View style={{ flex: 1, paddingTop: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 6, fontFamily: 'System' }}>Upload here</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, lineHeight: 20, fontFamily: 'System' }}>
                Tap the secure zone below to choose the holding statement CSV from your local storage.
              </Text>
            </View>
          </View>
        </View>

        {/* Upload Zone */}
        <TouchableOpacity
          onPress={handleSelectFile}
          disabled={uploading}
          style={{
            backgroundColor: WHITE,
            borderRadius: 24,
            borderWidth: 2,
            borderStyle: 'dashed',
            borderColor: OUTLINE_VARIANT,
            padding: 32,
            alignItems: 'center',
            shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.02, shadowRadius: 10,
            elevation: 2,
            position: 'relative',
            marginBottom: 24,
          }}
        >
          {/* Security Badge */}
          <View style={{ position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(212,175,55,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 99, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <MaterialIcons name="workspace-premium" size={12} color={ROYAL_NAVY} />
            <Text style={{ fontSize: 9, fontWeight: '700', color: ROYAL_NAVY, letterSpacing: 0.8 }}>ELITE SECURITY</Text>
          </View>

          {/* Illustration Container */}
          <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginBottom: 20 }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLtIquvHR88j_HZg3rpPDX3ry4tQ9UBzGyA4WVDNAQPXvWxpEapLvtS3_2sRKyXWquawaWsFloEMODVARqsbuZA-4-A85_XwWGo0X9zJC4-riBFlIP2DWXKZ8YH8tGa_r7IjQUz7FVivXLrDwDO4FD_9bI07L4fpuPyal-tPzJQzjti2NPZ1xdshnNFCzulPTo5nDwgZ4o0QH-BMclh4kBmU2MMeUPMdUu93IPLHWDFw0ZY8tHvslImjpp1r' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>

          {uploading ? (
            <View style={{ alignItems: 'center', gap: 8 }}>
              <ActivityIndicator size="large" color={ROYAL_NAVY} />
              <Text style={{ fontSize: 16, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Analyzing statement CSV...</Text>
            </View>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 8, fontFamily: 'System' }}>Upload CSV</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, textAlign: 'center', marginBottom: 20, paddingHorizontal: 16, fontFamily: 'System' }}>
                Tap here to select your Zerodha holding file from your computer.
              </Text>
              <View style={{ backgroundColor: ROYAL_NAVY, paddingHorizontal: 28, paddingVertical: 12, borderRadius: 99 }}>
                <Text style={{ fontSize: 12, fontWeight: '700', color: WHITE, textTransform: 'uppercase', letterSpacing: 0.5, fontFamily: 'System' }}>Select File</Text>
              </View>
            </View>
          )}

          {/* Security Features */}
          <View style={{ flexDirection: 'row', gap: 24, marginTop: 24, borderTopWidth: 0.5, borderTopColor: '#f2f2f7', paddingTop: 16, width: '100%', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', gap: 4 }}>
              <MaterialIcons name="lock-outline" size={18} color={OUTLINE} />
              <Text style={{ fontSize: 10, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.5 }}>Encrypted Sync</Text>
            </View>
            <View style={{ width: 0.5, height: 24, backgroundColor: OUTLINE_VARIANT }} />
            <View style={{ alignItems: 'center', gap: 4 }}>
              <MaterialIcons name="history" size={18} color={OUTLINE} />
              <Text style={{ fontSize: 10, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 0.5 }}>Instant Processing</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* AI Banner Card */}
        <View style={{
          backgroundColor: '#0a1f44',
          borderRadius: 24,
          padding: 20,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <View style={{ position: 'absolute', bottom: -16, right: -16, opacity: 0.1 }}>
            <MaterialIcons name="trending-up" size={100} color="#fff" />
          </View>
          <Text style={{ fontSize: 11, fontWeight: '600', color: CHAMPAGNE, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>DATA INTEGRITY</Text>
          <Text style={{ fontSize: 18, fontWeight: '700', color: WHITE, marginBottom: 6, fontFamily: 'System' }}>Automated Insights</Text>
          <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 20, fontFamily: 'System' }}>
            Our AI engine automatically parses, cleans, and categorizes your imported assets into risk-adjusted clusters.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stepNum: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: ROYAL_NAVY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ROYAL_NAVY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    marginTop: 2,
  }
});
