import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="pets" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Aumigos!',
          tabBarIcon: ({ color }) => <AntDesign name="heart" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="dara"
        options={{
          title: 'Cibele',
          tabBarIcon: ({ color }) => <FontAwesome5 name="cat" size={24} color="black" />
        }}

        
      />

   <Tabs.Screen
        name="jor"
        options={{
          title: 'Pip',
          tabBarIcon: ({ color }) => <FontAwesome5 name="themeisle" size={24} color="black" />
        }}

        
      />

<Tabs.Screen
        name="julia"
        options={{
          title: 'Zé',
          tabBarIcon: ({ color }) => <FontAwesome6 name="bone" size={24} color="black" />
        }}

        
      />

           

<Tabs.Screen
        name="maria"
        options={{
          title: 'Zoe',
          tabBarIcon: ({ color }) => <FontAwesome5 name="dog" size={24} color="black" />
        }}

        
      />
    </Tabs>
  );
}
