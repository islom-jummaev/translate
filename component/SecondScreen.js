import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Chip } from "react-native-paper";

const SecondScreen = ({ route, navigation }) => {
    const { word } = route.params;
    const [searchTerm, setSearchTerm] = useState("");

    const handleChipPress = (selectedItem) => {
        navigation.navigate("ThirdScreen", { selectedItem });
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const renderChips = (items) => {
        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredItems.map((item, index) => (
            <Chip
                key={`second_${item.id}_${index}`} // Ensure key is unique
                onPress={() => handleChipPress(item)}
                style={{ margin: 5 }}
            >
                {item.name}
            </Chip>
        ));
    };

    return (
        <View style={{ padding: 16 }}>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <TextInput
                        placeholder="Search..."
                        style={{
                            backgroundColor: "white",
                            borderColor: "white",
                            borderWidth: 1,
                            borderRadius: 10, // Yuvarlangan chegara qo'shildi
                            padding: 8,
                            marginBottom: 10,
                            width: "100%",
                            // TextInput kengligi to'liq ekranga to'g'ri keladi
                        }}
                        value={searchTerm}
                        onChangeText={handleSearch}
                    />
                    <Text>{word.name}</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {renderChips(word.relatedWords)}
                    </View>
                </View>
                <View style={{ padding: 10 }}></View>
            </ScrollView>
        </View>
    );
};

export default SecondScreen;
