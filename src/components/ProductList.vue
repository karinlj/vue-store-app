<script setup>
import { ref, onMounted } from "vue";
import ProductListCard from "./ProductListCard.vue";
import { useRoute } from "vue-router";

const props = defineProps({
  limit: Number,
  showAllProdButton: {
    type: Boolean,
    default: false,
  },
  sectionRoute: {
    type: String,
    default: "dam",
  },
});
const products = ref([]);
const error = ref(null);

const getRoute = () => {
  const sectionRoute = props.sectionRoute;
  return sectionRoute;
};

onMounted(async () => {
  try {
    const response = await fetch("/api/?path=/" + getRoute() + "/mode", {});
    if (!response.ok) {
      throw Error("No data available");
    }
    const prodResponse = await response.json();
    products.value = prodResponse.articles;
    console.log("products.value: ", products.value);
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
          class="col-12 col-sm-6 col-md-4 col-xl-3"
          v-for="p in products.slice(0, limit || products.length)"
          :key="p.id"
        >
          <ProductListCard :article="p" />
        </div>
      </div>
      <a href="/products/dam" class="link-button" v-if="showAllProdButton"
        >Se alla damkläder</a
      >
    </div>
  </section>
</template>

<style scoped></style>
