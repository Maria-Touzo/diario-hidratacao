
 import { StyleSheet, View, StatusBar,  } from 'react-native';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

 

export default function App() {
    const GOAL = 2000;
    return (
         <SafeAreaProvider>
             <SafeAreaView>
                 <StatusBar barStyle={'auto'}/>
                 <View>
                 <Header GOAL={GOAL}/>  
                 <WaterProgress consumed={1000} goal={GOAL}/>
                 <ActionButtons/>
                 </View>
             </SafeAreaView>
         </SafeAreaProvider>
    )
}

