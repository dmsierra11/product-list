<template>
  <div class="home">
    <ProductList msg="Lista de Productos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "@/components/ProductList.vue"; // @ is an alias to /src

interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductList,
  },
  setup() {
    const products: Array<Product> = [
      {
        id: 1,
        title: "iPad 4 Mini",
        price: 500.01,
        inventory: 2,
      },
      {
        id: 2,
        title: "H&M T-Shirt White",
        price: 10.99,
        inventory: 10,
      },
      {
        id: 3,
        title: "Charli XCX - Sucker CD",
        price: 19.99,
        inventory: 5,
      },
    ];
    return { products };
  },
});
</script>
