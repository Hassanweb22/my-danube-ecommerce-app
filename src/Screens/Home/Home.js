import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Text, Box } from 'native-base';
import AppBar from './Appbar';
import MyStatusBar from '../../components/StatusBar/StatusBar';
import colors from '../../colors/colors';

const Home = () => {
    return (
        <View style={styles.container}>
            <MyStatusBar backgroundColor={colors.main} barStyle="light-content" />
            <AppBar />
            {/* <Box width="80%" marginY="30px" bg="lightgreen" alignItems="center" justifyContent="center" style={{ borderWidth: 2 }}>
                <Text bold>Open up App.js to start working on your app!</Text>
            </Box> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: "green"
    }
})
