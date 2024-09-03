<script setup></script>
<template>
  <header class="header-main" id="header-main">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <div class="header-main-items">
            <nav class="header-nav">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products/dam">Products</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col no-gutter">
          <span class="header-logo">
            <router-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 87 38"
                class="logo"
              >
                <path
                  d="M81.921 19.368c.332.036 3.33 0 3.58 0 .193-.771-.396-7.929-10.173-7.95-5.476-.012-9.89 2.31-9.805 7.204.102 6.057 7.324 6.718 9.075 7.049 1.746.331 8.157 1.493 8.157 4.313 0 3.444-2.836 4.634-6.245 4.726-2.996.08-7.075-1.41-7.41-5.722h-4.245c.251 3.98 3.082 8.957 11.073 8.988 7.99.03 11.072-3.1 11.072-7.992 0-5.562-6.832-7.195-8.741-7.537-1.595-.284-8.158-.84-8.158-3.991 0-2.085 1.063-3.776 5.227-3.897 5.66-.166 6.511 3.399 6.593 4.809zM51.734 34.876c-4.884 0-8.24-4.4-8.24-10.45 0-5.44 3.689-9.85 8.24-9.85 4.552 0 8.24 4.41 8.24 9.85 0 5.995-3.355 10.45-8.24 10.45zm0-23.585c-6.762 0-12.244 5.882-12.244 13.136 0 7.945 5.037 13.548 12.244 13.548 7.317 0 12.243-5.685 12.243-13.548 0-7.254-5.481-13.136-12.243-13.136zM33.526 0h4.107v37.98h-4.107V0zM26.86.003h4.105v37.98h-4.105V.002zM4.441 22.678c1.598-9.497 13.45-11.92 16.317 0-.557.054-15.595.054-16.317 0zm8.158-11.326c-6.493 0-12.66 6.08-12.599 12.99C.057 30.537 3.605 37.947 12.817 38c7.603.045 10.881-6.006 11.602-8.772 0 0-3.782-.11-4.337 0-.222.666-2.326 5.74-7.265 5.684-6.16-.068-8.599-7.363-8.599-9.02h20.868c.221-9.565-5.994-14.54-12.487-14.54z"
                ></path>
              </svg>
            </router-link>
          </span>
        </div>
        <div class="col">
          <div class="header-main-items right">
            <ul>
              <li>
                <i class="pi pi-search"></i><span class="search-text">Sök</span>
              </li>
              <li><i class="pi pi-shopping-cart"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.header-main {
  background: $themecolorBeigeBg;
  position: relative;
  padding: 1.5rem 0;
  .no-gutter {
    padding: 0;
  }
}
.router-link-exact-active {
  color: $linkcolorActive;
}
.header-nav {
  a {
    margin: 0 0.2rem -1px 0.2rem;
    transition: all 0.5s ease;
    border-bottom: 1px solid transparent;
    font-size: 0.8rem;
    display: block;
    color: $textcolor;
    text-decoration: none;
    letter-spacing: 0.6px;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid $textcolor;
      color: $linkcolorActive;
    }
    @media all and (min-width: $mobileS) {
      margin: 0 0.4rem -1px 0.4rem;
      font-size: 0.9rem;
    }
    @media all and (min-width: $mobileM) {
      margin: 0 0.8rem -1px 0.8rem;
    }
  }
  .router-link-exact-active {
    border-bottom: 1px solid $textcolor;
  }
}
ul {
  display: flex;
  li {
    margin-right: 0.3rem;
    padding: 0.5rem 0;
    @media all and (min-width: $mobileS) {
      margin-right: 0.8rem;
    }
  }
}
.search-text {
  display: none;
  @media all and (min-width: $desktop) {
    display: inline-block;
    margin-left: 0.5rem;
  }
}
.header-main-items {
  display: flex;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
}
.header-logo {
  position: absolute;
  left: 50%;
  top: -3px;
  transform: translateX(-50%);
  .logo {
    color: $textcolor;
    fill: $textcolor;
    height: 1.8rem;
    width: 4rem;
    @media all and (min-width: $mobileM) {
      height: 2.3rem;
      width: 6rem;
    }
  }
}
i {
  font-size: 1rem;
  margin-left: 0.5rem;
}
.pi-shopping-cart {
  font-size: 1.1rem;
}
</style>
