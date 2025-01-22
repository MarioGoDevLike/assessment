import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useAtom} from 'jotai';
import {companyIdAtom} from '../../atoms';
import Button from '../../Components/Button/Button';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';

const PickVoice = () => {
  const navigation = useNavigation();
  const [company] = useAtom(companyIdAtom);
  const onConfirmNavigate = () => {
    navigation.dispatch(StackActions.replace(Routes.mainScreenStack));
  };

  return (
    <View style={styles.pickVoiceContainer}>
      <Text style={styles.companyIdText}>Company ID Provided: {company}</Text>
      <Button text="Dismiss" onPress={onConfirmNavigate} />
    </View>
  );
};

export default PickVoice;
