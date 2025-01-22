import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../RootNavigator/RootParamList';
import {Routes} from '../types/type.ts';
import Welcome from '../screens/Welcome/Welcome';
import EnterCompanyId from '../screens/EnterCompanyId/EnterCompanyId';
import PickVoice from '../screens/PickVoice/PickVoice';
import MainScreen from '../screens/MainScreen/MainScreen.tsx';
import VoiceBot from '../screens/VoiceBot/VoiceBot.tsx';
import SetCompanyId from '../screens/SetCompanyId/SetCompanyId.tsx';
import Settings from '../screens/Settings/Settings.tsx';

export const navigationRef = createNavigationContainerRef<RootParamList>();

const RootStackNav = createNativeStackNavigator();

const OnBoardingStack = () => (
  <RootStackNav.Navigator>
    <RootStackNav.Screen
      name={Routes.welcomeScreen}
      component={Welcome}
      options={{headerShown: false}}
    />
    <RootStackNav.Screen
      name={Routes.enterCompanyIdScreen}
      component={EnterCompanyId}
      options={{headerShown: true}}
    />
  </RootStackNav.Navigator>
);

const MainScreenStack = () => (
  <RootStackNav.Navigator>
    <RootStackNav.Screen
      name={Routes.mainScreen}
      component={MainScreen}
      options={{headerShown: false}}
    />
  </RootStackNav.Navigator>
);

const SettingsStack = () => (
  <RootStackNav.Navigator>
    <RootStackNav.Screen
      name={Routes.settingsScreen}
      component={Settings}
      options={{headerShown: false, presentation: 'modal'}}
    />
    <RootStackNav.Screen
      name={Routes.pickVoiceScreen}
      component={VoiceBot}
      options={{headerShown: false}}
    />
    <RootStackNav.Screen
      name={Routes.setCompanyIdScreen}
      component={SetCompanyId}
      options={{headerShown: false}}
    />
    <RootStackNav.Screen
      name={Routes.enterCompanyIdScreen}
      component={EnterCompanyId}
      options={{headerShown: true}}
    />
  </RootStackNav.Navigator>
);

const RootNavigator = () => {
  useEffect(() => {
    const init = async () => {
      await RNBootSplash.hide({fade: true});
    };

    init();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStackNav.Navigator>
          <RootStackNav.Screen
            name={Routes.onBoardingStack}
            component={OnBoardingStack}
            options={{headerShown: false}}
          />
          <RootStackNav.Screen
            name={Routes.mainScreenStack}
            component={MainScreenStack}
            options={{headerShown: false}}
          />
          <RootStackNav.Screen
            name={Routes.settingsStack}
            component={SettingsStack}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <RootStackNav.Screen
            name={Routes.pickVoiceScreen}
            component={PickVoice}
            options={{
              headerShown: true,
              animation: 'slide_from_bottom',
              presentation: 'modal',
            }}
          />
          <RootStackNav.Screen
            name={Routes.voiceBotScreen}
            component={VoiceBot}
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'slide_from_bottom',
            }}
          />
        </RootStackNav.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
