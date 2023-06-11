import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  allProducts: [],
  getAllProducts: async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/all");
      set({ allProducts: response.data.products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  oneProduct: [],
  getOneProduct: async (id) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/products/one?one=" + id
      );
      set({ oneProduct: response.data.product });
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
  token: undefined,
  login: async (token) => {
    try {
      set({ token: token });
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  },
  logout: async () => {
    try {
      set({ token: undefined });
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  },
  user: [],
  getUser: async (email) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/one?one=" + email
      );
      set({ user: response.data.user });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
  selectCheckboxes: [],
  setSelectCheckboxes: (checkboxes) =>
  set((state) => ({
  selectCheckboxes: checkboxes,
    })),
  deleteProducts: async (dataDelete) => {
    try {
        await axios.delete('http://localhost:3000/products/delete', dataDelete);
        console.log('borrado con exito');
      } catch (err) {
        console.log(err);
    }
  },
  createProduct: async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products/create",
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error(error.message);
    }
  },

}));

export default useStore;
