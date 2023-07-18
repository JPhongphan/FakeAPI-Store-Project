<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">FakeAPI-Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav mx-auto my-2 my-lg-2 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item me-5 ms-5">
                        <router-link to = '/' class="nav-link active" aria-current="page" href="#">หน้าแรก</router-link>
                    </li>
                    <li class="nav-item me-5 ms-5">
                        <router-link to = '/Products' class="nav-link active" aria-current="page" href="#">สินค้าทั้งหมด</router-link>
                    </li>
                    <li class="nav-item me-5 ms-5">
                        <router-link to = '/About' class="nav-link active" aria-current="page" href="#">เกี่ยวกับ</router-link>
                    </li>
                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="ค้นหาสินค้า" aria-label="Search" v-model="productStore.input">
                </div>
                <div class="nav-login">
                    <hr class="vertical-line">
                    <router-link to="/Cart_page">
                        <i class="bi bi-basket-fill nav-icon"></i>
                        <div class="num-cart" v-if="totalQuantity">
                        <span>{{ totalQuantity }}</span>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
    import { computed } from 'vue';
    import {useCartStore} from '../store/cart.js'
    import { useProductStore } from '../store/product';

    const cart_store = useCartStore()
    
    const productStore = useProductStore()

    const totalQuantity = computed(() => cart_store.totalQuantity)
</script>
<style>

</style>
