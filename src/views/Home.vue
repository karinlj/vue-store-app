<script setup>
import ImageGrid from "../components/ImageGrid.vue";
import ProductList from "../components/ProductList.vue";

const sections = ["dam", "herr", "barn", "hem", "sport", "underkläder", "skor"];
</script>

<template>
  <main>
    <div class="container">
      <header class="page-header">
        <div class="container">
          <h1>Upptäck det senaste inom mode</h1>
        </div>
      </header>

      <section class="sections">
        <ul class="sections-list">
          <li v-for="(s, index) in sections" :key="index">
            <button class="btn section-btn">{{ s }}</button>
          </li>
        </ul>
      </section>
      <ImageGrid />

      <section class="home-product-list">
        <header class="page-header">
          <div class="container">
            <h2>Damkläder</h2>
          </div>
        </header>
        <ProductList :limit="6" :showAllProdButton="true" />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.sections-list {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  li {
    padding: 0.5rem;
    /* width: 50%;
    @media all and (min-width: $desktop) {
      width: auto;
    } */
  }
}
.section-btn {
  padding: 0.6rem 1.2rem;
}
.home-product-list {
  margin-top: 3rem;
}
</style>
