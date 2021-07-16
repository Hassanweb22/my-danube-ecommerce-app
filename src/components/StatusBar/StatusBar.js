import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 44;

const MyStatusBar = ({ backgroundColor, ...props }) => {
    const { appBar } = props
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar backgroundColor={backgroundColor} {...props} />
                {props.appBar &&
                    <View style={[styles.appBar, { backgroundColor }]} >
                        {console.log("isappBar", props.appBar)}
                        <Text>{appBar.title ? appBar.title : ""}Title</Text>
                    </View>
                }
            </SafeAreaView>
        </View>
    )
};


export default MyStatusBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        height: APPBAR_HEIGHT,
    },
})