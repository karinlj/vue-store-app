<script setup></script>
<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <!-- output page content -->
        <!-- <slot /> -->
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          quisquam facere tenetur minima rem consequatur laboriosam explicabo
          numquam impedit nulla, nisi totam veniam aspernatur consequuntur quia
          necessitatibus repellendus. Asperiores, blanditiis.
        </p>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col">footer</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
