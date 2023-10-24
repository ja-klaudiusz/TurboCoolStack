import { Image, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Page() {
  return (
    <View className="h-screen inset-0 flex-1 flex-col items-center justify-center gap-5 bg-app-dark-3">

      <View className="flex items-center justify-center">
        <Image
          source={require('../../assets/logo.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </View>

      <View className="flex flex-col items-center gap-4">
        <LinearGradient

          colors={['#0099f7', '#ec1e5c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ backgroundColor: 'transparent' }}
          className="p-3 rounded-full">
          <Text className="text-3xl text-white" style={{ fontWeight: '900' }}>TURBO</Text>
        </LinearGradient>

        <LinearGradient

          colors={['#ec1e5c', '#f38b02']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-3 rounded-full" style={{ backgroundColor: 'transparent' }}>
          <Text className="text-4xl text-white" style={{ fontWeight: '900' }}>CoolStack</Text>
        </LinearGradient>
        <Text className="text-2xl text-gray-300">Native</Text>
      </View>

    </View>
  );
}