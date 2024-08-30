<script setup>
import ProductList from "../components/ProductList.vue";
</script>
<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Products</h1>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <header>
              <div class="container">
                <h3>Some content</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus commodi sint officiis obcaecati?
                </p>
              </div>
            </header>
          </div>
          <div class="col-12 col-md-9 col-lg-10">
            <ProductList :limit="3" :showButton="true" />
          </div>
        </div>
        <!-- output page content -->
        <!-- <slot /> -->
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <ul>
              <router-link to="/">Home</router-link>
              <router-link to="/products">Products</router-link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
