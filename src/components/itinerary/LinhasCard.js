import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LinesCard(props) {
  const navigation = useNavigation();
  
    return (
        <TouchableOpacity onPress={() => navigation.navigate('LineScreen')} style={styles.itinerarioCard}>
          <View style={styles.linhaSquare}>
              <Text style={styles.linhaText}>{props.item.shortname}</Text>
          </View>
          <View style={styles.nomeSquare}>
            <Text style={styles.nomeText}>{props.item.longname}</Text>
            <Text style={styles.empresaText}>{props.item.agencyname}</Text>
          </View>
        </TouchableOpacity>
      );
}

