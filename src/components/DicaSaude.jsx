import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";


export function DicaSaude(){
    return(
        <View style={styles.card}>
            <Text style={styles.title}> 💡 Dica de saúde</Text>
            <Text style={styles.text}>Beber água regularmente melgora a concentração, 
            a digestão e mantém a energia alta ao longo do dia!
            </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: COLORS.cardBg,
        padding: 16,
        margin:10,
    },

    title:{
        color: COLORS.textMain,
        fontWeight: 'bold',
        padding:10
    },

    text:{
        color: COLORS.textMuted,
        padding:10,
    }
})