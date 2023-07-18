<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://sv1.picz.in.th/images/2023/07/18/MQMfwf.png" class="d-block" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://sv1.picz.in.th/images/2023/07/18/MQMhoa.png" class="d-block " alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://sv1.picz.in.th/images/2023/07/18/MQMT58.png" class="d-block " alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container mt-5">
      <div class="row mb-5" v-for="(Category, index) in productCategory" :key="index">
        <div class="col-12 d-flex justify-content-between align-items-end align-self-end">
          <h3 style="padding: 0px; margin: 0px;">{{ Category }}</h3>
          <p style="padding: 0px; margin: 0px;">ดูสินค้าทั้งหมด</p>
        </div>
        <div class="col">
          <div class="mt-2 d-flex flex-wrap justify-content-center align-items-center">
            <div class="me-4 ms-3" v-for="(products, index) in filteredProducts(Category).slice(0, displayLimit)" :key="index" style="margin-right: 10px;">
              <div class="card card-category " style="width: 17rem; height: 30rem;">
                <img :src="products.image" class="card-img-top p-4 img-products" alt="...">
                <div class="p-3">
                  <p :class="{ 'multi-line': products.title.length > 20 }">{{ products.title }}</p>
                  <p class="card-text" id="product_price">ราคา : {{ products.price }}</p>
                  <p class="card-text" id="product_count">จำนวนที่เหลือ : {{ products.rating.count }}</p>
                </div>
                <div class="btn-center ">
                  <router-link :to="`/Product_detail/${products.id}`" class="btn btn-dark m-1" style="width: 45%;"
                    type="button">รายละเอียด</router-link>
                  <button class="btn btn-dark m-1" style="width: 45%;" type="button"
                    @click="cartStore.add_cart(products.id, products.title, products.price)">ใส่ตะกร้า</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import Loading from '../components/Loading.vue';
  import { useProductStore } from '../store/product';
  import { computed } from 'vue';
  import { useCartStore } from '../store/cart';
  
  export default {
    methods: {
      filteredProducts(category) {
        return this.productList.filter((product) => product.category === category);
      },
    },
    components: {
      Loading,
    },
    setup() {

    },
    data() {
      return {
        cartStore: useCartStore(),
        productStore: useProductStore(),
        productCategory: {
          category1: "men's clothing",
          category2: "women's clothing",
          category3: "jewelery",
          category4: "electronics",
        },
        displayLimit: 4,
      };
    },
    computed: {
      productList: {
        get() {
          return this.productStore.list_Product;
        },
      },
      search_products: {
        get() {
          return this.productStore.search_products;
        },
      }
    },
  };
  </script>
  <style>
  .carousel-item img {
    width: 100%;
  }
  </style>