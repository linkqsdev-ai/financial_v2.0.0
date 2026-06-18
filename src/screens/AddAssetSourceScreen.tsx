import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const CHAMPAGNE = '#D4AF37';
const SURFACE_GRAY = '#F2F2F7';
const WHITE = '#ffffff';
const ON_SURFACE = '#1b1b1d';
const ON_SURFACE_VARIANT = '#44464e';
const OUTLINE = '#75777f';
const OUTLINE_VARIANT = '#c5c6cf';
const ROYAL_NAVY = '#0A1F44';

interface AddAssetSourceScreenProps {
  navigation?: any;
}

export default function AddAssetSourceScreen({ navigation }: AddAssetSourceScreenProps) {
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
          <MaterialIcons name="close" size={24} color={ROYAL_NAVY} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Add Asset</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: 84, paddingBottom: 32, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          backgroundColor: WHITE,
          borderRadius: 14,
          paddingHorizontal: 14,
          height: 56,
          marginBottom: 24,
          shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.02, shadowRadius: 6,
          elevation: 1,
        }}>
          <MaterialIcons name="search" size={22} color={ON_SURFACE_VARIANT} style={{ marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, fontSize: 16, color: ON_SURFACE, fontFamily: 'System' }}
            placeholder="Search brokers or asset types"
            placeholderTextColor="rgba(117,119,127,0.5)"
          />
        </View>

        {/* Fast Import Section */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Fast Import</Text>
            <Text style={{ fontSize: 11, fontWeight: '700', color: CHAMPAGNE, textTransform: 'uppercase', letterSpacing: 0.5 }}>Recommended</Text>
          </View>

          <View style={{ gap: 12 }}>
            {/* Zerodha */}
            <TouchableOpacity
              onPress={() => navigation?.navigate('ZerodhaImport')}
              style={styles.importCard}
            >
              <View style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: '#F0F3F7', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOC7DAtb7-Ula2vWOlDetMPz7HAAB-19TDqIYBakUPmuzo5vxrcEUQm0sslpwcQcMR-L0NH82wNgLo4kWUtxQ5bMArdeE3L0PT7NFkhayrsj1xgnW24rZILL2MEdf1UZxB_ih3xo19uhojVi9VoXWZAMWGJXUlQxpp2UaciMOwihi7V09t7K-IjEZBP5ZJaid7BoiTdwV_q--322SRstIP-fYYyQs71DWuAV4qWXNbVpqQTc0TpNcKbrK6Q1gTE1j6tn7MhSwEsK58' }}
                  style={{ width: 36, height: 36 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Zerodha</Text>
                <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Sync Kite portfolio automatically</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={ON_SURFACE_VARIANT} />
            </TouchableOpacity>

            {/* Groww */}
            <TouchableOpacity style={styles.importCard}>
              <View style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrTjRwnH3ByjPbV0LBfAfjHvV0uLo_SX8unuxZksh1UywkWgupBU99yE7xMqRRCpRgy4Epi6toF6oLEbc6xdxmsCqzHM9Sy-2L4F4eUTG_-nc_W0U10qBvSYzmiw4ht5VvE32YCc2MQzWM73c_tLGkEnD09XRzjbOLEWQo9DqQh5XfHOYDK9Q1yW8y0rKfMwTVeRALxci8IrWpKgFKLyvUJrQPi0P_HdplHd0k_PbG29SaADZ_Jpm8cSMp4AUQl8EgI7EPqiz3vOe_' }}
                  style={{ width: 36, height: 36 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Groww</Text>
                <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Import mutual funds and stocks</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={ON_SURFACE_VARIANT} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Manual Entry Section - Bento Grid */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: ROYAL_NAVY, marginBottom: 12, fontFamily: 'System' }}>Manual Entry</Text>
          
          <View style={{ gap: 12 }}>
            {/* Real Estate (double column) */}
            <TouchableOpacity style={[styles.bentoCard, { flexDirection: 'row', alignItems: 'center', gap: 16 }]}>
              <View style={{ width: 72, height: 72, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF2X-inL03UWqg1J2BOpUcnHOENq-Nq67Sxla7FETYp5RGihEproeB8gGW60c-or01J9dKjsa519G5zOn-WouA1LRTloAfw2828NRuL4Fm6i-nj5yGXqh-F6UrTCcnCtRjLKQ1Ih_jl3vGB1YmBH2llBnVLwrMvy5hJH9tH13pTAk0c-GbT6PuAk1Sc5IzeTR1oFgH01b2XH1n535frkjAa0b_RGEvLjCOHa6qCIy01zd-veutgN1vkbZnOs9jRjmL6bmBAwheZQc3' }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Real Estate</Text>
                <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Property, Land, Commercial</Text>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              {/* Gold */}
              <TouchableOpacity style={[styles.bentoCardSquare, { flex: 1 }]}>
                <View style={{ width: 48, height: 48, overflow: 'hidden', marginBottom: 12 }}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKSinpyAAyYLRsDgi8EWGKrKUsc9Kpg9c8MuvkoGCnjP3-QtntAr5xgvKvcwNlWuoh5I2QH_hB8UGGhgV_cWKeOhQKNt3gN4JNwNrVa5C02i4gna_rFw9hO21gHAge0S1rPNtrwA6hleVpGO0E0XQSQTM7qhUYTKvhScupmbvGy1Rui-hDx1a0fhmDXheVs0-3Ik2D4qW1wJs6zqydA6PnclzSXUUpiiwbOTn3hJBwvJNyyqdHXpOXko2icu9hgQpY9KsMxaX_kMs0' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Gold</Text>
                <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Physical, Digital</Text>
              </TouchableOpacity>

              {/* Crypto */}
              <TouchableOpacity style={[styles.bentoCardSquare, { flex: 1 }]}>
                <View style={{ width: 48, height: 48, overflow: 'hidden', marginBottom: 12 }}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF2X-inL03UWqg1J2BOpUcnHOENq-Nq67Sxla7FETYp5RGihEproeB8gGW60c-or01J9dKjsa519G5zOn-WouA1LRTloAfw2828NRuL4Fm6i-nj5yGXqh-F6UrTCcnCtRjLKQ1Ih_jl3vGB1YmBH2llBnVLwrMvy5hJH9tH13pTAk0c-GbT6PuAk1Sc5IzeTR1oFgH01b2XH1n535frkjAa0b_RGEvLjCOHa6qCIy01zd-veutgN1vkbZnOs9jRjmL6bmBAwheZQc3' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Crypto</Text>
                <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Wallets, CEX</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              {/* Savings */}
              <TouchableOpacity style={[styles.bentoCardSquare, { flex: 1 }]}>
                <View style={{ width: 48, height: 48, overflow: 'hidden', marginBottom: 12 }}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKSinpyAAyYLRsDgi8EWGKrKUsc9Kpg9c8MuvkoGCnjP3-QtntAr5xgvKvcwNlWuoh5I2QH_hB8UGGhgV_cWKeOhQKNt3gN4JNwNrVa5C02i4gna_rFw9hO21gHAge0S1rPNtrwA6hleVpGO0E0XQSQTM7qhUYTKvhScupmbvGy1Rui-hDx1a0fhmDXheVs0-3Ik2D4qW1wJs6zqydA6PnclzSXUUpiiwbOTn3hJBwvJNyyqdHXpOXko2icu9hgQpY9KsMxaX_kMs0' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Savings</Text>
                <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Bank accounts</Text>
              </TouchableOpacity>

              {/* Alternative */}
              <TouchableOpacity style={[styles.bentoCardSquare, { flex: 1, justifyContent: 'space-between' }]}>
                <View style={{ backgroundColor: 'rgba(0,8,30,0.04)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <MaterialIcons name="pending" size={24} color={ROYAL_NAVY} />
                </View>
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Alternative</Text>
                  <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT, marginTop: 2, fontFamily: 'System' }}>Art, Watches</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Retirement Funds (double column) */}
            <TouchableOpacity style={[styles.bentoCard, { backgroundColor: ROYAL_NAVY, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '700', color: WHITE, fontFamily: 'System' }}>Retirement Funds</Text>
                <Text style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2, fontFamily: 'System' }}>EPF, PPF, NPS sync</Text>
              </View>
              <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="verified-user" size={22} color={CHAMPAGNE} />
              </View>
            </TouchableOpacity>

          </View>
        </View>

        {/* Premium Upgrade Banner */}
        <View style={{
          backgroundColor: ROYAL_NAVY,
          borderRadius: 24,
          padding: 24,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <View style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, backgroundColor: 'rgba(212,175,55,0.06)', borderRadius: 70 }} />
          <View style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(212,175,55,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, marginBottom: 12, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <MaterialIcons name="stars" size={14} color={CHAMPAGNE} />
            <Text style={{ fontSize: 9, fontWeight: '700', color: CHAMPAGNE, textTransform: 'uppercase', letterSpacing: 1 }}>Premium</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: '700', color: WHITE, marginBottom: 8, fontFamily: 'System' }}>Automated Multi-Broker Sync</Text>
          <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 20, marginBottom: 20, fontFamily: 'System' }}>
            Connect over 40+ Indian brokers and 10+ Global exchanges to track your net worth in real-time with zero manual entry.
          </Text>
          <TouchableOpacity style={{ backgroundColor: CHAMPAGNE, paddingVertical: 14, borderRadius: 12, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: ROYAL_NAVY, fontFamily: 'System' }}>Upgrade Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  importCard: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
    elevation: 2,
  },
  bentoCard: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
    elevation: 2,
  },
  bentoCardSquare: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
    elevation: 2,
  }
});
