import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface ReviewConfirmAssetsScreenProps {
  navigation?: any;
}

export default function ReviewConfirmAssetsScreen({ navigation }: ReviewConfirmAssetsScreenProps) {
  const { colors, typography } = useTheme();
  const styles = getStyles(colors, typography);

  const [activeFilter, setActiveFilter] = useState<'all' | 'stocks' | 'mf'>('all');
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    setConfirming(true);
    setTimeout(() => {
      setConfirming(false);
      Alert.alert(
        'Sync Successful',
        'Success! Your Zerodha assets have been synced to your Finboom portfolio.',
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate back to TabNavigator (Assets Portfolio screen)
              navigation?.reset({
                index: 0,
                routes: [{ name: 'TabNavigator', params: { screen: 'Assets' } }],
              });
            }
          }
        ]
      );
    }, 1500);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, overflow: 'hidden' }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Top Header Bar */}
      <View style={{
        zIndex: 50,
        backgroundColor: 'rgba(242, 242, 247, 0.85)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4 }}>
          <MaterialIcons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: colors.text, }}>Review Import</Text>
        <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: colors.outlineVariant }}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDePt02gxbdZA_25wEhTsvr1fOYDSJcGIO5D2VDqRviWIjMiv4WOqDqZ0EFc1ewcnM9M-GgOc5UbcFiPtoYDGagd9gF4TM08WD9f8chicunuEvQlrCzq3N4io3yjq0FSrXFdYqh4er4yFwlWe6FC3gf0sog5_fhI4N2q8RwkZxA3xxf030Cb_LY_5HyTQmxfqsB6f6T-9TYxNBm60ewTtjMCIU4GeDZNJJldIFEBs7ygmkqBjvrR3KpXnPSQXcjFEPlhDKbQ65Q0Pg7' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Header */}
        <View style={{ alignItems: 'center', marginVertical: 20, gap: 12 }}>
          <View style={{
            width: 120, height: 120, borderRadius: 28, overflow: 'hidden',
            shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.08, shadowRadius: 12,
            elevation: 4,
          }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADfAjjUGV-wmnzvcynqJe0oHTuyszBZz82hq0QgzM143mjGoqA2eCgvBxa5kPsP4LmK4sDgJOl07b4UvBD2A6n0qGxGnRNwI-TPvrcHPfGqNu9Ua5UiFVuYP_uWjvvisnEW8WR0dQDg6LR0iUutKVutcaHOU_KROPwdmjwa4xqaAyJ-4uL53i-DPyj8zyfWZ6JivCp3GAc7dsVZO4ealnTms6KHg0CEY2aUEA8d-j2C2nj1FzZ7ZS0tQNy21hV4gk7e3uAcF6C4cCP' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 26, color: colors.text, }}>Assets Ready</Text>
            <Text style={{ fontSize: 15, color: colors.textSecondary, textAlign: 'center', marginTop: 6, paddingHorizontal: 16, lineHeight: 20, fontFamily: typography.primary }}>
              We've parsed 12 assets from your Zerodha statement. Review the details below.
            </Text>
          </View>
        </View>

        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16, marginHorizontal: -16, paddingLeft: 16 }}>
          <TouchableOpacity
            onPress={() => setActiveFilter('all')}
            style={[styles.filterChip, activeFilter === 'all' && styles.filterActive]}
          >
            <Text style={[styles.filterText, activeFilter === 'all' && styles.filterTextActive]}>All Assets (12)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveFilter('stocks')}
            style={[styles.filterChip, activeFilter === 'stocks' && styles.filterActive]}
          >
            <Text style={[styles.filterText, activeFilter === 'stocks' && styles.filterTextActive]}>Stocks (8)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveFilter('mf')}
            style={[styles.filterChip, activeFilter === 'mf' && styles.filterActive, { marginRight: 32 }]}
          >
            <Text style={[styles.filterText, activeFilter === 'mf' && styles.filterTextActive]}>Mutual Funds (4)</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Asset Items List */}
        <View style={{ gap: 12 }}>
          {/* Reliance */}
          {(activeFilter === 'all' || activeFilter === 'stocks') && (
            <View style={styles.assetCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={styles.assetIconBox}>
                  <MaterialIcons name="trending-up" size={20} color={colors.text} />
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: colors.text, }}>RELIANCE</Text>
                  <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>Reliance Industries</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text }}>₹42,560.00</Text>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>15 Units</Text>
              </View>
            </View>
          )}

          {/* HDFC Bank */}
          {(activeFilter === 'all' || activeFilter === 'stocks') && (
            <View style={styles.assetCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={styles.assetIconBox}>
                  <MaterialIcons name="account-balance" size={20} color={colors.text} />
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: colors.text, }}>HDFCBANK</Text>
                  <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>HDFC Bank Ltd</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text }}>₹28,410.50</Text>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>20 Units</Text>
              </View>
            </View>
          )}

          {/* Mirae Asset (Mutual Fund) */}
          {(activeFilter === 'all' || activeFilter === 'mf') && (
            <View style={[styles.assetCard, { paddingVertical: 14, flexDirection: 'column', alignItems: 'stretch' }]}>
              {/* Mutual Fund Top indicator */}
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 4 }}>
                <View style={{ backgroundColor: 'rgba(212,175,55,0.1)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 }}>
                  <Text style={{ fontSize: 9, fontFamily: typography.primaryBold, color: colors.text, letterSpacing: 0.5 }}>MUTUAL FUND</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <View style={styles.assetIconBox}>
                    <MaterialIcons name="analytics" size={20} color={colors.text} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, color: colors.text, }}>MIRAE_ASSET</Text>
                    <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>Large Cap Fund</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text }}>₹1,12,045.00</Text>
                  <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>842.12 Units</Text>
                </View>
              </View>
            </View>
          )}

          {/* TCS */}
          {(activeFilter === 'all' || activeFilter === 'stocks') && (
            <View style={styles.assetCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={styles.assetIconBox}>
                  <MaterialIcons name="bolt" size={20} color={colors.text} style={{ transform: 'rotate(15deg)' }} />
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: colors.text, }}>TCS</Text>
                  <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>Tata Consultancy Services</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text }}>₹64,200.00</Text>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>18 Units</Text>
              </View>
            </View>
          )}

          {/* Infosys */}
          {(activeFilter === 'all' || activeFilter === 'stocks') && (
            <View style={styles.assetCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={styles.assetIconBox}>
                  <MaterialIcons name="layers" size={20} color={colors.text} />
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: colors.text, }}>INFY</Text>
                  <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>Infosys Ltd</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.text }}>₹32,150.25</Text>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2, fontFamily: typography.primary }}>22 Units</Text>
              </View>
            </View>
          )}
        </View>

        {/* Total Value Summary Card */}
        <View style={{
          marginTop: 24,
          backgroundColor: colors.primaryContainer,
          borderRadius: 24,
          padding: 24,
          shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.1, shadowRadius: 16,
          elevation: 4,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <View style={{ position: 'absolute', bottom: -30, right: -30, width: 120, height: 120, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 60 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <View>
              <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Total Import Value</Text>
              <Text style={{ fontSize: 32, color: colors.surfaceLowest, letterSpacing: -0.5, }}>₹2,79,365.75</Text>
            </View>
            <View style={{ backgroundColor: colors.primary, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
              <Text style={{ fontSize: 9, fontFamily: typography.primaryBold, color: colors.text, letterSpacing: 0.5 }}>VERIFIED</Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontFamily: typography.primary }}>Zerodha statement processed on Oct 24, 2023</Text>
        </View>

      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: 'rgba(255,255,255,0.96)',
        borderTopWidth: 0.5, borderTopColor: 'rgba(197,198,207,0.3)',
        paddingTop: 12, paddingBottom: 28, paddingHorizontal: 16,
        shadowColor: colors.primaryContainer, shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.03, shadowRadius: 10,
        elevation: 10,
      }}>
        <TouchableOpacity
          onPress={handleConfirm}
          disabled={confirming}
          style={{
            backgroundColor: colors.primaryContainer,
            borderRadius: 16,
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            shadowColor: colors.primaryContainer, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8,
            elevation: 4,
          }}
        >
          {confirming ? (
            <ActivityIndicator size="small" color={colors.surfaceLowest} />
          ) : (
            <>
              <Text style={{ fontSize: 17, color: colors.surfaceLowest, }}>Confirm & Add to Portfolio</Text>
              <MaterialIcons name="arrow-forward" size={18} color={colors.surfaceLowest} />
            </>
          )}
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', fontSize: 10, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 10 }}>
          Secured by AES-256 Encryption
        </Text>
      </View>
    </View>
  );
}

const getStyles = (colors: any, typography: any) => StyleSheet.create({
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 99,
    backgroundColor: colors.surfaceLowest,
    borderWidth: 1,
    borderColor: '#c5c6cf',
    marginRight: 8,
    alignItems: 'center',
  },
  filterActive: {
    backgroundColor: colors.primaryContainer,
    borderColor: colors.primaryContainer,
  },
  filterText: {
    fontSize: 12,
    fontFamily: typography.primaryBold,
    color: colors.textSecondary,
  },
  filterTextActive: {
    color: colors.surfaceLowest,
  },
  assetCard: {
    backgroundColor: colors.surfaceLowest,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.02, shadowRadius: 6,
    elevation: 1,
  },
  assetIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
