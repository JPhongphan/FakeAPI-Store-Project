import { defineStore } from 'pinia';
import axios from 'axios'
import {ref, computed} from 'vue'

export const useProductStore = defineStore('useProductStore', () => {
    //เก็บข้อมูลจาก API ลงตัวแปร products
    const getProducts = ref([])
    const input = ref('')
    const list_Product = computed(() => getProducts.value)

    //
    const load_Products = computed(() => getProducts.value.length > 0)
    //ฟังก์ชันเรียกใช้ API ผ่าน axios
    const fetch_products = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response) => {
            getProducts.value = response.data
            console.log(getProducts.value)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    const search_products = computed(() => {
        if(input.value.length < 3) return getProducts.value

        return getProducts.value.filter((prd) => {
            if(prd.title.toLowerCase().includes(input.value.toLowerCase()) == false){
                return false
            }
            else{
                return prd.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })
    
    return {getProducts, fetch_products, list_Product, load_Products, search_products, input}
})