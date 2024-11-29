import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Index";
import StatusHandler from "../../common/ui/StatusHandler";
import { getElixirs } from "../services/ElixirsApi";
import { Elixir } from "../models/ElixirsModels";
import { Searchbar } from 'react-native-paper';
import { fetchElixirs } from "../redux/ElixirSlice";

const ElixirsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { data: elixir, status, error } = useSelector((state: RootState) => state.elixirs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getElixirs());
    }
  }, [dispatch, status]);

  const handlePress = (houseId: string) => {
    // the accordion should expend
  };

  const renderItem = ({ item }: { item: Elixir }) => ();

  const handleRetry = () => {
    dispatch(fetchElixirs());
  };

  const [searchQuery, setSearchQuery] = React.useState('');


  return (
    <StatusHandler
      isLoading={status === "loading"}
      errorMessage={status === "failed" ? error : null}
      onRetry={handleRetry}
    >
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <FlatList
          data={elixir}
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

export default ElixirsScreen;
