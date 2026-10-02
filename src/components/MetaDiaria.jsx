import { Pressable, Text, View } from "react-native";

export function MetaDiaria(){
   return(
           <View>
           <Text >Ajustar meta diária</Text>
   
           <View >
               {/* botão de 200 ml */}
               <Pressable onPress={() => onAdd(+250)}>
                   <Text >+250ml</Text>
              </Pressable>
   
              <Pressable  onPress={() => onAdd(-250)}>
                   <Text >-250ml</Text>
              </Pressable>
   
           </View>
           </View>
   
       )
        
    
}