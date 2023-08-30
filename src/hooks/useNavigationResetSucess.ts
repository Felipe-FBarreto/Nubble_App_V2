import {useNavigation} from '@react-navigation/native';

import {AuthStackParamList} from '@routes';

export function useNavigationResetSucess() {
  const navigation = useNavigation();
  function reset(params: AuthStackParamList['SucessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SucessScreen',
          params,
        },
      ],
    });
  }
  return {reset};
}
