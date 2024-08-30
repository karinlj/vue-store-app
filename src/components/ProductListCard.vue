<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  article: Object,
});

//ref = reactive
const showFullName = ref(false);

const toggleExcerpt = () => {
  showFullName.value = !showFullName.value;
};

const imageUrl = () => {
  let imageUrlBase = props.article.imageFront.card;
  return imageUrlBase.replace("{size}", "300");
};

const excerpt = computed(() => {
  let prodName = props.article.name;
  if (!showFullName.value) {
    prodName = prodName.substring(0, 10) + "...";
  }
  return prodName;
});
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
      <h3>{{ excerpt }}</h3>
      <button class="btn-small" @click="toggleExcerpt">
        {{ showFullName ? "Less" : "More" }}
      </button>
      <section class="product-card-meta">
        <div class="price">
          <span>Price:</span>
          <p>: {{ article.currentPrice }}</p>
        </div>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.product-card {
  transition: all 0.25s ease-out;
  // color: ${colors.textcolor_dark};
  background: $cardcolorBg;
  height: auto;
  position: relative;
  margin-bottom: 4rem;
  /* border-radius: $themeBorderRadius;
  box-shadow: $themeBoxShadow; */
  /* @media all and (min-width: $mobileM) {
    height: 28rem;
  }
  @media all and (min-width: $desktopL) {
    height: 31rem;
  } */
  &:hover {
    div,
    h3,
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
    /* top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
    /* z-index: 20; */
    color: transparent;
    text-decoration: none;
    &:focus {
      /* outline: solid 2px $textcolor_dark; */
      outline-offset: 5px;
      border-radius: 1px;
    }
  }
  .product-card-image-container {
    /* border-top-left-radius: $themeBorderRadius;
    border-top-right-radius: $themeBorderRadius; */
  }
  .product-card-image {
    /* border-top-left-radius: $themeBorderRadius;
    border-top-right-radius: $themeBorderRadius; */
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
  .product-card-meta {
    div {
      display: flex;
      flex-wrap: wrap;
      font-size: 0.7rem;
      margin-right: 0.5rem;
      /* color: $text_gray; */
      span {
        margin-right: 0.5rem;
        letter-spacing: 0.1px;
        font-weight: 500;
      }
    }
  }
}
</style>
