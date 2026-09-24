
 import { StyleSheet, View, StatusBar,  } from 'react-native';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';

 

export default function App() {
    const GOAL = 2000;
    return (
         <SafeAreaProvider>
        //     <SafeAreaView>
                 <StatusBar barStyle={'auto'}/>
                 <View>
                 <Header GOAL={GOAL}/>  
                 </View>
        //     </SafeAreaView>
        // </SafeAreaProvider>
    )
}

