import { Text, View } from "react-native";

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
        </View>
    )
   
}
