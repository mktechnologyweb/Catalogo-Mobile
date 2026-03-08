import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProductsByCategory = async (category: string) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data.products;
};

export const fetchProductsByCategories = async (categories: string[]) => {

  let allProducts: any[] = [];

  for (const category of categories) {
    const products = await fetchProductsByCategory(category);
    allProducts = [...allProducts, ...products];
  }

  return allProducts;
};

export const fetchProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};