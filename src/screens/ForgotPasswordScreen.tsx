import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const CHAMPAGNE = '#e9c176';
const SURFACE = '#fcf8fb';
const SURFACE_GRAY = '#F2F2F7';
const SURFACE_CONTAINER_LOWEST = '#ffffff';
const ON_SURFACE = '#1b1b1d';
const ON_SURFACE_VARIANT = '#44464e';
const OUTLINE = '#75777f';
const OUTLINE_VARIANT = '#c5c6cf';
const GREEN = '#34C759';

interface ForgotPasswordScreenProps {
  navigation?: any;
}

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleReset = () => {
    // Show confirmation modal
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation?.navigate('Login');
  };

  return (
    <View style={{ flex: 1, backgroundColor: SURFACE, overflow: 'hidden' }}>
      <StatusBar barStyle="dark-content" backgroundColor={SURFACE} />

      {/* Top Header Bar */}
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(252, 248, 251, 0.85)',
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 16, height: 64,
        borderBottomWidth: 0.5, borderBottomColor: 'rgba(197,198,207,0.3)',
      }}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
          activeOpacity={0.7}
        >
          <MaterialIcons name="arrow-back-ios" size={16} color={NAVY} />
          <Text style={{ fontSize: 17, color: NAVY, fontWeight: '600', fontFamily: 'System' }}>Back</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingTop: 80, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: '100%', maxWidth: 400, alignItems: 'center' }}>
            
            {/* Hero Visual */}
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
              <View style={{
                width: 80, height: 80, borderRadius: 40,
                backgroundColor: 'rgba(254, 222, 165, 0.2)',
                alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
                shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 6,
                elevation: 1,
              }}>
                <MaterialIcons name="lock-reset" size={40} color={NAVY} />
              </View>
              <Text style={{ fontSize: 32, fontWeight: '700', color: NAVY, letterSpacing: -0.8, marginBottom: 8, fontFamily: 'System' }}>Reset Password</Text>
              <Text style={{ fontSize: 16, color: ON_SURFACE_VARIANT, textAlign: 'center', maxWidth: 280, fontFamily: 'System', lineHeight: 22 }}>
                Enter your email to receive a recovery link
              </Text>
            </View>

            {/* Form Card */}
            <View style={{
              width: '100%',
              backgroundColor: SURFACE_CONTAINER_LOWEST,
              borderRadius: 20,
              padding: 24,
              shadowColor: '#00113a',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.04,
              shadowRadius: 16,
              elevation: 4,
              borderWidth: 1, borderColor: 'rgba(0,17,58,0.02)',
            }}>
              {/* Email Input */}
              <View style={{ marginBottom: 24 }}>
                <Text style={{ fontSize: 11, fontWeight: '600', color: NAVY, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, marginLeft: 2, fontFamily: 'System' }}>
                  Email Address
                </Text>
                <View style={{
                  flexDirection: 'row', alignItems: 'center',
                  borderBottomWidth: 1, borderBottomColor: OUTLINE_VARIANT,
                  paddingVertical: 4,
                }}>
                  <TextInput
                    style={{ flex: 1, fontSize: 17, color: ON_SURFACE, paddingVertical: 8, fontFamily: 'System' }}
                    placeholder="e.g. elite.investor@finboom.com"
                    placeholderTextColor="rgba(117,119,127,0.4)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <MaterialIcons name="mail-outline" size={20} color="rgba(117,119,127,0.4)" style={{ paddingHorizontal: 4 }} />
                </View>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                onPress={handleReset}
                style={{
                  backgroundColor: NAVY,
                  borderRadius: 14,
                  height: 56,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: NAVY,
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                  elevation: 4,
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#fff', fontFamily: 'System' }}>Send Reset Link</Text>
              </TouchableOpacity>

              {/* Back to Login Link */}
              <TouchableOpacity
                onPress={() => navigation?.navigate('Login')}
                style={{ marginTop: 24, alignItems: 'center' }}
              >
                <Text style={{ fontSize: 15, fontWeight: '600', color: NAVY, textDecorationLine: 'underline', textDecorationColor: CHAMPAGNE, fontFamily: 'System' }}>
                  Back to Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* Decorative Accents */}
            <View style={{ flexDirection: 'row', gap: 6, marginTop: 24, opacity: 0.3 }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: CHAMPAGNE }} />
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: CHAMPAGNE }} />
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: CHAMPAGNE }} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer Security Badge */}
      <View style={{
        position: 'absolute', bottom: 32, left: 0, right: 0,
        alignItems: 'center', pointerEvents: 'none'
      }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', gap: 6,
          backgroundColor: 'rgba(234, 231, 234, 0.8)',
          paddingHorizontal: 16, paddingVertical: 8,
          borderRadius: 20,
          borderWidth: 1, borderColor: 'rgba(197,198,207,0.2)',
        }}>
          <MaterialIcons name="verified-user" size={14} color={OUTLINE} />
          <Text style={{ fontSize: 11, fontWeight: '600', color: OUTLINE, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'System' }}>
            Secured by Finboom Systems
          </Text>
        </View>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,8,30,0.35)',
          alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }}>
          <View style={{
            backgroundColor: SURFACE_CONTAINER_LOWEST,
            borderRadius: 20,
            padding: 24,
            width: '100%',
            maxWidth: 340,
            alignItems: 'center',
            shadowColor: '#000', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 24,
            elevation: 10,
          }}>
            <View style={{
              width: 80, height: 80, borderRadius: 40,
              backgroundColor: 'rgba(52,199,89,0.1)',
              alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
            }}>
              <MaterialIcons name="mark-email-read" size={40} color={GREEN} />
            </View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: NAVY, marginBottom: 8, fontFamily: 'System' }}>Link Sent</Text>
            <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT, textAlign: 'center', marginBottom: 24, lineHeight: 20, fontFamily: 'System' }}>
              Please check your inbox. We've sent a secure password recovery link to your registered email.
            </Text>
            <TouchableOpacity
              onPress={handleModalClose}
              style={{
                width: '100%',
                backgroundColor: NAVY,
                borderRadius: 12,
                height: 48,
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#fff', fontFamily: 'System' }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
