import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem (itemData) {
    const { item } = itemData;
    const { title, color } = item;

    return (
        <CategoryGridTile title={title} color={color} />
    )
}

export default function Categories () {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}