import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../src/screens/productSlice";
import { RootState } from "../../src/screens/store";

import BottomTabBar from "../../src/components/BottomTabBar";
import CategoryTabs from "../../src/components/CategoryTabs";
import FloatingButton from "../../src/components/FloatingButton";
import LogoutButton from "../../src/components/LogoutButton";
import ProductCard from "../../src/components/ProductCard";

export default function ProductsScreen() {

  const dispatch = useDispatch<any>();

  const { items, loading } = useSelector(
    (state: RootState) => state.products
  );

  const [category, setCategory] = useState("masculino");

 useEffect(() => {

    const categories =
      category === "masculino"
        ? ["mens-shirts", "mens-shoes", "mens-watches"]
        : [
            "womens-bags",
            "womens-dresses",
            "womens-jewellery",
            "womens-shoes",
            "womens-watches",
          ];

    dispatch(loadProducts(categories));

  }, [category]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoutButton />
      </View>
      <CategoryTabs
        category={category}
        setCategory={setCategory}
      />
    
      {loading && (
        <ActivityIndicator
          size="large"
          color="#2F6FED"
          style={{ marginTop: 20 }}
        />
      )}

       <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => router.push(`/product/${item.id}`)}
          />
        )}
      />

      <FloatingButton />
      <BottomTabBar />

    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  list: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 120,
  },

   header: {
    backgroundColor:"black",
    paddingTop:28,
    
  },
});