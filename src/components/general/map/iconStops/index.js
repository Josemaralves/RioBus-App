import IconAwesome from "react-native-vector-icons/FontAwesome5";
import React from "react";

const IconStops = () => {
    return  <IconAwesome name="sign" size={15} color="#999" />
}

const MemoIconStops = React.memo(IconStops)

export default MemoIconStops