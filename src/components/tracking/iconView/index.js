import IconAwesome from "react-native-vector-icons/FontAwesome5";
import React from "react";

const iconView = () => {
    return <IconAwesome name="bus" size={15} color="#999" />
}

const IconMemo = React.memo(iconView)

export default IconMemo