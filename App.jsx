
 import { StyleSheet, View, StatusBar,  } from 'react-native';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';

 

export default function App() {
    return (
         <SafeAreaProvider>
        //     <SafeAreaView>
                 <StatusBar barStyle={'auto'}/>
                 <View>
                    {/* componente objtv recebe através de props a informação que tem que ser inserido no app */}
                 <Header objetivo={2000}/>  
                 </View>
        //     </SafeAreaView>
        // </SafeAreaProvider>
    )
}

