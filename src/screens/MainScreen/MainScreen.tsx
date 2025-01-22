import {View, Text, Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';
import Button from '../../Components/Button/Button';

const MainScreen = () => {
  const navigation = useNavigation();

  const onSettingsPress = useCallback(() => {
    navigation.navigate(Routes.settingsStack as never);
  }, []);

  const onLaunchBotPress = useCallback(() => {
    navigation.navigate(Routes.voiceBotScreen as never);
  }, []);

  return (
    <View style={styles.mainScreenContainer}>
      <View style={styles.settingsIconContainer}>
        <Pressable onPress={onSettingsPress}>
          <Image
            source={require('../../assets/pngs/assets/images/settings_icon.png')}
            style={styles.settingsIcon}
          />
        </Pressable>
      </View>
      <View style={styles.launchBotContainer}>
        <Button text="Launch Voicebot Screen" onPress={onLaunchBotPress} />
      </View>
    </View>
  );
};

export default MainScreen;
