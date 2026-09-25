import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function Header(  {GOAL} ){
    return(
        // a view é como se fosse uma div no html.
        <View style={styles.container}>
            <Text style={styles.title}> 💧 Diário de hidratação 💧 </Text>
            {/* meta diária é dinâmica */}
            <Text style={styles.subtitle}>Meta diária: {GOAL}ml</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        marginTop: '24',
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        // pegando as cores doarquivo colors
        color: COLORS.textMain,
    },
    subtitle:{
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
});
