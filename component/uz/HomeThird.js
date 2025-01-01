import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import { Appbar, Chip } from "react-native-paper";
import { data } from "./uz";

const HomeThird = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [trending] = useState(data);
  const [filteredMovies, setFilteredMovies] = useState(trending);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = trending.filter((movie) =>
      movie.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const renderChips = (items) => {
    return items.map((item, index) => (
      <Chip
        key={`home_${item.id}_${index}`}
        onPress={() => handleChipPress(item)}
        style={styles.chip}
      >
        {item.name}
      </Chip>
    ));
  };

  const handleChipPress = (word) => {
    navigation.navigate("SecondScreen", { word });
  };

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          style={styles.textInput}
          placeholder="qidirish..."
          placeholderTextColor="#888" // Light grey placeholder text
          accessibilityLabel="Search"
          accessibilityHint="Type your search query here"
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View style={styles.chipContainer}>
          {renderChips(filteredMovies)}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#F2F2F2",
    height: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    fontWeight: "bold",
    justifyContent: 'center', // Center the TextInput vertically
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#fff", // Light grey border
    borderWidth: 1,
 // Rounded corners
    paddingHorizontal: 12, // Horizontal padding inside the TextInput
    paddingVertical: 8, // Vertical padding inside the TextInput
    width: "100%", // Full width of the Appbar
    fontSize: 16, // Adjusted font size for better readability
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow effect
  },
  container: {
    backgroundColor: "#F2F2F2", // Set the background color of the entire container
    flex: 1,
    
  },
  chipContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  chip: {
    margin: 5,
  },
});

export default HomeThird;
