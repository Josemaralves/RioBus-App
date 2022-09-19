import {Image} from "react-native";
import {MarkerAnimated} from 'react-native-maps';
import abcd from '../../../../assets/favicon.png'

const DEFAULT_IMAGE = Image.resolveAssetSource(abcd).uri;

const img = {
    uri: DEFAULT_IMAGE,
    cache: 'only-if-cached'
}

const marker = (props) => {
    return (

        <MarkerAnimated
                        coordinate={props.location.track}r
                        tracksViewChanges={false}
                        icon={
                            img
                        }
        />
        //
        // <MarkerAnimated coordinate={props.location.track} tracksViewChanges={false} >
        //         <IconAwesome name="bus" size={30} color="#999" />
        // </MarkerAnimated>
    )
}

export default marker