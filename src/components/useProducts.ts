import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore();

  return {
    //getters
    // products: computed(() => store.getters["products/getProducts"]),
    products: [],
    // isLoading: computed(() => store.getters["products/getIsLoading"]),
    // product: computed(() => store.getters["products/getProduct"]),

    // //actions
    // fetchProducts: () => store.dispatch("products/fetchProducts"),
    // fetchProductById: (productId: number) =>
    //   store.dispatch("products/fetchProductById", productId),
  };
};

export default useProducts;
