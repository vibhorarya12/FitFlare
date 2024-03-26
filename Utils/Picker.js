import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function PickerFlatList() {
  const [selectedValue, setSelectedValue] = useState(1);

  const data = Array.from({ length: 50 }, (_, index) => index + 1); // Creating an array of numbers from 1 to 50

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, item === selectedValue && styles.selectedItem]}
      onPress={() => setSelectedValue(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        extraData={selectedValue} // Re-render the list when selectedValue changes
      />
      <Text style={styles.selectedText}>Selected Value: {selectedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#e6e6e6",
  },
  itemText: {
    fontSize: 18,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color:'white'
  },
});
