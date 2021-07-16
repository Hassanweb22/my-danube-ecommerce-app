import React from 'react'
import { StyleSheet, View } from 'react-native'
import { VStack, HStack, Button, IconButton, Text, NativeBaseProvider, Icon, Center, Box, StatusBar } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import colors from '../../colors/colors';

function AppBar() {
    return (
        <>

            <HStack bg={colors.main} px={1} py={3} justifyContent='space-between' alignItems='center'>
                <HStack space={2} alignItems='center' px={1}>
                    <Box>
                        <Text color="white" fontSize={30} fontWeight='bold'>D</Text>
                    </Box>
                    <Box flexDirection="row" justifyContent="center" alignItems="center" borderWidth={0} py={1.5}>
                        <Text style={{ color: "white", paddingHorizontal: 5, fontSize: 15, fontWeight: '600' }} >Al Salam Mall</Text>
                        <FontAwesome size={15} name='caret-down' color="white" />
                    </Box>
                </HStack>
                <HStack space={3} alignItems='center' >
                    <IconButton icon={<Icon size={"30px"} as={<FontAwesome name='bell' />} color="white" />} />
                    <IconButton icon={<Icon size={"30px"} as={<MaterialIcons name='shopping-cart' />} color="white" />} />
                </HStack>
            </HStack>

        </>
    )
}

export default AppBar;

const styles = StyleSheet.create({})
