import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  item: any;
  onPress: () => void;
}

export default function ProductCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    overflow: "hidden",
  },

  imageContainer: {
    backgroundColor: "#FFFFFF",
    padding: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },

 image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000000",
  },

  description: {
    fontSize: 13,
    color: "#4B5563",
    lineHeight: 20,
    marginBottom: 12,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
});