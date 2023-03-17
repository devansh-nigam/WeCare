import { Text, SafeAreaView} from 'react-native'
import React from 'react'
import { HeartIcon } from 'react-native-heroicons/solid';

const Home = () => {
  return (
    <SafeAreaView className="bg-red-400 flex-1 justify-center">
      <Text className="font-bold text-white text-center text-xl">Home <HeartIcon size={24} fill="#fff"/></Text>
    </SafeAreaView>
  )
}

export default Home
