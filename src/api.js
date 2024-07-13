const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

export const fetchProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return await response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  return await response.json();
};
