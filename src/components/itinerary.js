import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RoutesScreen() {

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
  ]

  const itinerarioRender = (itinerario) => (
    <View style={styles.itinerarioCard}>
      <View style={styles.linhaSquare}>
        <View style={{backgroundColor:"yellow", borderRadius: 15, justifyContent: 'center'}}>
          <Text style={{alignItems: 'center', jusifyContent: "center", textAlign: 'center'}}>L123</Text>
        </View>
      </View>
      <Text style={{flex: 9}}>Routes!!</Text>
    </View>
  );



return (
  <View style={styles.container}>
    <FlatList
      data={itinerarios}
      renderItem={itinerarioRender}
    ></FlatList>

    <StatusBar style="auto" />
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itinerarioCard:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    height: 70,
    backgroundColor: 'blue'
  },
  linhaSquare:{
    alignItems: 'center',
    flex:3,
    backgroundColor: 'grey',
  },
  nomeSquare:{
    flex: 7,
  }
});