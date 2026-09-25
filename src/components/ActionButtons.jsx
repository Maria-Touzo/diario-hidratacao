import {  Pressable, Text, View } from "react-native";


export function ActionButtons(){
    return(
        <View>
        <Text>Adicionar consumo:</Text>
        <View>
            <Pressable
                onPress={() => alert('Você me clicou!')}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? 'gray' : 'blue', // Fica cinza quando aperta, azul quando solta
                    padding: 10,
                    borderRadius: 5,
                })}
            >  
             <Text style={{ color: 'white' }}>Me Aperta!</Text>
            </Pressable>
        </View>
    
        </View>

        
    )
    
}