import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes/Routes";


export function useNavigationResetSucess(){
  const navigation = useNavigation()
  function reset(params:RootStackParamList['SucessScreen']){
    navigation.reset({
      
        index: 1,
        routes: [
          {
            name: 'LoginScreen',
          },
          {
            name: 'SucessScreen',
            params
          },
        ],

    })
  }
  return {reset}
}