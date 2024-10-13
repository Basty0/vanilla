// Fonctions pour interagir avec l'API Laravel
const API_URL = "http://127.0.0.1:8000/api";

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem("token");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  const response = await fetch(`${API_URL}${url}`, options);
  if (!response.ok) {
    throw new Error("Erreur réseau");
  }
  return response.json();
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Échec de la connexion");
  }
  return response.json();
}

export async function register(name, email, password, passwordConfirmation) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  });
  if (!response.ok) {
    throw new Error("Échec de l'inscription");
  }
  return response.json();
}

export async function getProducts(page = 1) {
  return fetchWithAuth(`/products?page=${page}`);
}

export async function getProductDetails(id) {
  return fetchWithAuth(`/products/${id}`);
}

export async function getProductsByCategory(categoryId, page = 1) {
  return fetchWithAuth(`/categories/${categoryId}/products?page=${page}`);
}

export async function getUserProfile() {
  return fetchWithAuth("/user");
}

export async function updateUserProfile(name, email) {
  return fetchWithAuth("/user", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
}

export async function getUserOrders() {
  return fetchWithAuth("/orders");
}

export async function getOrderDetails(id) {
  return fetchWithAuth(`/orders/${id}`);
}

export async function getCart() {
  return fetchWithAuth("/cart");
}

export async function updateCartItem(itemId, quantity) {
  return fetchWithAuth(`/cart/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
}

export async function removeCartItem(itemId) {
  return fetchWithAuth(`/cart/${itemId}`, { method: "DELETE" });
}

export async function checkout() {
  return fetchWithAuth("/checkout", { method: "POST" });
}

export async function getUserReviews() {
  return fetchWithAuth("/reviews");
}

export async function deleteReview(reviewId) {
  return fetchWithAuth(`/reviews/${reviewId}`, { method: "DELETE" });
}

export async function addReview(reviewData) {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reviewData),
  });
}

export async function getProductReviews(productId) {
  return fetchWithAuth(`/products/${productId}/reviews`); // Updated to match the new route
}

export async function createOrder(products) {
  return fetchWithAuth(`/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products }),
  });
}

// Ajoutez d'autres fonctions pour interagir avec l'API
