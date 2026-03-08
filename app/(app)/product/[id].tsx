import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { fetchProductById } from "../../../src/services/api";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id as string);
        setProduct(data);
      } catch (err) {
        setError("Erro ao carregar produto");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2F6FED" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>  
            </View>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={26} color="#000" />
      </TouchableOpacity>

      
      <View style={styles.containerImage}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
 
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>R$ {product.price}</Text>
          <Text style={styles.oldPrice}>R$ {oldPrice}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  backButton: {
    marginTop: 50,
    marginLeft: 16,
    paddingBottom:20,
  },
  containerImage:{
   backgroundColor: "#DADADA33",
  },
  
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 10,
  },

  content: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B20000",
    marginRight: 10,
  },

  oldPrice: {
    fontSize: 16,
    color: "#656565",
    textDecorationLine: "line-through",
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#656565",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

   header: {
    backgroundColor:"black",
    paddingTop:28,
    
  },

});