import { View, Text } from "react-native";
import styles from "./styles";

export default function(props) {
    return (
        <View style={styles.itinerarioCard}>
          <View style={styles.linhaSquare}>
              <Text style={styles.linhaText}>{props.item.linha}</Text>
          </View>
          <View style={styles.nomeSquare}>
            <Text style={styles.nomeText}>{props.item.nome}</Text>
            <Text style={styles.empresaText}>Santo Antonio</Text>
          </View>
        </View>
      );
}

