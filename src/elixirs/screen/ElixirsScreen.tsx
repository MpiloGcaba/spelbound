import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../redux/Store/HousesSlice";
import { RootState } from "../../../store/Index";
import ImageAndTitleCard from "../components/ImageAndTitleCard";
import StatusHandler from "../../../common/ui/StatusHandler";
import { House } from "../models/HouseModel";

const ElixirsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { data: elixir, status, error } = useSelector((state: RootState) => state.houses);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getElixirs());
    }
  }, [dispatch, status]);

  const handlePress = (houseId: string) => {
    navigation.navigate("Details", { houseId });
  };

  const renderItem = ({ item }: { item: House }) => (
    <ImageAndTitleCard house={item} imageUrl={getHouseAsset(item.name)} onPress={handlePress} />
  );

  const handleRetry = () => {
    dispatch(fetchHouses());
  };

  const getHouseAsset = (houseName: string): string => {
    const houseAssets: { [key: string]: string } = {
      Gryffindor: require("../assets/gryffindor.jpg"),
      Slytherin: require("../assets/slytherin.png"),
      Hufflepuff: require("../assets/hufflepuff.png"),
      Ravenclaw: require("../assets/ravenclaw.jpg"),
    };

    return houseAssets[houseName];
  };


  return (
    <StatusHandler
      isLoading={status === "loading"}
      errorMessage={status === "failed" ? error : null}
      onRetry={handleRetry}
    >
      <View style={styles.container}>
        <FlatList
          data={houses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </StatusHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default HomeScreen;
