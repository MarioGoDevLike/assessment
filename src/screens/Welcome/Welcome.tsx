import {View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/type';
import Button from '../../Components/Button/Button';
``;
const Welcome = () => {
  const navigation = useNavigation();

  const onButtonPress = useCallback(() => {
    navigation.navigate(Routes.enterCompanyIdScreen as never);
  }, []);

  return (
    <View style={styles.container}>
      <Button text="GET STARTED" onPress={onButtonPress} />
    </View>
  );
};

export default Welcome;
