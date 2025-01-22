import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import Button from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';
import {styles} from './styles';

const SetCompanyId = () => {
  const navigation = useNavigation();
  const onEnterCompanyIdPress = useCallback(() => {
    navigation.navigate(Routes.enterCompanyIdScreen as never);
  }, []);

  return (
    <View style={styles.setCompanyIdContainer}>
      <Button text="Enter Company ID" onPress={onEnterCompanyIdPress} />
    </View>
  );
};

export default SetCompanyId;
