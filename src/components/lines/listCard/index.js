import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const LinesCard = (props) => {
  const navigation = useNavigation();
  
    return (
        <TouchableOpacity onPress={() => navigation.navigate('LineScreen', {lineId : props.item.idRoute})} style={styles.itinerarioCard}>
          <View style={styles.linhaSquare}>
              <Text style={styles.linhaText}>{props.item.shortName}</Text>
          </View>
          <View style={styles.nomeSquare}>
            <Text style={styles.nomeText}>{props.item.longName}</Text>
            <Text style={styles.empresaText}>{props.item.agencyName}</Text>
          </View>
        </TouchableOpacity>
      );
}

export default LinesCard

