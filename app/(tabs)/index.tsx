// App.tsx or your relevant component
import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { useGetTrendingMoviesQuery } from '../../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const { data, error, isLoading } = useGetTrendingMoviesQuery();

  // Handling loading state
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Handling error state
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Something went wrong!</Text>
      </View>
    );
  }

  // Rendering the movie list
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={data?.results} 
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 8 }} 
        renderItem={({ item }) => (
          <View className="flex-col flex-1 p-4 border-b border-gray-200 gap-1">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`, 
              }}
              style={{ width: 150, height: 200 }}
            />
            <Text className="text-[8px] font-semibold text-wrap flex-wrap">{item.title}</Text>

          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Index;
