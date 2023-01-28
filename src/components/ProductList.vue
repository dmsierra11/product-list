<template>
  <div>
    <h1>{{ `${msg}: ${products.length}` }}</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <ProductItem :msg="product.title" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProductItem from "@/components/ProductItem.vue";

interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

export default defineComponent({
  name: "ProductList",
  props: {
    msg: String,
  },
  components: {
    ProductItem,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
