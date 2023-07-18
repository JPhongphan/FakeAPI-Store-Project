<template>
    <div class="container mt-5" style="margin-bottom: 270px;">
        <div class="row">
            <div class="col-12">
                <div class="d-flex">
                    <h1 style="font-size: 24px;">ตะกร้าสินค้า</h1>
                    <h1 style="color: red; font-size: 24px; padding: 0 5px;">(<span>{{ totalQuantity }}</span>)</h1>
                </div>
            </div>
            <div class="col-lg-8 mb-4 mb-lg-0 col-12">
                <div class="row border-bottom py-2" v-for="(carts, index) in cart" :key="index">
                    <div class="col-md-6">
                        <div class="d-flex justify-content-start cart-img">
                            <img class="" :src="carts.product.image">
                            <router-link :to ="`/Product_detail/${carts.product.id}`" style="padding: 0 10px;">{{ carts.product.title }}</router-link>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="d-flex  align-items-center justify-content-between">
                            <div  style="text-align: end; width: 100px;">
                                <p style="font-size: 16px; margin: 0 0 10px 0">฿ {{ carts.product.price }}</p>
                                <p style="font-size: 12px; margin: 0">รวม ฿ {{ carts.total_product_price.toFixed(2) }}</p>
                            </div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark" @click="cart_store.increment_quantity(index)"><i class="bi bi-plus-lg"></i></button>
                                <button type="button" class="btn btn-white" disabled>{{carts.quantity}}</button>
                                <button type="button" class="btn btn-dark" @click="cart_store.decrement_quantity(index)" :disabled="carts.quantity === 1"><i class="bi bi-dash-lg"></i></button>
                            </div>
                            <button class="icon-trash" @click="cart_store.remove_cart(index)"><i class="bi bi-trash cart-icon"></i></button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-lg-4">
                <div class="d-flex flex-column cart-total-container" style="gap: 5px;">
                        <div class="d-flex flex-column .align-items-center" style="gap: 5px; background-color: white; padding: 10px; border-radius: 15px;">
                            <div class="d-flex flex-row justify-content-between ">
                                <p>ยอดรวม</p>
                                <p>฿ {{cart_store.total_price.toFixed(2)}}</p>
                            </div>
                            <div class="d-flex flex-row justify-content-between" style="color: red;">
                                <p>ส่วนลด</p>
                                <p>-฿ 00.00</p>
                            </div>
                            <hr>
                            <div class="d-flex flex-row justify-content-between">
                                <p>ยอดรวมสุทธิ</p>
                                <p>฿ {{cart_store.total_price.toFixed(2)}}</p>
                            </div>
                        </div>
                        <div class="d-grid col">
                            <button class="btn btn-dark" type="button" @click="cart_store.complete_buy()">ดำเนินการสั่งซื้อ</button>
                        </div>
                    </div>
            </div>
            <div class="col-12 pt-2">
                <router-link to="/">ดูสินค้าอื่นๆ</router-link>
            </div>
        </div>
    </div>
</template>
<script setup>

    import { computed } from 'vue';
    import {useCartStore} from '../store/cart.js'
    import { useProductStore } from '../store/product'
    
    const productStore = useProductStore()
    const cart_store = useCartStore()
    const cart = computed(() => cart_store.cart_show)
    const totalQuantity = computed(() => cart_store.totalQuantity)
    

</script>
<style>
.cart-total-container {
    background-color: #F8F8F8;
    border-radius: 15px;
    padding: 10px 15px;
    box-shadow: 1px 1px 6px #e0e0e0;
}
.cart-total-container p{
    padding: 0;
    margin: 0;
}
.cart-title h1 {
    font-size: 24px;
}

.cart-title h2 {
    font-size: 16px;
}

.cart-font {
    margin: 0px;
}

.cart-container {
    width: 850px;
}

/* .sub-cart-container {} */

.cart-img img{
    margin-bottom: 10px;
    width: 80px ;
    height: 80px ;
}

.cart-icon {
    font-size: 16px;

}
.icon-trash{
    background-color: white;
    border: none;
}
</style>