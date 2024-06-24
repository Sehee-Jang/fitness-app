import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='w-full justify-center items-center h-full px-4'>
                    <Image
                        source={images.logo}
                        className="w-[400px] h-[200px]"
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className='text-m text-white font-bold text-cetner'>
                            GRID YOUR GAINS, GRID YOUR GOALS
                        </Text>
                    </View>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-8"
                    />

                    <StatusBar backgroundColor='#161622' style='light' />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
