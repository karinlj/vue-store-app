<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  article: Object,
});

const imageUrl = () => {
  let imageUrlBase = props.article.imageFront.card;
  return imageUrlBase.replace("{size}", "300");
};
</script>
<template>
  <div class="product-card">
    <a
      class="product-card-link"
      rel="noopener noreferrer"
      aria-label="product-card-link"
    ></a>

    <div class="product-card-image-container">
      <img :src="imageUrl()" alt="" class="product-card-image" />
    </div>

    <section class="product-card-content-container">
      <h3>{{ article.name }}</h3>
      <h4 class="sub-brand">{{ article.subBrand }}</h4>

      <!-- <h3>{{ excerpt }}</h3>
      <button class="btn-small" @click="toggleExcerpt">
        {{ showFullName ? "Less" : "More" }}
      </button> -->
      <div class="product-card-price">
        <p>{{ article.currentPrice }} <span>sek</span></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.product-card {
  transition: all 0.25s ease-out;
  cursor: pointer;
  background: $cardcolorBg;
  height: auto;
  position: relative;
  margin-bottom: 4rem;
  /* @media all and (min-width: $mobileM) {
    height: 28rem;
  }
  @media all and (min-width: $desktopL) {
    height: 31rem;
  } */
  &:hover {
    div,
    h3,
    h4,
    p {
      color: $linkcolor;
      transition: 0.25s ease-in-out;
    }
    a {
      color: transparent;
    }
  }
  .product-card-link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* z-index: 20; */
    color: transparent;
    text-decoration: none;
    /* &:focus {
      outline-offset: 5px;
      border-radius: 1px;
    } */
  }
  .product-card-image-container {
  }
  .product-card-image {
    width: 100%;
    object-fit: cover;
    height: 100%;
    max-width: 100%;
    transition: all 0.2s ease-in;
    &:hover {
      width: 110%;
      max-width: 110%;
      height: auto;
      /* object-fit: none; */
    }
  }

  .product-card-content-container {
    padding: 1rem;
    /* min-height: 15rem; */
    min-height: 7rem;
  }
  .sub-brand {
    font-weight: 300;
    margin-top: 0.5rem;
  }
  .product-card-price {
    font-size: 1rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
}
</style>
