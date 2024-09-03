<script setup>
import ProductList from "../components/ProductList.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const prodSectionRoute = route.params.filter;
</script>

<template>
  <main class="product-page">
    <div class="container">
      <header class="page-header">
        <div class="container">
          <h1>{{ prodSectionRoute === "dam" ? "Damkläder" : "Herrkläder" }}</h1>
        </div>
      </header>
      <div class="row">
        <div class="col-lg-3 col-xl-2">
          <header class="product-page-header">
            <div class="container">
              <h2>Välkommen</h2>
              <p>
                På Ellos handlar du trendsäkert mode för alla tillfällen. Här
                hittar du allt från klänningar till snygga skor och
                skönhetsprodukter från mängder av varumärken. Vi har även ett
                brett sortiment av våra egna varumärken. Hos Ellos hittar du det
                mesta som du kan behöva. Handla enkelt och snabbt online.
              </p>
            </div>
          </header>
        </div>
        <div class="col-12 col-lg-9 col-xl-10">
          <ProductList
            :showAllProdButton="false"
            :sectionRoute="prodSectionRoute"
          />
        </div>
      </div>
      <section class="to-top">
        <a href="#header-main" class="link-button">To top</a>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets//styles//variables.scss";

.product-page-header {
  margin-bottom: 2rem;
}
.to-top {
  display: flex;
  justify-content: flex-end;
}
</style>
