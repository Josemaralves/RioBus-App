import {  View, FlatList } from 'react-native';
import LinhasCard from '../../components/itinerary/LinhasCard';
import styles from './styles';

export default function() {

  const itinerarios = [
    {
      linha: "L012",
      nome: "Caxias - Barra"
    },
    {
      linha: "L0123",
      nome: "25 de Agosto"
    },
    {
      linha: "L0124",
      nome: "Caxias - Centro"
    },
    {
      linha: "L012",
      nome: "Caxias - Barra"
    },
    {
      linha: "L0123",
      nome: "25 de Agosto"
    },
    {
      linha: "L0124",
      nome: "Caxias - Centro"
    },
    {
      linha: "L012",
      nome: "Caxias - Barra"
    },
    {
      linha: "L0123",
      nome: "25 de Agosto"
    },
    {
      linha: "L0124",
      nome: "Caxias - Centro"
    },
    {
      linha: "L012",
      nome: "Caxias - Barra"
    },
    {
      linha: "L0123",
      nome: "25 de Agosto"
    },
    {
      linha: "L0124",
      nome: "Caxias - Centro"
    },
    {
      linha: "L012",
      nome: "Caxias - Barra"
    },
    {
      linha: "L0123",
      nome: "25 de Agosto"
    },
    {
      linha: "L0124",
      nome: "Caxias - Centro"
    },
  ]

return (
  <View style={styles.container}>
    <FlatList
      data={itinerarios}
      renderItem={LinhasCard}
    />
  </View>
)
}
