import {View, Text, TextInput} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import Button from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';
import {useAtom} from 'jotai';
import {companyIdAtom} from '../../atoms';

const EnterCompanyId = () => {
  const navigation = useNavigation();
  const [companyId, setCompanyId] = useAtom(companyIdAtom);

  const onContinuePress = useCallback(() => {
    navigation.navigate(Routes.pickVoiceScreen as never);
  }, []);

  return (
    <View style={styles.enterCompanyContainer}>
      <View style={styles.enterCompanyInput}>
        <TextInput
          value={companyId}
          placeholder="Enter Company ID"
          onChangeText={setCompanyId}
        />
      </View>
      <Button disabled={!companyId} text="Continue" onPress={onContinuePress} />
    </View>
  );
};

export default EnterCompanyId;
