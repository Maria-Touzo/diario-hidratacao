import { View, Text, StyleSheet } from "react-native"


export function Header(  {objetivo} ){
    return(
        // a view é como se fosse uma div no html.
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}> 💧 Diário de hidratação 💧 </Text>
            {/* meta diária é dinâmica */}
            <Text style={headerStyles.subtitle}>Meta diária: {objetivo}ml</Text>
        </View>
        
    )
}

