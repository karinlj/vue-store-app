<script setup>
import ProductList from "../components/ProductList.vue";
</script>
<template>
  <main>
    <div class="container">
      <header class="page-header">
        <div class="container">
          <h1>Damkläder</h1>
        </div>
      </header>
      <div class="row">
        <div class="col-lg-2">
          <header>
            <div class="container">
              <h3>Some content</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                commodi sint officiis obcaecati?
              </p>
            </div>
          </header>
        </div>
        <div class="col-12 col-md-9 col-lg-10">
          <ProductList :showAllProdButton="false" />
        </div>
      </div>
      <!-- output page content -->
      <!-- <slot /> -->
      <section class="to-top">
        <a href="#header-main" class="link-button">To top</a>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.to-top {
  display: flex;
  justify-content: flex-end;
}
</style>
