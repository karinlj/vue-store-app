<script setup>
import { ref, onMounted } from "vue";
import ImageCard from "./ImageCard.vue";

const images = [
  {
    id: 1,
    title: "New Arrivals",
    btnText: "Shop New Arrivals",
    url: "https://assets.ellosgroup.com/i/ellos/2414_swipe_ellos-studio_6?$ec$&w=560&fmt=webp",
  },
  {
    id: 3,
    title: "",
    btnText: "Get inspired",
    url: "https://assets.ellosgroup.com/i/ellos/2433_swipe_ellos-studio?$ec$&w=560&fmt=webp",
  },
  {
    id: 2,
    title: "",
    btnText: "Shop Now",
    url: "https://assets.ellosgroup.com/i/ellos/24-04_swipe_tamaris?$ec$&w=560&fmt=webp",
  },

  {
    id: 4,
    title: "",
    btnText: "Shop News",
    url: "https://assets.ellosgroup.com/i/ellos/2433_swipe_joelle?$ec$&w=560&fmt=webp",
  },
];
</script>

<template>
  <section class="image-grid">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6" v-for="i in images" :key="i.id">
          <ImageCard :image="i" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
