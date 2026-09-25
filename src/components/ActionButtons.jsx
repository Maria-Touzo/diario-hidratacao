import { Button, Text, View } from "react-native";


export function ActionButtons(){
    return(
        <View>
        <Text>Adicionar consumo:</Text>
        <View>
            <Button
                onPress={() => {
                                
                        }}
                        title="+200 ml"
            />
            <Button
                onPress={() => {
                                
                        }}
                        title="+350 ml"
            />
            <Button
                onPress={() => {
                                
                        }}
                        title="+500 ml"
            />
        </View>
        <Button
                onPress={() => {
                                
                        }}
                        title="Reiniciar Dia"
            />
        </View>

        
    )
    
}