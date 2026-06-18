import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface ForgotPasswordScreenProps {
  navigation?: any;
}

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const { colors, typography } = useTheme();

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
    <View style={{ flex: 1, backgroundColor: colors.background, overflow: 'hidden' }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Top Header Bar */}
      <View style={{
        zIndex: 50,
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
          <MaterialIcons name="arrow-back-ios" size={16} color={colors.text} />
          <Text style={{ fontSize: 17, color: colors.text, fontFamily: typography.primary }}>Back</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingBottom: 40 }}
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
                <MaterialIcons name="lock-reset" size={40} color={colors.text} />
              </View>
              <Text style={{ fontSize: 32, color: colors.text, letterSpacing: -0.8, marginBottom: 8, }}>Reset Password</Text>
              <Text style={{ fontSize: 16, color: colors.textSecondary, textAlign: 'center', maxWidth: 280, fontFamily: typography.primary, lineHeight: 22 }}>
                Enter your email to receive a recovery link
              </Text>
            </View>

            {/* Form Card */}
            <View style={{
              width: '100%',
              backgroundColor: colors.background_CONTAINER_LOWEST,
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
                <Text style={{ fontSize: 11, color: colors.text, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, marginLeft: 2, }}>
                  Email Address
                </Text>
                <View style={{
                  flexDirection: 'row', alignItems: 'center',
                  borderBottomWidth: 1, borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}>
                  <TextInput
                    style={{ flex: 1, fontSize: 17, color: colors.text, paddingVertical: 8, fontFamily: typography.primary }}
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
                  backgroundColor: colors.primaryContainer,
                  borderRadius: 14,
                  height: 56,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: colors.primaryContainer,
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                  elevation: 4,
                }}
              >
                <Text style={{ fontSize: 17, color: '#fff', }}>Send Reset Link</Text>
              </TouchableOpacity>

              {/* Back to Login Link */}
              <TouchableOpacity
                onPress={() => navigation?.navigate('Login')}
                style={{ marginTop: 24, alignItems: 'center' }}
              >
                <Text style={{ fontSize: 15, color: colors.text, textDecorationLine: 'underline', textDecorationColor: colors.primary, }}>
                  Back to Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* Decorative Accents */}
            <View style={{ flexDirection: 'row', gap: 6, marginTop: 24, opacity: 0.3 }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary }} />
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary }} />
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary }} />
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
          <MaterialIcons name="verified-user" size={14} color={colors.outline} />
          <Text style={{ fontSize: 11, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1, }}>
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
            backgroundColor: colors.background_CONTAINER_LOWEST,
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
              <MaterialIcons name="mark-email-read" size={40} color={colors.success} />
            </View>
            <Text style={{ fontSize: 22, color: colors.text, marginBottom: 8, }}>Link Sent</Text>
            <Text style={{ fontSize: 14, color: colors.textSecondary, textAlign: 'center', marginBottom: 24, lineHeight: 20, fontFamily: typography.primary }}>
              Please check your inbox. We've sent a secure password recovery link to your registered email.
            </Text>
            <TouchableOpacity
              onPress={handleModalClose}
              style={{
                width: '100%',
                backgroundColor: colors.primaryContainer,
                borderRadius: 12,
                height: 48,
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, color: '#fff', }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
