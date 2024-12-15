import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// component
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // recall videos-if new videos
    setRefreshing(false);
  };
  return (
    // scrollview doesnt support horizontal/vertical view at the same time
    <SafeAreaView className="bg-primary  h-full">
      {/* wwhen rendering large data  */}
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
        // adding a header for Flatlist
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        // flatlist property when the list is empty
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        // when user swipte it triggers refresh page
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
