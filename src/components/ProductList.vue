<script setup>
import { ref, onMounted } from "vue";
import ProductListCard from "./ProductListCard.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
const products = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(
      // "http://localhost:3000/articles",
      // "//www.ellos.se/api/articles/?path=/dam/mode",
      "/api/?path=/dam/mode",
      {}
    );
    if (!response.ok) {
      throw Error("No data available");
    }

    const firstResponse = await response.json();
    products.value = firstResponse.articles;

    console.log("get products: ", products.value);
  } catch (err) {
    error.value = err.message;
    console.log("Error: ", error.value);
  }
});
</script>

<template>
  <section class="product-list">
    <header>
      <div class="container">
        <h1>Damkläder</h1>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4" v-for="p in products" :key="p.id">
          <ProductListCard :article="p" />
          <!-- <ProductListCard
          v-for="p in products.slice(0, limit || products.length)"
          :key="p.id"
          :article="p"
        /> -->
        </div>
      </div>
    </div>
  </section>
  <section>
    <button class="btn" v-if="showButton">View all products</button>
  </section>
</template>

<style scoped></style>
