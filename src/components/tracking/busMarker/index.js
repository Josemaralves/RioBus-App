import {MarkerAnimated} from 'react-native-maps';
import React from "react";
import IconView from '../iconView'

const marker = ({coordinates, id}) => {
    return (
        <MarkerAnimated key={id}
                        coordinate={coordinates}
                        tracksViewChanges={false}>
                <IconView />
        </MarkerAnimated>
    )
}

function markerAreEqual(prev, next) {
    return prev.id === next.id
}

const MemoMarker = React.memo(marker, markerAreEqual)

export default MemoMarker