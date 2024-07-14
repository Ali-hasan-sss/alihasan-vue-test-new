import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
  },
  getters: {
    cartItemCount: (state) => state.cartItems.length,
    cartTotal: (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    getCartItems: (state) => state.cartItems,
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
        item.quantity = 1;
      }
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({ commit }, itemId) {
      commit("REMOVE_FROM_CART", itemId);
    },
    updateQuantity({ commit }, payload) {
      commit("UPDATE_QUANTITY", payload);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
  modules: {},
});
