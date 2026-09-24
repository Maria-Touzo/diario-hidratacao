import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

// passando os parÂmetros consumido e objetivo para a função
export function WaterProgress({consumed, goal}){
    // calculo da porcentagem
    // math.round arredonda para o mais próximo
    // math.min serve para limitar a porcentagem
    const porcentagem =  Math.min(Math.round((consumed/goal)*100), 100)
    return(
        <View>
            <Text> Você bebeu {consumed}ml hoje.</Text>
            <Text> Você atingiu {porcentagem}% da meta diária.</Text>
            {/* Barra de progresso */}
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, {whidth: `${porcentagem}%` }]}/>
            </View>
        </View>
    )
   
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: COLORS.cardBg,
        borderRadius: 16,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 24, 
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {whidth: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    consumedText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    porcentagemText: {
        fontSize: 36,
        color: COLORS.textMuted,
        marginBottom: 16,
    },


    progressBarBackground: {
        whidth: '100%',
        heigth: 25,
        backgroundColor: '#000000',
        borderRadius: 6,
        overflow: 'hidden',
    },

    progressBarFill: {
        height: '50%',
        backgroundColor: COLORS.secondary,
        borderRadius: 6,
    },
})