import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const WHITE = '#ffffff';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const CHAMPAGNE = '#ffdea5';
const GOLD_GRADIENT_START = '#FFD700';
const GOLD_GRADIENT_END = '#B8860B';

interface PremiumSubscriptionScreenProps {
  navigation?: any;
}

export default function PremiumSubscriptionScreen({ navigation }: PremiumSubscriptionScreenProps) {
  const [couponCode, setCouponCode] = useState('');
  const [applied, setApplied] = useState(false);

  const handleSelectPackage = (tier: string) => {
    // Simulated subscription completion
    navigation?.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Navigation Bar */}
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
            <MaterialIcons name="close" size={24} color={ON_SURFACE_VARIANT} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>FIRE Navigator</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: CHAMPAGNE, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }}>
          <MaterialIcons name="workspace-premium" size={16} color="#261900" />
          <Text style={{ fontSize: 10, fontWeight: '700', color: '#261900' }}>GO PRO</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        
        {/* Intro Section */}
        <View style={{ alignItems: 'center', marginBottom: 28 }}>
          <Text style={{ fontSize: 26, fontWeight: '800', color: NAVY, textAlign: 'center', marginBottom: 8, fontFamily: 'System', letterSpacing: -0.5 }}>
            Accelerate Your Independence
          </Text>
          <Text style={{ fontSize: 15, color: ON_SURFACE_VARIANT, textAlign: 'center', lineHeight: 22, maxWidth: 320 }}>
            Join 15,000+ investors using FIRE Navigator Pro to track net worth, automate cash flow, and forecast early retirement with precision.
          </Text>
        </View>

        {/* Pricing Tiers List (stacked for mobile layout stability) */}
        <View style={{ gap: 16, marginBottom: 28 }}>
          {/* Monthly */}
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 20,
            padding: 20,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.05)',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY }}>Monthly</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 8, marginBottom: 8 }}>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>$</Text>
              <Text style={{ fontSize: 28, fontWeight: '800', color: NAVY }}>19</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>/mo</Text>
            </View>
            <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginBottom: 16 }}>Flexibility for evolving portfolios</Text>
            <TouchableOpacity
              onPress={() => handleSelectPackage('Monthly')}
              style={{
                width: '100%',
                paddingVertical: 12,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: NAVY,
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Select Monthly</Text>
            </TouchableOpacity>
          </View>

          {/* Annual - Popular */}
          <View style={{
            backgroundColor: WHITE,
            borderRadius: 20,
            padding: 20,
            borderWidth: 2,
            borderColor: '#ad8a46',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            shadowColor: '#ad8a46',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 4
          }}>
            <View style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: '#ad8a46',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderBottomLeftRadius: 10
            }}>
              <Text style={{ fontSize: 9, fontWeight: '800', color: '#fff', letterSpacing: 1 }}>POPULAR</Text>
            </View>

            <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, marginTop: 4 }}>Annual</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 8, marginBottom: 4 }}>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>$</Text>
              <Text style={{ fontSize: 28, fontWeight: '800', color: NAVY }}>149</Text>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>/yr</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(5,150,105,0.1)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12, marginBottom: 8 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: '#059669' }}>SAVE 37%</Text>
            </View>

            <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginBottom: 16 }}>Optimized for long-term FIRE goals</Text>
            <TouchableOpacity
              onPress={() => handleSelectPackage('Annual')}
              style={{
                width: '100%',
                paddingVertical: 12,
                borderRadius: 10,
                backgroundColor: NAVY,
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '700', color: WHITE }}>Get Pro Now</Text>
            </TouchableOpacity>
          </View>

          {/* Lifetime */}
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 20,
            padding: 20,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.05)',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY }}>Lifetime</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 8, marginBottom: 8 }}>
              <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>$</Text>
              <Text style={{ fontSize: 28, fontWeight: '800', color: NAVY }}>499</Text>
            </View>
            <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, marginBottom: 16 }}>One payment. Permanent access.</Text>
            <TouchableOpacity
              onPress={() => handleSelectPackage('Lifetime')}
              style={{
                width: '100%',
                paddingVertical: 12,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: NAVY,
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Claim Lifetime</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feature Highlight Container */}
        <View style={{
          backgroundColor: '#f3f4f5',
          borderRadius: 20,
          padding: 20,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.05)',
          gap: 16,
          marginBottom: 28
        }}>
          <View style={{ height: 160, width: '100%', borderRadius: 12, overflow: 'hidden' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPHZBr56EkQPKgXBLEMRKv2w7WXu61WtjOKg9Ybg42kCi2qUMGtQSzOQwFlDQ9lxAyD6GcBLAavwlgDoLp7YrwcIOD_fUHGCCmmV7pQ-MDljxRVYVm_xEsfM6gDjqySQ48A733bD8xiOMZsGKjDpSAM0712Uqd8nE1ALBwHcotJyIofAzG3Aom8s9DWAcDUWQhzrccEew0U5hHhvOLU6OHwo0spD-wWRzpQ4m1YLXyciIoHtH9Sv0fHFGpdcg4k77BBv9CUNsP548S' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>

          <View>
            <View style={{ alignSelf: 'flex-start', backgroundColor: '#ffdea5', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12, marginBottom: 8, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <MaterialIcons name="notifications-active" size={12} color="#261900" />
              <Text style={{ fontSize: 9, fontWeight: '700', color: '#261900', textTransform: 'uppercase' }}>Pro Exclusive</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, marginBottom: 6 }}>Smart Alerts & Real-time Monitoring</Text>
            <Text style={{ fontSize: 13, color: ON_SURFACE_VARIANT, lineHeight: 20 }}>
              Never miss a market shift. Pro members receive glassmorphic pulse notifications for portfolio rebalancing opportunities and net worth milestones.
            </Text>
          </View>
        </View>

        {/* Feature Comparison Table */}
        <View style={{
          backgroundColor: WHITE,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.05)',
          overflow: 'hidden',
          marginBottom: 28
        }}>
          {/* Table Header */}
          <View style={{ flexDirection: 'row', backgroundColor: '#f3f4f5', padding: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.08)' }}>
            <Text style={{ flex: 2, fontSize: 13, fontWeight: '700', color: NAVY }}>Features</Text>
            <Text style={{ flex: 1, fontSize: 12, fontWeight: '600', color: ON_SURFACE_VARIANT, textAlign: 'center' }}>Free</Text>
            <Text style={{ flex: 1, fontSize: 13, fontWeight: '700', color: '#ad8a46', textAlign: 'center' }}>Pro</Text>
          </View>

          {/* Rows */}
          {[
            { name: 'Data Import', sub: 'Manual entry and sync', free: 'Manual Only', pro: 'CSV & Auto-Sync' },
            { name: 'Goal Projections', sub: 'Monte Carlo simulation', free: 'close', pro: 'check-circle' },
            { name: 'Portfolio Rebalancing', sub: 'Smart asset allocation', free: 'close', pro: 'check-circle' },
            { name: 'Custom Reports', sub: 'PDF/Excel exports', free: 'Limited', pro: 'Unlimited' }
          ].map(row => (
            <View key={row.name} style={{ flexDirection: 'row', padding: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.05)', alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 13, fontWeight: '700', color: NAVY }}>{row.name}</Text>
                <Text style={{ fontSize: 11, color: ON_SURFACE_VARIANT }}>{row.sub}</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                {row.free === 'close' ? (
                  <MaterialIcons name="close" size={18} color={OUTLINE} />
                ) : (
                  <Text style={{ fontSize: 12, color: ON_SURFACE_VARIANT }}>{row.free}</Text>
                )}
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                {row.pro === 'check-circle' ? (
                  <MaterialIcons name="check-circle" size={18} color={NAVY} />
                ) : (
                  <Text style={{ fontSize: 12, color: NAVY, fontWeight: '700' }}>{row.pro}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Discount Coupon Code Box */}
        <View style={{
          backgroundColor: '#002366',
          borderRadius: 20,
          padding: 20,
          gap: 12,
          marginBottom: 36
        }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: WHITE, marginBottom: 2 }}>Have a discount code?</Text>
            <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Apply your coupon here to redeem special offers.</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.2)',
                borderRadius: 10,
                paddingHorizontal: 12,
                color: WHITE,
                fontSize: 14
              }}
              placeholder="GOLDFIRE20"
              placeholderTextColor="rgba(255,255,255,0.4)"
              value={couponCode}
              onChangeText={setCouponCode}
            />
            <TouchableOpacity
              onPress={() => setApplied(true)}
              style={{
                backgroundColor: CHAMPAGNE,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 10,
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: '700', color: '#261900' }}>
                {applied ? 'Applied' : 'Apply'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Restore purchase button & terms disclaimer */}
        <View style={{ alignItems: 'center', gap: 12 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: '700', color: NAVY, textTransform: 'uppercase', letterSpacing: 1 }}>Restore Purchase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 10, color: ON_SURFACE_VARIANT, textAlign: 'center', lineHeight: 15 }}>
            Subscriptions will automatically renew unless canceled within 24-hours before the end of the current period. You can cancel anytime with your account settings. By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>

        {/* Partners grayscale grid */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 16, marginTop: 40, opacity: 0.5 }}>
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCVaqmdM-l0ihKBG0shNwVbGMaZoyHV5SLPLEVQi_SbeCsvZn0jD4ITQEwadiM2Sah10NQVJzOyacXBnTa8VESeJz_LM46VpLKXbfHwa1EVAcHQ39spZ8p0vwrH5IuDRJSY3_v8HOOeEzXR-zOhBWsfM6LI-b6zSQnIglrACBkPNQuApnWLZjyHYOX2lTnvCgJiyCTOFMgxWr-X2GfSD1DFxNyn60yalM8FDJr-LQBkhYU6fM5EvIqmqc0WpRJK-8hhi45DcjbTBapn',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCt59LLir6Csri3WL1p6ilouaZsBdk3aLuJuwGFH9EDIw8WkVaFId1lQ3pPPfwZ7LkQ2gZFfhpzT_QsmKubvuwqqn8ZSxImQ0vC7Hm6DAKDBtuM78fDPBu6GMrST6F0ic4OEU9SCzCvcvTLTFgcdNf59AMxNcPs52OD2fVZPpKhqEpj8ch84EK1Q3c62uOYeOhkj4ge5pwOXsZEujwuSxKqJRFEe61hXQ5CEOlwV2VQbpRwTXbDbWXtHyUkzWnRnDwAj0dT1HUfkrVF',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD6AhuPp_ioDevMrdp2HC0guINGU3mJpX66zeNHIM5GkGvaMMGpPkgOTDBJwYeBaxKkManVhvz1CbKgllD_YXQTiJXU1gypgtVM_iqdbBOu4KDsXrIU-mS1wTKa1rwFenPGx19YWrggowcWFF9pijp8NKbZI9Ia6q1ORshsZSPzDq6Z9GSrUV6uI_imF0a_rpthpkW2DS3NPk1DcYRRZDGVO-w3t4QIBzmebytK6ZFyvF15552ywRNYCgoFrLrspfIDhLZPbTSqmfdY',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuASsmsbgd3HSUjwyrdfnqTrCYqUO4UwJ71lHLpF1dQbmy5Gs-857vW_c3NWuvKTyKGlXlURwSiomA2siCTDIBrkqmLyH30tI3etKn4A6iPG_FLoVftUVACo8kNqCPCcs9xu1w0gboW2G7stifWWmpfKKZ1bJtZHZ-5DyRR4iLiPzVC2sNExvrsQfZuJCOHXcX-SNCtHLHoYQdcPGX1YLhksD5_Er2DOhIp9nMxvCOYxOFgnoDWVO41kz_1Ejh7rYJSdVUAalEl_FL6m'
          ].map((url, idx) => (
            <Image
              key={idx}
              source={{ uri: url }}
              style={{ width: 80, height: 28 }}
              resizeMode="contain"
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
