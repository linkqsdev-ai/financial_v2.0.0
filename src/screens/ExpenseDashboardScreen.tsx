import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const DARK_SLATE = '#0F172A';
const CHAMPAGNE = '#e9c176';
const GOLD = '#D4AF37';
const GREEN = '#059669';
const RED = '#DC2626';
const OUTLINE = '#757682';

interface ExpenseDashboardScreenProps {
  navigation?: any;
}

export default function ExpenseDashboardScreen({ navigation }: ExpenseDashboardScreenProps) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Header */}
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 64,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.06)',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={{ padding: 4, marginRight: 2 }} activeOpacity={0.7}>
            <MaterialIcons name="arrow-back" size={24} color={NAVY} />
          </TouchableOpacity>
          <View style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden', borderWidth: 2, borderColor: 'rgba(0,17,58,0.1)' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_LrnZymuh3gyiOByhx4NVJseGDn4alM2ExhtXiN71paZAlyuOnjOrRns_PJl7jWO8C2paj9Th4aedXU0gLZwNQB9fxfTrcdzF_YNSK4DSHvPgwvSRihvFoSLU8A2oZ9FzmyVd7OdMyhDOAeb_jWimj11r79MGChd1qw47_SoSzh4BigWc2xUanLGudWTa9_MS55WcLr_NR6DAUVkOa0EUkWTOq3nr8GV-C442V96tf-o5gCK9q7bkQzQWtUQDAXmc-0FGkuzRxjO5' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Good Morning, Alex</Text>
        </View>
        
        <TouchableOpacity activeOpacity={0.7} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="notifications" size={24} color={NAVY} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 96 }} showsVerticalScrollIndicator={false}>
        {/* Total Balance Hero Card */}
        <View style={{
          backgroundColor: DARK_SLATE,
          borderRadius: 24,
          padding: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 20,
          elevation: 10,
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 24
        }}>
          <View style={{ position: 'absolute', top: -20, right: -20, opacity: 0.08 }}>
            <MaterialIcons name="account-balance-wallet" size={160} color="#fff" />
          </View>

          <View style={{ position: 'relative', zIndex: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, fontFamily: 'System' }}>Total Balance</Text>
            <Text style={{ fontSize: 32, fontWeight: '800', color: '#ffffff', marginBottom: 24, fontFamily: 'System' }}>$12,450.00</Text>
            
            <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <MaterialIcons name="arrow-upward" size={14} color={GREEN} />
                  <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontWeight: '600' }}>Income</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff', fontFamily: 'System' }}>$8,420.50</Text>
              </View>

              <View style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginHorizontal: 16 }} />

              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontWeight: '600' }}>Expense</Text>
                  <MaterialIcons name="arrow-downward" size={14} color={RED} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff', fontFamily: 'System' }}>$2,145.20</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Expense Breakdown Card */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.3)',
          borderRadius: 24,
          padding: 20,
          shadowColor: '#00113a',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.02,
          shadowRadius: 12,
          elevation: 2,
          marginBottom: 24
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Breakdown</Text>
            <MaterialIcons name="pie-chart" size={20} color={OUTLINE} />
          </View>

          {/* Simulated Chart Image */}
          <View style={{ height: 180, width: '100%', borderRadius: 16, overflow: 'hidden', position: 'relative', marginBottom: 20 }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJGWcX_jlDlLGF7h1-dYwbc7IqQe86iecF_dKk4Y8V2ePf3Pdd-u3_9iSBdL9-Mesad3OW1UG1HGNYZOmIr_WThej_q0MR9mkKSll9eC_VqDXcbDBGBD9mp2i5q9GUv6Zk0ux5p43pvnGtoxcJNBR1jqZS2tTU8BOsP2qcrbpmmvMXMypJG2C5H-ga0jrTyP8wT6Xt0LcofaVL3TU_rXBoBysG9e5KxzUqsxmYy1Y1S2Y1fSXVmuZrtdlm59M3NPyl-VGm6iJtwuuu' }}
              style={{ width: '100%', height: '100%', opacity: 0.9 }}
              resizeMode="cover"
            />
            <View style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,17,58,0.2)',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 11, fontWeight: '600', color: '#ffffff', textTransform: 'uppercase', letterSpacing: 2 }}>August</Text>
              <Text style={{ fontSize: 24, fontWeight: '800', color: '#ffffff', marginTop: 4 }}>$2,145</Text>
            </View>
          </View>

          {/* Horizontal scroll of category elements */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: NAVY }} />
              <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Food</Text>
                <Text style={{ fontSize: 11, color: OUTLINE }}>$840.00</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: CHAMPAGNE }} />
              <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Transport</Text>
                <Text style={{ fontSize: 11, color: OUTLINE }}>$420.00</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#685d4a' }} />
              <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Rent</Text>
                <Text style={{ fontSize: 11, color: OUTLINE }}>$1,200.00</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: GOLD }} />
              <View>
                <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>Shopping</Text>
                <Text style={{ fontSize: 11, color: OUTLINE }}>$315.00</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Recent Activity</Text>
            <TouchableOpacity onPress={() => navigation?.navigate('ActivityList')}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: NAVY }}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 12 }}>
            {/* Apple Store */}
            <View style={{ backgroundColor: '#f3f4f5', borderRadius: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(220,38,38,0.1)', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name="shopping-bag" size={22} color={RED} />
                </View>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: NAVY }}>Apple Store</Text>
                  <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2 }}>Shopping • Today</Text>
                </View>
              </View>
              <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>-$1,299.00</Text>
            </View>

            {/* Salary Credit */}
            <View style={{ backgroundColor: '#f3f4f5', borderRadius: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(5,150,105,0.1)', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name="payments" size={22} color={GREEN} />
                </View>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: NAVY }}>Salary Credit</Text>
                  <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2 }}>Income • Yesterday</Text>
                </View>
              </View>
              <Text style={{ fontSize: 16, fontWeight: '700', color: GREEN }}>+$4,500.00</Text>
            </View>

            {/* Nobu Sushi */}
            <View style={{ backgroundColor: '#f3f4f5', borderRadius: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(220,38,38,0.1)', alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name="restaurant" size={22} color={RED} />
                </View>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: NAVY }}>Nobu Sushi</Text>
                  <Text style={{ fontSize: 12, color: OUTLINE, marginTop: 2 }}>Food • 2 days ago</Text>
                </View>
              </View>
              <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>-$240.50</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        onPress={() => navigation?.navigate('AddTransaction')}
        style={{
          position: 'absolute',
          bottom: 96,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: CHAMPAGNE,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: GOLD,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 6,
          zIndex: 40
        }}
        activeOpacity={0.8}
      >
        <MaterialIcons name="add" size={28} color={NAVY} style={{ fontWeight: 'bold' }} />
      </TouchableOpacity>
    </View>
  );
}
