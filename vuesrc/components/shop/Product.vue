<template>
    <div class="container">
        <div class="row">
            <!-- <div class="col-lg-3">
                <filter-category />
                <filter-brand />
                <filter-color />
            </div> -->
            <div class="col-lg-12">
                <!-- <app-title /> -->
                <div class="row products">
                    <div class="col-lg-4 col-md-6" v-for="(prod, i) in displayProd" :key="i">
                        <div class="product">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <router-link :to="{ name: 'Detail', params: { pid: prod.id, categ: categParam, subcateg: subcategParam, gender: genderParam } }" >
                                            <img :src="imgPath + `img/${prod.img}.jpg`" alt="" class="img-fluid">
                                        </router-link>
                                    </div>
                                    <div class="back">
                                        <router-link :to="{ name: 'Detail', params: { pid: prod.id, categ: categParam, subcateg: subcategParam, gender: genderParam } }">
                                            <img :src="imgPath + `img/${prod.img}_2.jpg`" alt="" class="img-fluid">
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <router-link :to="{ name: 'Detail', params: { pid: prod.id, categ: categParam, subcateg: subcategParam, gender: genderParam } }" class="invisible">
                                <img :src="imgPath + `img/${prod.img}.jpg`" alt="" class="img-fluid">
                            </router-link>
                            <div class="text">
                                <h3>
                                    <router-link :to="{ name: 'Detail', params: { pid: prod.id, categ: categParam, subcateg: subcategParam, gender: genderParam } }">{{ prod.name }}</router-link>
                                </h3>
                                <p class="price"> 
                                    <del></del>${{ prod.price }}
                                </p>
                                <p class="buttons">
                                    <router-link :to="{ name: 'Detail', params: { pid: prod.id, categ: categParam, subcateg: subcategParam, gender: genderParam } }" class="btn btn-outline-secondary">
                                        View detail
                                    </router-link>
                                    <!-- <router-link :to="{ name: 'Cart' }" class="btn btn-primary">
                                        <i class="fa fa-shopping-cart"></i>
                                        Add to cart
                                    </router-link> -->
                                    <button class="btn btn-primary" @click.prevent="addCart(prod)">
                                        <i class="fa fa-shopping-cart"></i>
                                        Add to cart
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Category from './Category.vue'
import Brand from './Brand.vue'
import Color from './Color.vue'
import Title from './Title.vue'

import { mapGetters } from 'vuex';

export default {
    components: {
        filterCategory: Category,
        filterBrand: Brand,
        filterColor: Color,
        appTitle: Title
    },

    computed:{
        ...mapGetters({
            products: 'getProducts',
            cart: 'getCartData',
            parame: 'getParamCateg'
        })
    },

    watch: {
        // '$route.params.gender'(val) {
        //     console.log('ggg');
        // }
        parame(val) {
            // console.log(this.parame);
            this.displayProd = this.products.filter(data => {
                return data.gender == this.parame.gender && data.categ == this.parame.categ && data.subcateg == this.parame.subcateg
            })
        } 
    },

    props: ['gender', 'categ'],

    data() {
        return {
            imgPath: '',
            genderParam: '',
            categParam: '',
            subcategParam: '',
            displayProd: [],
            jcp: ''
        }
    },

    methods: {
        getData() {
            this.displayProd = this.products.filter(data => {
                return data.gender == this.genderParam && data.categ == this.categParam && data.subcateg == this.subcategParam && data
            })
        },

        addCart(prod) {
            let vm = this

            $.confirm({
            title: 'Quantity!',
            content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<label>Enter something here</label>' +
            '<input type="qty" placeholder="Enter Quantity" class="qty form-control" required />' +
            '</div>' +
            '</form>',
            buttons: {
                formSubmit: {
                    text: 'Submit',
                    btnClass: 'btn-blue',
                    action: function () {
                        var qty = this.$content.find('.qty').val();
                        if(!qty){
                            $.alert('Please provide a qty');
                            return false;
                        }
                        let insertCart = []
                        let payload = {
                            id: prod.id,
                            name: prod.name,
                            price: parseInt(prod.price),
                            dicount: 0,
                            qty: parseInt(qty)
                        }
                        payload.total = payload.qty * payload.price

                        if (vm.cart.length == 0) {
                            let arr = []
                            arr.push(payload)
                            vm.$store.commit('setCart', arr)
                        } else {
                            // console.log(vm.cart, 'cart');
                            let isExist = []
                            isExist = vm.cart.filter(data => {
                                return data.id == payload.id
                            })
                            if (isExist.length > 0) {
                                console.log(isExist, 'exist');
                                let newQty = parseInt(isExist[0].qty) + parseInt(qty)
                                payload.qty = parseInt(newQty)
                                payload.total = newQty * payload.price
                                let newCartData = vm.cart.filter((data) => {
                                    return data.id != payload.id
                                })
                                newCartData.push(payload)
                                vm.$store.commit('setCart', newCartData)
                            } else {
                                let tob = vm.cart
                                tob.push(payload)
                                // let newCartData = vm.cart.map((data) => data.push(payload) )
                                // console.log(newCartData);
                                vm.$store.commit('setCart', tob)
                            }
                            

                            // console.log(newCartData, 'fff');
                            
                        }
                    }
                },
                cancel: function () {
                    //close
                },
            },
            onContentReady: function () {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function (e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        });
        }
    },

    created() {
        this.genderParam = this.$route.params.gender
        this.categParam = this.$route.params.categ
        this.subcategParam = this.$route.params.subcateg
        this.getData()
    },

    mounted() {
      this.imgPath = process.env.MIX_BASE_URL + '/'
    }
}
</script>