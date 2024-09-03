<script setup>
import ImageGrid from "../components/ImageGrid.vue";
import ProductList from "../components/ProductList.vue";

const activeSections = ["dam", "herr"];
const passiveSections = ["barn", "hem", "sport", "underkläder", "skor"];
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
          <li v-for="(s, index) in activeSections" :key="index">
            <router-link class="link-button" :to="`/products/${s}`">{{
              s
            }}</router-link>
          </li>
        </ul>
        <ul class="sections-list">
          <li
            v-for="(s, index) in passiveSections"
            :key="index"
            class="passive-sections"
          >
            <router-link class="link-button" to="/">{{ s }}</router-link>
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
.sections {
  display: flex;
  justify-content: center;
}
.sections-list {
  display: flex;
  margin-bottom: 2rem;
  li {
    padding: 0.5rem;
  }
}
.passive-sections {
  pointer-events: none;
  display: none;
  @media all and (min-width: $mobileM) {
    display: block;
  }
}
.section-btn {
  padding: 0.6rem 1.2rem;
}
.home-product-list {
  margin-top: 3rem;
}
</style>
