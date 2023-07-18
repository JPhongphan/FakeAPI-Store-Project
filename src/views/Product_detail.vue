<template>
    <Load v-if="!loadproduct"/>
    <div class="container" v-else>
        <div class=" d-gap d-flex flex-row flex-wrap  justify-content-center mt-5 mb-5" >
            <div class="cus-container d-flex flex-row justify-content-center align-items-center cus-container-shadow">
                <img class="img-detail" :src="getProduct.image" alt="">
            </div>
            <div class="cus-container cus-font">
                <h1>{{getProduct.title}}</h1>
                <p>{{getProduct.category}}</p>
                <hr>
                <h2>฿ {{getProduct.price}}</h2>
                <p>{{getProduct.description}}</p>
                <div class="d-flex flex-row cus-font align-items-center" style="gap: 10px;">
                    <p>จำนวน: </p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-dark" @click="increment_quantity()"><i class="bi bi-plus-lg"></i></button>
                        <button type="button" class="btn btn-white" disabled>{{quantity}}</button>
                        <button type="button" class="btn btn-dark" @click="decrement_quantity()" :disabled="quantity === 1"><i class="bi bi-dash-lg"></i></button>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center" style="gap: 20px;">
                    <button class="bnt-custom " style="width: 65%; height: 45px;" type="button" @click="cart_store.prd_detail_add_cart(getProduct.id, getProduct.title, getProduct.price, quantity)">หยิบใส่ตะกร้า<i class="icon-detail bi bi-cart-plus"></i></button>
                    <button class="bnt-custom" style="width: 65%; height: 45px;" type="button" @click="cart_store.complete_buy()">ซื้อสินค้า</button>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import Load from '../components/Loading.vue'
import { useCartStore } from '../store/cart';
const cart_store = useCartStore()
//สร้างตัวแปรเก็บเป็น object
const getProduct = ref({})

const loadproduct = ref(false)

const route = useRoute()

const quantity = ref(1)
const increment_quantity = () => {
    quantity.value++
}
const decrement_quantity = () => {
    quantity.value--
}
//สร้างฟังก์ชันเรียก API
const product_detail = async () => {
    await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
    .then((response) => {
        getProduct.value = response.data
        loadproduct.value = true
    }).catch((err) => {
        console.log(err)
    })
}
onMounted(() => product_detail())
    console.log(route.params.id)

</script>
<style>
/* body{
    background-color: #F8F8F8;
} */
.img-detail{
    width: 70%;
}
.bnt-custom{
    font-size: 16px;
    margin: 10px 0px 10px 0px;
    color: white;
    background-color: black;
    border-radius: 10px;
}
.d-gap{
    gap: 15px;
}
.cus-container{
    border-radius: 20px;
    gap: 2px;
    padding: 20px;
    width: 500px;
    background-color: rgb(255, 255, 255);
}
.cus-container-shadow{
    box-shadow: 1px 1px 3px #e0e0e0;
}
.cus-font{
    margin-bottom: 10px;
}
.cus-font h1{
    margin: 10px 0px 10px 0px;
    font-size: 24px;
}
.cus-font h2{
    margin: 10px 0px 10px 0px;
    font-weight: bold;
    font-size: 24px;
}
.cus-font p{
    margin: 10px 0px 10px 0px;
    font-size: 16px;
    color: #5f5f5f;
}
.icon-detail{
    font-size: 18px;
    padding: 0px 0px 0px 20px;
}
</style>