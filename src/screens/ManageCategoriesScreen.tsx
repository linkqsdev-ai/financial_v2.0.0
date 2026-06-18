import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NAVY = '#00113a';
const WHITE = '#ffffff';
const ON_SURFACE_VARIANT = '#444650';
const OUTLINE = '#757682';
const RED = '#ba1a1a';
const CHAMPAGNE = '#e9c176';

interface Category {
  id: string;
  name: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  subcategories: string[];
  borderAccent?: string;
}

const INITIAL_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Food & Dining',
    icon: 'restaurant',
    iconBg: '#f0e0c8',
    iconColor: '#221b0b',
    subcategories: ['Groceries', 'Restaurants', 'Coffee Shops']
  },
  {
    id: '2',
    name: 'Transport',
    icon: 'directions-car',
    iconBg: '#dbe1ff',
    iconColor: '#00174a',
    subcategories: ['Fuel & Gas', 'Public Transport']
  },
  {
    id: '3',
    name: 'Shopping',
    icon: 'shopping-bag',
    iconBg: '#ffdea5',
    iconColor: '#261900',
    subcategories: ['Electronics', 'Clothing']
  },
  {
    id: '4',
    name: 'Housing',
    icon: 'home',
    iconBg: '#e9c176',
    iconColor: '#261900',
    subcategories: ['Mortgage / Rent', 'Maintenance'],
    borderAccent: '#e9c176'
  }
];

interface ManageCategoriesScreenProps {
  navigation?: any;
}

export default function ManageCategoriesScreen({ navigation }: ManageCategoriesScreenProps) {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [expandedId, setExpandedId] = useState<string | null>('1');
  const [newSubcatText, setNewSubcatText] = useState<{ [key: string]: string }>({});

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleDeleteSubcategory = (catId: string, subName: string) => {
    setCategories(categories.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          subcategories: cat.subcategories.filter(sub => sub !== subName)
        };
      }
      return cat;
    }));
  };

  const handleAddSubcategory = (catId: string) => {
    const text = newSubcatText[catId]?.trim();
    if (!text) return;

    setCategories(categories.map(cat => {
      if (cat.id === catId && !cat.subcategories.includes(text)) {
        return {
          ...cat,
          subcategories: [...cat.subcategories, text]
        };
      }
      return cat;
    }));

    setNewSubcatText({
      ...newSubcatText,
      [catId]: ''
    });
  };

  const handleDeleteCategory = (catId: string) => {
    setCategories(categories.filter(cat => cat.id !== catId));
    if (expandedId === catId) setExpandedId(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top App Bar */}
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
            <MaterialIcons name="arrow-back" size={24} color={NAVY} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '700', color: NAVY, fontFamily: 'System' }}>Categories</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <TouchableOpacity style={{ padding: 4 }}>
            <MaterialIcons name="notifications" size={24} color={NAVY} />
          </TouchableOpacity>
          <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)' }}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe4xthrsdpBoTbLgDaX7l3nfx_UTEe3hXsc-IBC5fHo59a7_0rwXl0N5PUp-XuphZfIUcJAm9n-OK2vXI1qFxq0_z5tgYTFcIKbff7fZnGlxfxq4Ocwylbl-rYzr2f4dcChguTqhhtV5pth7Qqe9pJ-oImG8bnmzspXCMMQX_FrBhXWDG3nEpr-YBLOiSwH_gvOZnOQ4qKNRAEBNokXaJ322stbZUEJNGSbbGSolzgSO6-8Fy0Hkfu97aZcDm6jGZpz2xeN2-ESAG9' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 12 }}>
          {categories.map(cat => {
            const isExpanded = expandedId === cat.id;
            return (
              <View
                key={cat.id}
                style={{
                  backgroundColor: WHITE,
                  borderRadius: 16,
                  borderLeftWidth: cat.borderAccent ? 4 : 0,
                  borderLeftColor: cat.borderAccent || 'transparent',
                  shadowColor: '#00113a',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: isExpanded ? 0.05 : 0.02,
                  shadowRadius: 10,
                  elevation: isExpanded ? 3 : 1,
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <TouchableOpacity
                  onPress={() => toggleAccordion(cat.id)}
                  activeOpacity={0.9}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 16
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: cat.iconBg, alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name={cat.icon} size={20} color={cat.iconColor} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>{cat.name}</Text>
                      <Text style={{ fontSize: 11, color: OUTLINE, textTransform: 'uppercase', fontWeight: '600', marginTop: 2 }}>
                        {cat.subcategories.length} Subcategories
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <TouchableOpacity style={{ padding: 6 }}>
                      <MaterialIcons name="edit" size={18} color={OUTLINE} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteCategory(cat.id)} style={{ padding: 6 }}>
                      <MaterialIcons name="delete" size={18} color={OUTLINE} />
                    </TouchableOpacity>
                    <MaterialIcons
                      name={isExpanded ? 'expand-less' : 'expand-more'}
                      size={20}
                      color={OUTLINE}
                      style={{ marginLeft: 6 }}
                    />
                  </View>
                </TouchableOpacity>

                {/* Accordion Content */}
                {isExpanded && (
                  <View style={{ borderTopWidth: 0.5, borderTopColor: 'rgba(0,0,0,0.06)', padding: 16, backgroundColor: '#fdfdfd' }}>
                    <View style={{ gap: 4 }}>
                      {cat.subcategories.map(sub => (
                        <View
                          key={sub}
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 8,
                            borderRadius: 8,
                            backgroundColor: 'transparent'
                          }}
                        >
                          <Text style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>{sub}</Text>
                          <TouchableOpacity onPress={() => handleDeleteSubcategory(cat.id, sub)} style={{ padding: 2 }}>
                            <MaterialIcons name="close" size={16} color={OUTLINE} />
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>

                    {/* Quick Add */}
                    <View style={{ marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderStyle: 'dashed', borderTopColor: 'rgba(0,0,0,0.1)', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <TextInput
                        style={{ flex: 1, fontSize: 14, color: NAVY, paddingVertical: 6 }}
                        placeholder="Add subcategory..."
                        value={newSubcatText[cat.id] || ''}
                        onChangeText={text => setNewSubcatText({ ...newSubcatText, [cat.id]: text })}
                      />
                      <TouchableOpacity
                        onPress={() => handleAddSubcategory(cat.id)}
                        style={{ backgroundColor: NAVY, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 }}
                      >
                        <Text style={{ fontSize: 11, fontWeight: '700', color: '#fff' }}>ADD</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Footer / Floating Button */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(248,249,250,0.95)',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={() => navigation?.navigate('CreateNewCategory')}
          style={{
            backgroundColor: CHAMPAGNE,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingVertical: 14,
            paddingHorizontal: 28,
            borderRadius: 28,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            width: '100%',
            maxWidth: 320
          }}
        >
          <MaterialIcons name="add-circle" size={20} color={NAVY} />
          <Text style={{ fontSize: 16, fontWeight: '700', color: NAVY }}>Create New Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
