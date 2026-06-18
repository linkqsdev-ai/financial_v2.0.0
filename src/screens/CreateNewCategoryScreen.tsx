import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';


const ICONS = [
  'account-balance-wallet',
  'monitoring',
  'payments',
  'event-upcoming',
  'real-estate-agent',
  'directions-car',
  'flight-takeoff',
  'savings'
];

const COLORS = [
  '#00113a',
  '#D4AF37',
  '#685d4a',
  '#ba1a1a',
  '#435b9f',
  '#1d1200',
  '#2e3132'
];

interface CreateNewCategoryScreenProps {
  navigation?: any;
}

export default function CreateNewCategoryScreen({ navigation }: CreateNewCategoryScreenProps) {
  const { colors, typography } = useTheme();

  const [selectedIcon, setSelectedIcon] = useState('account-balance-wallet');
  const [selectedColor, setSelectedColor] = useState('#00113a');
  const [categoryName, setCategoryName] = useState('');
  const [subcategories, setSubcategories] = useState<string[]>([
    'International Flights',
    'Boutique Hotels',
    'Fine Dining'
  ]);
  const [showAddSub, setShowAddSub] = useState(false);
  const [newSubName, setNewSubName] = useState('');

  const handleCreate = () => {
    navigation?.goBack();
  };

  const handleAddSub = () => {
    const text = newSubName.trim();
    if (text && !subcategories.includes(text)) {
      setSubcategories([...subcategories, text]);
    }
    setNewSubName('');
    setShowAddSub(false);
  };

  const handleDeleteSub = (name: string) => {
    setSubcategories(subcategories.filter(s => s !== name));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Header */}
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
            <MaterialIcons name="close" size={24} color={colors.textSecondary} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: colors.text, }}>New Category</Text>
        </View>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 24 }}>
          
          {/* Icon Selection */}
          <View>
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Icon Selection</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              {ICONS.map(ico => {
                const isActive = selectedIcon === ico;
                return (
                  <TouchableOpacity
                    key={ico}
                    onPress={() => setSelectedIcon(ico)}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      backgroundColor: isActive ? 'rgba(0,17,58,0.08)' : colors.surfaceLowest,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: isActive ? 2 : 1,
                      borderColor: isActive ? colors.primary : 'rgba(0,0,0,0.05)',
                      shadowColor: '#00113a',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: isActive ? 0.05 : 0.01,
                      shadowRadius: 6,
                      elevation: isActive ? 2 : 0
                    }}
                  >
                    <MaterialIcons name={ico as any} size={24} color={isActive ? colors.primaryContainer : colors.outline} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Category Name Input */}
          <View>
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>Category Name</Text>
            <TextInput
              style={{
                backgroundColor: colors.surfaceLowest,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.08)',
                borderRadius: 12,
                paddingHorizontal: 16,
                height: 52,
                fontSize: 16,
                color: colors.text
              }}
              placeholder="e.g., Luxury Travel"
              placeholderTextColor="rgba(0,17,58,0.3)"
              value={categoryName}
              onChangeText={setCategoryName}
            />
          </View>

          {/* Color Theme Selection */}
          <View>
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Color Theme</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {COLORS.map(col => {
                const isActive = selectedColor === col;
                return (
                  <TouchableOpacity
                    key={col}
                    onPress={() => setSelectedColor(col)}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: col,
                      borderWidth: isActive ? 3 : 0,
                      borderColor: '#ffffff',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: isActive ? 0.3 : 0,
                      shadowRadius: 4,
                      elevation: isActive ? 4 : 0
                    }}
                  />
                );
              })}
            </View>
          </View>

          {/* Visual Context Banner */}
          <View>
            <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Visual Context</Text>
            <View style={{ height: 160, width: '100%', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCANnKFqLgPBCqhlsNKNHxav2S4iRnNagyfuq78RvuqemvPtbgtVID68b3s7plu-MQmUEoMdgE7rjH83cglxHGmOCDKr5RrIN58pLXWkJocwx2GNJVxIC1pkomXjdOFfQnoDiV0HUE0XYmtN7C21oK-WGz6da38sme_rzrmpemnvrcyxol1o52W-ktoUnSpWGB55Eu04z8d1I_9qBIOObb0pAtP7jzlCLSPTI7xTn6FpZjwtf2QfTTgmQOQ5SKlAIy_3Pbd671M753t' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
              <View style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,17,58,0.2)'
              }} />
            </View>
          </View>

          {/* Subcategories */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontSize: 11, fontFamily: typography.primaryBold, color: colors.outline, textTransform: 'uppercase', letterSpacing: 1.5 }}>Subcategories</Text>
              <TouchableOpacity onPress={() => setShowAddSub(!showAddSub)} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <MaterialIcons name="add" size={16} color={colors.text} />
                <Text style={{ fontSize: 13, fontFamily: typography.primaryBold, color: colors.text }}>Add New</Text>
              </TouchableOpacity>
            </View>

            {showAddSub && (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                backgroundColor: colors.surfaceLowest,
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.05)',
                marginBottom: 12
              }}>
                <TextInput
                  style={{ flex: 1, fontSize: 14, color: colors.text }}
                  placeholder="New subcategory name..."
                  value={newSubName}
                  onChangeText={setNewSubName}
                  autoFocus={true}
                />
                <TouchableOpacity onPress={handleAddSub} style={{ backgroundColor: colors.primaryContainer, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 }}>
                  <Text style={{ fontSize: 12, fontFamily: typography.primaryBold, color: '#fff' }}>Add</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={{ gap: 8 }}>
              {subcategories.map(sub => (
                <View
                  key={sub}
                  style={{
                    backgroundColor: colors.surfaceLowest,
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.05)',
                    borderRadius: 14,
                    padding: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: 14, fontFamily: typography.primaryBold, color: colors.text }}>{sub}</Text>
                  <TouchableOpacity onPress={() => handleDeleteSub(sub)}>
                    <MaterialIcons name="delete" size={18} color={colors.outline} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Bento Visual Decorator */}
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1, height: 120, borderRadius: 16, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASBLPHjNUDT0DwisVqfkuRkS2eR5D-hOWFnltYya3O75nLj32VmesenPrmJ39TOeaXFYHQAkrElKtumnJoVacoeCfWzEbuRhmHksd29c_yPJUcQDp7f7fr8sueoo2DreITtWQDzNg8dF63St0ma059AdLcXrrldwa4Y0uygt-2p5rVNJrANsu3jh7F9Alq_sCSdI2ueNMwXalyWf2l-90tygSv9vRsDyx4WJJY0bbvDmMM-imM7K54ZI8lXNsbySee9JSPnnRcNEx5' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, height: 120, borderRadius: 16, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW_9KnhIJzBf3_LQfTHpvV_JtYFJ1cXX93v9WBp2w6jUOLfrX4Kxpns4cU2IVIWz3HrQ8mmQ7h1rxz03KO3CG7Bd6xlBfoJeFFsGwEwAWL6x3-dUfRBniZRvGpSjkF-Ktzzkp9d1VwiilprjSNzRiUQXJDwVL13lOrqcK37NdnfAesnuKHkzZtFHoogQ-dV37PRRWGRJqDEwS7vR0IOt9MSQH4xt083KDeV4BkCwSe5iJDvHRxtw6a0TUwZEy6FqJeRdR9gY36VfTa' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(248,249,250,0.95)',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(0,0,0,0.06)'
      }}>
        <TouchableOpacity
          onPress={handleCreate}
          style={{
            backgroundColor: colors.primaryContainer,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingVertical: 16,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: 'rgba(212,175,55,0.2)'
          }}
        >
          <MaterialIcons name="add-circle" size={20} color={colors.primary} />
          <Text style={{ fontSize: 16, fontFamily: typography.primaryBold, color: colors.primary }}>Create Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
