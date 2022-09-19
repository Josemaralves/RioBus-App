import { View, Text } from "react-native";
import styles from "./styles";
import React from 'react';

const StopsCard = (props) => {
    return (
        <View style={styles.itinerarioCard}>
          <View style={styles.nomeSquare}>
            <Text style={styles.nomeText}>{props.stop.name}</Text>
          </View>
        </View>
      );
}

export default StopsCard

