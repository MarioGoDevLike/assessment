import {View, Text, TextInput} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import Button from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';

const EnterCompanyId = () => {
  const navigation = useNavigation();

  const onContinuePress = useCallback(() => {
    navigation.navigate(Routes.pickVoiceScreen as never);
  }, []);

  return (
    <View style={styles.enterCompanyContainer}>
      <View style={styles.enterCompanyInput}>
        <TextInput placeholder="Enter Company ID" />
      </View>
      <Button
        style={styles.buttonContinue}
        text="Continue"
        onPress={onContinuePress}
      />
    </View>
  );
};

export default EnterCompanyId;
