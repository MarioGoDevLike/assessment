import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import Button from '../../Components/Button/Button';

const VoiceBot = () => {
  const navigation = useNavigation();

  const dismissVoiceBot = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.voiceBotContainer}>
      <Button text="DISMISS" onPress={dismissVoiceBot} />
    </View>
  );
};

export default VoiceBot;
