import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

// passando os parÂmetros consumido e objetivo para a função
export function WaterProgress({consumed, goal}){
    // calculo da porcentagem
    // math.round arredonda para o mais próximo
    // math.min serve para limitar a porcentagem
    const porcentagem =  Math.min(Math.round((consumed/goal)*100), 100)
    return(
        <View style={styles.card}>
            <Text style={styles.consumedText}> {consumed} ml</Text>
            <Text style={styles.porcentagemText}>{porcentagem}% da meta diária.</Text>
            {/* Barra de progresso */}
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, {width: `${porcentagem}%` }]}/>
            </View>
            {/* if para validar o consumo de água consumida pleo usuário */}
            {consumed < goal ? (<Text>Continue bebendo água para atingir a sua meta, faltam {goal - consumed} ml </Text>) : (<Text>Parabéns, você atingiu a sua meta diária!</Text>) }
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  porcentagemText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});