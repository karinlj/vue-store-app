<script setup>
import { ref, onMounted, computed } from "vue";
import ProductListCard from "./ProductListCard.vue";

defineProps({
  limit: Number,
  showAllProdButton: {
    type: Boolean,
    default: false,
  },
  toggleListButton: {
    type: Boolean,
    default: false,
  },
});
//ref: reactive state
const products = ref([]);
const error = ref(null);

// const showFullList = ref(false);

// const toggleFullList = () => {
//   showFullList.value = !showFullList.value;
//   console.log("showFullList", showFullList.value);
// };

// const shortList = computed(() => {
//   let products = products.value;

//   if (!showFullList.value) {
//     products = products.slice(0, 6);
//   }
//   return products.length;
// });

onMounted(async () => {
  try {
    const response = await fetch("/api/?path=/dam/mode", {});
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
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-4"
          v-for="p in products.slice(0, limit || products.length)"
          :key="p.id"
        >
          <!-- <div
          class="col-12 col-sm-6 col-lg-4"
          v-for="p in shortList"
          :key="p.id"
        > -->
          <ProductListCard :article="p" />
        </div>
      </div>
      <a href="/products" class="link-button" v-if="showAllProdButton"
        >Se alla damkläder</a
      >
      <!-- <button v-if="toggleListButton" class="btn" @click="toggleFullList">
        {{ showFullList ? "less" : "more" }}
      </button> -->
    </div>
  </section>
</template>

<style scoped></style>
