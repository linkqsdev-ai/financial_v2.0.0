import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


interface SignUpScreenProps {
  navigation?: any;
}

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { colors, typography } = useTheme();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignUp = () => {
    // Show simulated success overlay
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigation?.replace('TabNavigator');
    }, 1500);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, overflow: 'hidden' }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Atmospheric background blur elements */}
      <View style={{
        position: 'absolute', top: 120, right: -80,
        width: 256, height: 256,
        backgroundColor: 'rgba(254, 214, 91, 0.1)',
        borderRadius: 128,
      }} />
      <View style={{
        position: 'absolute', bottom: 120, left: -80,
        width: 320, height: 320,
        backgroundColor: 'rgba(10, 31, 68, 0.05)',
        borderRadius: 160,
      }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Top Header Row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16, height: 56 }}>
            <TouchableOpacity 
              onPress={() => navigation?.goBack()}
              style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.02)' }}
            >
              <MaterialIcons name="arrow-back-ios-new" size={18} color={colors.text} style={{ marginRight: 2 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, color: colors.text, letterSpacing: -0.3, }}>Finboom</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Hero Content */}
          <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20, marginTop: 16 }}>
            <Text style={{ fontSize: 32, color: colors.text, letterSpacing: -0.8, marginBottom: 8, }}>Create Account</Text>
            <Text style={{ fontSize: 16, color: colors.textSecondary, fontFamily: typography.primary }}>
              Join <Text style={{ color: colors.text, fontFamily: typography.primaryBold }}>10,000+ users</Text> tracking their path to FIRE.
            </Text>
          </View>

          {/* Form */}
          <View style={{ paddingHorizontal: 20, gap: 20 }}>
            {/* Full Name */}
            <View>
              <Text style={{ fontSize: 11, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4, marginLeft: 2, }}>
                Full Name
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 10,
                  fontSize: 17,
                  color: colors.text,
                  fontFamily: typography.primary
                }}
                placeholder="Alexander Hamilton"
                placeholderTextColor="rgba(117,119,127,0.4)"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Email Address */}
            <View>
              <Text style={{ fontSize: 11, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4, marginLeft: 2, }}>
                Email Address
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 10,
                  fontSize: 17,
                  color: colors.text,
                  fontFamily: typography.primary
                }}
                placeholder="alex@privatewealth.com"
                placeholderTextColor="rgba(117,119,127,0.4)"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password */}
            <View>
              <Text style={{ fontSize: 11, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4, marginLeft: 2, }}>
                Password
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.outlineVariant }}>
                <TextInput
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    fontSize: 17,
                    color: colors.text,
                    fontFamily: typography.primary
                  }}
                  placeholder="••••••••••••"
                  placeholderTextColor="rgba(117,119,127,0.4)"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 8 }}>
                  <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={20} color={colors.outline} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms of Service */}
            <View style={{ marginTop: 4 }}>
              <Text style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 18, fontFamily: typography.primary }}>
                By signing up, you agree to our{' '}
                <Text style={{ color: colors.text, fontFamily: typography.primaryBold, textDecorationLine: 'underline' }}>Terms of Service</Text>
                {' '}and{' '}
                <Text style={{ color: colors.text, fontFamily: typography.primaryBold, textDecorationLine: 'underline' }}>Privacy Policy</Text>.
              </Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: colors.primaryContainer,
                borderRadius: 14,
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 12,
                shadowColor: colors.primaryContainer,
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.15,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <Text style={{ fontSize: 18, color: '#fff', }}>Continue</Text>
              <MaterialIcons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Divider */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(197,198,207,0.3)' }} />
              <Text style={{ marginHorizontal: 16, fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1 }}>Or join with</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(197,198,207,0.3)' }} />
            </View>

            {/* Social Logins */}
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <TouchableOpacity style={{
                flex: 1,
                height: 54,
                borderWidth: 1,
                borderColor: 'rgba(197,198,207,0.5)',
                borderRadius: 14,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                shadowColor: '#00113a',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2,
              }}>
                <MaterialCommunityIcons name="google" size={20} color="#4285F4" />
                <Text style={{ fontSize: 16, color: colors.text, }}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex: 1,
                height: 54,
                borderWidth: 1,
                borderColor: 'rgba(197,198,207,0.5)',
                borderRadius: 14,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                shadowColor: '#00113a',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2,
              }}>
                <MaterialCommunityIcons name="apple" size={20} color={colors.text} />
                <Text style={{ fontSize: 16, color: colors.text, }}>Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Footer link to Sign In */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
              <Text style={{ fontSize: 15, color: colors.textSecondary, fontFamily: typography.primary }}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
                <Text style={{ fontSize: 15, color: colors.text, }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Success Feedback Overlay */}
      {showSuccess && (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,8,30,0.95)', zIndex: 100, alignItems: 'center', justifyContent: 'center' }]}>
          <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
            <MaterialIcons name="check" size={40} color={colors.text} />
          </View>
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 8, }}>Welcome Aboard</Text>
          <Text style={{ fontSize: 16, color: 'rgba(219,225,255,0.8)', fontFamily: typography.primary }}>Securing your financial future...</Text>
        </View>
      )}
    </View>
  );
}
