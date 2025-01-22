import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import Button from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';

const Settings = () => {
  const navigation = useNavigation();
  const onPickVoiceScreenPress = useCallback(() => {
    navigation.navigate(Routes.pickVoiceScreen as never);
  }, []);

  const onCompanyIdPress = useCallback(() => {
    navigation.navigate(Routes.setCompanyIdScreen as never);
  }, []);

  return (
    <View style={styles.settingsContainer}>
      <Button text="Pick Voice Screen" onPress={onPickVoiceScreenPress} />
      <Button text="Set Company ID" onPress={onCompanyIdPress} />
    </View>
  );
};

export default Settings;
