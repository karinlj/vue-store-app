<script setup>
defineProps({
  image: Object,
});
</script>

<template>
  <div class="image-grid-card">
    <div>
      <a
        class="image-grid-card-link"
        rel="noopener noreferrer"
        aria-label="image-grid-card-link"
      ></a>
      <img :src="image.url" alt="" />
    </div>

    <div class="image-grid-card-content">
      <h3 class="image-text">{{ image.title }}</h3>
      <a href="/products/dam" class="link-button image-btn">{{
        image.btnText
      }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.image-grid-card {
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    max-width: 100%;
    transition: all 0.2s ease-in;
  }
}
.image-grid-card-link {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* z-index: 20; */
  color: transparent;
  text-decoration: none;
}
.image-text {
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
}
.image-btn {
  min-width: 10rem;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -15%);
  white-space: nowrap;
  @media all and (min-width: $desktop) {
    top: 85%;
  }
}
</style>
