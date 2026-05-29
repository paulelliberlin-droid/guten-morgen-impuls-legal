import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_700Bold,
} from '@expo-google-fonts/cormorant-garamond';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import HomeScreen from './src/screens/HomeScreen';
import KategorienScreen from './src/screens/KategorienScreen';
import EinstellungenScreen from './src/screens/EinstellungenScreen';
import { setupNotifications, requestNotificationPermission, planeTaglicheBenachrichtigung } from './src/services/notifications';
import { getBenachrichtigungszeit } from './src/services/storage';
import { COLORS } from './src/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    async function init() {
      await setupNotifications();
      const granted = await requestNotificationPermission();
      if (granted) {
        const zeit = await getBenachrichtigungszeit();
        const [h, m] = zeit.split(':').map(Number);
        await planeTaglicheBenachrichtigung(h, m);
      }
    }
    init();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.bg, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={COLORS.gold} size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.bgCard,
            borderTopColor: COLORS.border,
            borderTopWidth: 1,
            height: 70,
            paddingBottom: 10,
            paddingTop: 6,
          },
          tabBarActiveTintColor: COLORS.gold,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontFamily: 'Inter_500Medium',
            fontSize: 11,
            letterSpacing: 0.3,
          },
          tabBarIcon: ({ color, size, focused }) => {
            const icons = {
              Impuls:       focused ? 'sunny'           : 'sunny-outline',
              Kategorien:   focused ? 'layers'          : 'layers-outline',
              Einstellungen:focused ? 'settings'        : 'settings-outline',
            };
            return <Ionicons name={icons[route.name]} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Impuls"        component={HomeScreen} />
        <Tab.Screen name="Kategorien"    component={KategorienScreen} />
        <Tab.Screen name="Einstellungen" component={EinstellungenScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
