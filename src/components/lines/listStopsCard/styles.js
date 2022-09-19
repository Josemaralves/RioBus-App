import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    itinerarioCard:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 400,
        height: 50,
    },
    linhaSquare:{
        alignItems: 'center',
        flex:2,
        borderRadius: 10,
        justifyContent: 'center',
        padding:5
    },
    nomeSquare:{
        flex: 9,
        padding:5
    },
    linhaText:{
        fontSize:20,
        backgroundColor:"yellow",
        padding:5
    },
    nomeText:{
        fontSize:16,
    },
    empresaText:{
        fontSize:11,
    }

});

export default Styles