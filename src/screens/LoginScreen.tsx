import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


export default function LoginScreen({ navigation }: { navigation?: any }) {
  const { colors, typography } = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: colors.primaryContainer, overflow: 'hidden' }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryContainer} />

      {/* Atmospheric background blobs */}
      <View style={{
        position: 'absolute', top: -60, left: -60,
        width: 250, height: 250,
        backgroundColor: '#002366',
        borderRadius: 125,
        opacity: 0.5,
      }} />
      <View style={{
        position: 'absolute', bottom: -60, right: -60,
        width: 200, height: 200,
        backgroundColor: '#362500',
        borderRadius: 100,
        opacity: 0.3,
      }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 40 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: '100%', maxWidth: 400, alignItems: 'center' }}>

            {/* Logo */}
            <View style={{ marginBottom: 24 }}>
              <View style={{
                width: 96, height: 96, borderRadius: 22,
                backgroundColor: '#002366',
                alignItems: 'center', justifyContent: 'center',
                shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 20,
                elevation: 16,
                borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)',
              }}>
                <Image source={require('../../assets/android-icon-foreground.png')} style={{ width: 56, height: 56 }} resizeMode="contain" />
              </View>
            </View>

            {/* Headline */}
            <View style={{ alignItems: 'center', marginBottom: 36 }}>
              <Text style={{ fontSize: 32, color: '#fff', letterSpacing: -0.5, marginBottom: 6, }}>Welcome Back</Text>
              <Text style={{ fontSize: 16, color: 'rgba(219,225,255,0.65)', textAlign: 'center', fontFamily: typography.primary }}>
                Enter your credentials to manage your wealth
              </Text>
            </View>

            {/* Form */}
            <View style={{ width: '100%', gap: 14 }}>

              {/* Email */}
              <View>
                <Text style={{ fontSize: 11, color: `${colors.primary}CC`, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, marginLeft: 4, }}>
                  Email Address
                </Text>
                <View style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)',
                  flexDirection: 'row', alignItems: 'center',
                  paddingHorizontal: 16, height: 56,
                }}>
                  <MaterialIcons name="mail-outline" size={20} color="rgba(219,225,255,0.6)" style={{ marginRight: 12 }} />
                  <TextInput
                    style={{ flex: 1, fontSize: 16, color: '#fff', fontWeight: '400', fontFamily: typography.primary }}
                    placeholder="name@premium.com"
                    placeholderTextColor="rgba(219,225,255,0.28)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>

              {/* Password */}
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6, paddingHorizontal: 4 }}>
                  <Text style={{ fontSize: 11, color: `${colors.primary}CC`, textTransform: 'uppercase', letterSpacing: 1.5, }}>
                    Password
                  </Text>
                  <TouchableOpacity onPress={() => navigation?.navigate('ForgotPassword')}>
                    <Text style={{ fontSize: 13, color: colors.primary, fontFamily: typography.primary }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)',
                  flexDirection: 'row', alignItems: 'center',
                  paddingHorizontal: 16, height: 56,
                }}>
                  <MaterialIcons name="lock-outline" size={20} color="rgba(219,225,255,0.6)" style={{ marginRight: 12 }} />
                  <TextInput
                    style={{ flex: 1, fontSize: 16, color: '#fff', fontFamily: typography.primary }}
                    placeholder="••••••••"
                    placeholderTextColor="rgba(219,225,255,0.28)"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={20} color="rgba(219,225,255,0.6)" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign In Button */}
              <TouchableOpacity
                onPress={() => navigation?.replace('TabNavigator')}
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 14,
                  height: 56,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginTop: 16,
                  shadowColor: '#362500',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.35,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <Text style={{ fontSize: 18, color: '#261900', }}>Sign In</Text>
                <MaterialIcons name="arrow-forward" size={20} color="#261900" />
              </TouchableOpacity>
            </View>

            {/* Sign Up link */}
            <View style={{ marginTop: 36, flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, color: 'rgba(219,225,255,0.55)', fontFamily: typography.primary }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
                <Text style={{ fontSize: 15, color: colors.primary, }}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Biometric hint */}
            <TouchableOpacity
              onPress={() => navigation?.replace('TabNavigator')}
              style={{ marginTop: 48, alignItems: 'center', opacity: 0.35 }}
            >
              <MaterialIcons name="fingerprint" size={44} color="#fff" style={{ marginBottom: 6 }} />
              <Text style={{ fontSize: 10, color: '#fff', textTransform: 'uppercase', letterSpacing: 2, }}>
                Biometric Secure Access
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
