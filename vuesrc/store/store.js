import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/Cart'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    appName: process.env.MIX_TITLE,
    baseUrl: process.env.MIX_BASE_URL,
    paramCateg: '',
    cartData: [
      // {
      //   id: '',
      //   name: '',
      //   qty: '',
      //   unitPrice: '',
      //   discount: '',
      //   total: ''
      // }
    ],
    products: [
      {
        categ: 'clothing',
        subcateg: 't-shirt',
        id: 'c-1',
        name: 'product1',
        price: 150,
        gender: 'men',
        img: 'product1'
      },
      {
        categ: 'clothing',
        subcateg: 'shirt',
        id: 'c-2',
        name: 'product2',
        price: 650,
        gender: 'men',
        img: 'product2'
      },
      {
        categ: 'clothing',
        subcateg: 'pants',
        id: 'c-3',
        name: 'product3',
        price: 158,
        gender: 'men',
        img: 'product3'
      },
      {
        categ: 'clothing',
        subcateg: 't-shirt',
        id: 'c-4',
        name: 'product3',
        price: 158,
        gender: 'men',
        img: 'product3'
      },
      {
        categ: 'shoes',
        subcateg: 'trainer',
        id: 's-1',
        name: 'product1',
        price: 120,
        gender: 'men',
        img: 'product1'
      },
      {
        categ: 'shoes',
        subcateg: 'sandal',
        id: 's-2',
        name: 'product2',
        price: 650,
        gender: 'men',
        img: 'product2'
      },
      {
        categ: 'shoes',
        subcateg: 'casual',
        id: 's-3',
        name: 'product3',
        price: 158,
        gender: 'men',
        img: 'product3'
      },
      {
        categ: 'accessories',
        subcateg: 'trainer',
        id: 'a-1',
        name: 'product1',
        price: 120,
        gender: 'men',
        img: 'product1'
      },
      {
        categ: 'accessories',
        subcateg: 'sandal',
        id: 'a-2',
        name: 'product2',
        price: 650,
        gender: 'men',
        img: 'product2'
      },
      {
        categ: 'accessories',
        subcateg: 'casual',
        id: 'a-3',
        name: 'product3',
        price: 158,
        gender: 'men',
        img: 'product3'
      }
    ]
  },
  mutations: {
    setCart: (state, cartData) => {
      state.cartData = cartData
    },
    setParamCateg: (state, paramCateg) => {
      state.paramCateg = paramCateg
    }
  },
  getters: {
    getProducts: state => state.products,
    getCartData: state => state.cartData,
    getParamCateg: state => state.paramCateg
  },
  modules: {
    cart
  }
});
