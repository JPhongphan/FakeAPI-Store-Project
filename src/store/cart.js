import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useProductStore } from './product'

export const useCartStore = defineStore('useCartStore', () => {

    const carts = ref([])

    const add_cart = (id, title, price, quantity = 1) => {
        const data = {
            id,
            title,
            price,
            quantity
        }

        const findIndex = carts.value.findIndex(e => e.id === data.id)
        if (findIndex > -1) {
          const updatedCart = [...carts.value]
          updatedCart[findIndex].quantity += quantity
          carts.value = updatedCart
          saveToLocalStorage()
          alert_add_cart()
        } else {
          carts.value.push(data)
          saveToLocalStorage()
          alert_add_cart()
        }
    }
      
    const loadFromLocalStorage = () => {
        if(localStorage.getItem('carts')){
            carts.value = JSON.parse(localStorage.getItem('carts'))
        }
    }
    const saveToLocalStorage = () => {
        localStorage.setItem('carts', JSON.stringify(carts.value))
    }

    const cart_show = computed(() => {
        const product_store = useProductStore()
        const currentCarts = carts.value
        
        return currentCarts.map((prd, index) => {
          const findIndexProduct = product_store.getProducts.findIndex(e => e.id == prd.id)
          if (findIndexProduct !== -1) {
            const product = product_store.getProducts[findIndexProduct]
            return {
              product: product,
              quantity: carts.value[index].quantity,
              total_product_price: product.price * carts.value[index].quantity
            }
          } else {
            return null
          }
        }).filter(item => item !== null)
      })

      const totalQuantity = computed(() => {
        return carts.value.reduce((total, cart) => total + cart.quantity, 0)
      })

    const alert_add_cart = () =>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มสินค้าลงในตะกร้าสำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const complete_buy = () =>{
      Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'ซื้อสำเร็จ',
          showConfirmButton: false,
          timer: 1500
        })
  }

    const increment_quantity = (i) => {
      carts.value[i].quantity += 1 
      saveToLocalStorage()
    }
    const decrement_quantity = (i) => {
      carts.value[i].quantity -= 1 
      saveToLocalStorage()
    }
    const remove_cart = (i) => {
      carts.value.splice(i,1)
      saveToLocalStorage()
    }

    const prd_detail_add_cart = (id, title, price, quantity) => {
      const data = {
        id,
        title,
        price,
        quantity
      }
      const findId = carts.value.find(e => e.id == data.id)

      if(findId){
        const findIndexProduct = carts.value.findIndex(e => e.id == data.id) 
        carts.value[findIndexProduct].quantity = carts.value[findIndexProduct].quantity + quantity
        saveToLocalStorage()
        alert_add_cart()
      }
      else{
          carts.value.push(data)
          saveToLocalStorage()
          alert_add_cart()
      }
    }

    const total_price = computed(() =>{
      return carts.value.reduce((sum, prd) => sum + prd.price * prd.quantity, 0)
    })
    return{carts, add_cart, loadFromLocalStorage, cart_show, totalQuantity, increment_quantity, decrement_quantity, remove_cart, prd_detail_add_cart, complete_buy, total_price }
})