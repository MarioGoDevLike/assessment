import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';

const Welcome = () => {
  const navigation = useNavigation();
  const onButtonPress = useCallback(() => {
    navigation.navigate(Routes.enterCompanyIdScreen as never);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.getStartedBtn} onPress={onButtonPress}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
