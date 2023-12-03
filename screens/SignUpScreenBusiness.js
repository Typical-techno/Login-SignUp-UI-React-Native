import { ScrollView, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React, { Component } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreenBusiness() {
    const navigation = useNavigation();

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'KeyboardDidShow',
            this._keyboardDidHide,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    };

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };

    _keyboardDidShow = () => {
        scrollView.scrollToEnd({ animated: True });
        scrollView.scrollTo({ y: 220, animated: true});
        this.setState({ heightTop: 260});
    };

    _keyboardDidHide = () => {
        this.setState({heightTop: 30});
    };

  return (
      <KeyboardAvoidingView style={{ flex:1 }}>
      <ScrollView contentContainerStyle={{flex:1}} bounces={false}>
      ref={(ref) => (scrollView = ref)} 
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Phone Number</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                placeholder='mobile number'
            />
            <Text className="text-gray-700 ml-4">Business Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                placeholder='business name'
            />
            <Text className="text-gray-700 ml-4">GST Number</Text>
            <TextInput
                maxLength={15}
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                placeholder='GST number'
            />
            <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl"
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
      </ScrollView>
      </KeyboardAvoidingView>
  )
}
