import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface FinancialGoalsScreenProps {
  navigation?: any;
}

export default function FinancialGoalsScreen({ navigation }: FinancialGoalsScreenProps) {
  const { colors, typography } = useTheme();
  const styles = getStyles(colors, typography);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Top Header Bar */}
      <View style={{
        zIndex: 50,
        backgroundColor: 'rgba(242, 242, 247, 0.85)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: colors.outlineVariant }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfdoEJ5qbdeHhcoIiN541J2StzMTQnxqOKjcPMwR9b15pWy7ft63ntTvAG7iPuL4tsu8SOI6Df0lqvkUEbwF3tudlwKXnn5BcX760TcbRegEBFp_yPbKEpFQ31zx1N_ssTwb5088UUoLrqEITSFDGMsElIzNLeNar-gnSbJap6aHS-InPEE1imyDg-2bznaMCgbj03aKpwQO1omtvvC8VsMgoZEXYV-kJOivHdppYyAfxwvfACSmzifPxoxXn51bp9Bjai5qSYs8IU' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 22, color: colors.text, }}>Goals</Text>
        </View>
        <TouchableOpacity style={{ padding: 4 }}>
          <MaterialIcons name="notifications" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 110, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Global Status Card */}
        <View style={{
          backgroundColor: '#0a1f44',
          borderRadius: 24,
          padding: 20,
          marginBottom: 24,
          position: 'relative',
          overflow: 'hidden',
          shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10,
          elevation: 3,
        }}>
          {/* Background image overlay */}
          <View style={{ position: 'absolute', right: -20, top: -20, width: 140, height: 140, opacity: 0.15 }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLurKJfojgXBISasft5V2CeaaWl0BX0ed59SwAbiVCOSPtE5kMUxP4u3GLadNVrJbi7YFBtHgx5VjUkbxx3GkjSkIKxRo0Gn6cjIFxyOmNyFOztVVhvlY0RFsr5iPloklC9_slxPCrnquiyr6xLs_aP49gFFuIyfRU7522geqG1GlzZFAneNJynMqaC4_p_KGBwrpouGj7DJ4mZm-XEYHyD627vJEs1NNFANkUy4YAgSKG37zIXWgFQ038o' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Global Status</Text>
            <View style={{ backgroundColor: colors.primary, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 }}>
              <Text style={{ fontSize: 9, fontFamily: typography.primaryBold, color: colors.text, textTransform: 'uppercase' }}>Pro</Text>
            </View>
          </View>
          <Text style={{ fontSize: 22, color: '#fff', marginBottom: 6, }}>2 on track, 1 needs attention</Text>
          <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontFamily: typography.primary, lineHeight: 20 }}>
            You've reached 48% of your total target wealth across all active goals.
          </Text>
        </View>

        {/* Goals List */}
        <View style={{ gap: 16 }}>
          
          {/* Retirement Goal */}
          <View style={styles.goalCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', backgroundColor: 'rgba(0,17,58,0.06)' }}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLthSXhV1IgPcIPfCrHlLokTfqOtFxR0M4LHWRnqZvp8vqJ4vNm5goR78Rf9wKR0n1h4KMxQNSyHsXWSo6s0N22edWFsxwrQVWIcd8nChp2IpvJ8Q9o0kwWF-a4aGdbQvBiQCWkco-iMzsdO-iBWYe-DxM_nyQE1aJ-4h6W9e77tgUDvcxImFA9L-L7aFAh3uclgYjQs2GSVyVO7yGcutjeDJwpCZ5P-MmMQYYVlUWbKrKzo7-zFyoprF2pl' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: colors.text, }}>Retirement</Text>
                  <Text style={{ fontSize: 12, color: colors.outline, marginTop: 2, fontFamily: typography.primary }}>Target: 2045</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'rgba(52,199,89,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 99 }}>
                <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.success, textTransform: 'uppercase', letterSpacing: 0.5 }}>On Track</Text>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
                <Text style={{ fontSize: 20, fontFamily: typography.primaryBold, color: colors.text }}>
                  ₹3.2L <Text style={{ fontSize: 13, color: colors.outline, fontWeight: '400' }}>/ ₹5L</Text>
                </Text>
                <Text style={{ fontSize: 12, fontFamily: typography.primaryBold, color: colors.text }}>42%</Text>
              </View>
              <View style={{ height: 8, backgroundColor: colors.background, borderRadius: 4, overflow: 'hidden' }}>
                <View style={{ width: '42%', height: '100%', backgroundColor: colors.primaryContainer, borderRadius: 4 }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <MaterialIcons name="trending-up" size={16} color={colors.success} />
              <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: colors.success }}>Growth +12.4% this year</Text>
            </View>
          </View>

          {/* Emergency Fund Goal */}
          <View style={styles.goalCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', backgroundColor: 'rgba(0,17,58,0.06)' }}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_DsUyFVHa60FGxWR3pe6TRgVZilRz0kUXSp1HjOnJwsHpz4f4iRZW3SdSqJDCgSSj6-oTEAvJ4Il6IJQAFPCO_quGrLF1l7aPRF7suFRT7H3gMWxs4QUHpDjxdd0Kah-vYEKNN69k0almzeyCv4ZTpbZdPH1homt-afXJEJrg6zgoWuoq3V1O5BuOWRSjSJy9k-SI21ESoamEur9_jvBrG85Z1eC84tFtGwqUE9aX7TMriE0DI3Ar4GNqixty0GunqMT_G6uFiCr' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: colors.text, }}>Emergency Fund</Text>
                  <Text style={{ fontSize: 12, color: colors.outline, marginTop: 2, fontFamily: typography.primary }}>6 months of expenses</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'rgba(52,199,89,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 99 }}>
                <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.success, textTransform: 'uppercase', letterSpacing: 0.5 }}>On Track</Text>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
                <Text style={{ fontSize: 20, fontFamily: typography.primaryBold, color: colors.text }}>
                  ₹4.25L <Text style={{ fontSize: 13, color: colors.outline, fontWeight: '400' }}>/ ₹5L</Text>
                </Text>
                <Text style={{ fontSize: 12, fontFamily: typography.primaryBold, color: colors.text }}>85%</Text>
              </View>
              <View style={{ height: 8, backgroundColor: colors.background, borderRadius: 4, overflow: 'hidden' }}>
                <View style={{ width: '85%', height: '100%', backgroundColor: colors.primaryContainer, borderRadius: 4 }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <MaterialIcons name="check-circle" size={16} color={colors.outline} />
              <Text style={{ fontSize: 13, color: colors.outline, fontFamily: typography.primaryBold }}>Nearly fully funded</Text>
            </View>
          </View>

          {/* Child Education Goal (Behind) */}
          <View style={[styles.goalCard, { borderWidth: 1, borderColor: 'rgba(255,59,48,0.2)' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(0,17,58,0.06)', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name="school" size={26} color={colors.text} />
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: colors.text, }}>Child Education</Text>
                  <Text style={{ fontSize: 12, color: colors.outline, marginTop: 2, fontFamily: typography.primary }}>Target: 2038</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'rgba(255,59,48,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 99 }}>
                <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.danger, textTransform: 'uppercase', letterSpacing: 0.5 }}>Behind</Text>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
                <Text style={{ fontSize: 20, fontFamily: typography.primaryBold, color: colors.text }}>
                  ₹2.7L <Text style={{ fontSize: 13, color: colors.outline, fontWeight: '400' }}>/ ₹15L</Text>
                </Text>
                <Text style={{ fontSize: 12, fontFamily: typography.primaryBold, color: colors.text }}>18%</Text>
              </View>
              <View style={{ height: 8, backgroundColor: colors.background, borderRadius: 4, overflow: 'hidden' }}>
                <View style={{ width: '18%', height: '100%', backgroundColor: colors.danger, borderRadius: 4 }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <MaterialIcons name="warning" size={16} color={colors.danger} />
              <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: colors.danger }}>₹15,400 monthly gap detected</Text>
            </View>
          </View>

          {/* Add Goal Placeholder */}
          <TouchableOpacity 
            onPress={() => navigation?.navigate('CreateGoal')}
            style={{
            height: 96,
            borderWidth: 2,
            borderStyle: 'dashed',
            borderColor: colors.outlineVariant,
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            backgroundColor: 'transparent',
            marginTop: 8,
          }}>
            <MaterialIcons name="add-circle" size={24} color={colors.outline} />
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1 }}>Create New Goal</Text>
          </TouchableOpacity>

        </View>

        {/* Inflation Upsell Mini Card */}
        <View style={{
          backgroundColor: colors.surfaceLowest,
          borderRadius: 24,
          padding: 20,
          marginTop: 24,
          borderWidth: 1, borderColor: 'rgba(212,175,55,0.2)',
          shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.02, shadowRadius: 8,
          elevation: 1,
        }}>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MaterialIcons name="star" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, color: colors.text, }}>Inflation-Adjusted Goals</Text>
              <Text style={{ fontSize: 14, color: colors.outline, marginTop: 4, lineHeight: 18, fontFamily: typography.primary }}>
                Pro users can track real progress by factoring in 6% annual inflation automatically.
              </Text>
              <TouchableOpacity style={{ alignSelf: 'flex-start', backgroundColor: colors.primaryContainer, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, marginTop: 12 }}>
                <Text style={{ fontSize: 11, color: colors.surfaceLowest, textTransform: 'uppercase', letterSpacing: 0.5, }}>Upgrade to Pro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const getStyles = (colors: any, typography: any) => StyleSheet.create({
  goalCard: {
    backgroundColor: colors.surfaceLowest,
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10,
    elevation: 2,
  }
});
