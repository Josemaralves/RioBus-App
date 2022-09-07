import { MarkerAnimated } from 'react-native-maps';
import { View } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

export default function(props){
    return (
        <MarkerAnimated key={props.location.id} coordinate={props.location.track} >
            <View>
                <IconAwesome name="bus" size={30} color="#999" />
            </View> 
      </MarkerAnimated>
    )
}