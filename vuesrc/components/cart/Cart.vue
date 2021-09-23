<template>
    <div class="container">
        <div class="row">
            <div id="basket" class="col-lg-9">
                <div class="box">
                    <h1>Shopping cart</h1>
                    <p class="text-muted">You currently have {{ itemQty }} item(s) in your cart.</p>
                    <!-- {{ cartData }} -->
                    <!-- {{ overallTotal }} -->
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th colspan="2">Product</th>
                                    <th>Quantity</th>
                                    <th>Unit price</th>
                                    <th>Discount</th>
                                    <th colspan="2">Total</th>
                                </tr>
                            </thead>
                            <tbody v-if="cartData.length > 0">
                                <tr v-for="(tblData, i) in cartData" :key="i">
                                    <td>
                                        <!-- this is static -->
                                        <a href="#"><img :src="imgPath + `img/detailsquare.jpg`" alt="White Blouse Armani"></a>
                                    </td>
                                    <td>
                                        {{ tblData.name }}
                                    </td>
                                    <td>
                                        <input type="number" min="1" :value="tblData.qty" class="form-control" @change="editQty(tblData)">
                                    </td>
                                    <td>{{ tblData.price }}</td>
                                    <td>$0.00</td>
                                    <td>${{ tblData.total }}</td>
                                    <td>
                                        <button @click.prevent="deleteCart(tblData.id)"><i class="fa fa-trash-o"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <h1>No Data.</h1>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="5">Total</th>
                                    <th colspan="2">${{ overallTotal }}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="box-footer d-flex justify-content-between flex-column flex-lg-row">
                        <div class="left"><router-link :to="{ name: 'Home' }" class="btn btn-outline-secondary"><i class="fa fa-chevron-left"></i> Continue shopping</router-link></div>
                        <div class="right">
                        <!-- <button class="btn btn-outline-secondary"><i class="fa fa-refresh"></i> Update cart</button> -->
                        <button type="submit" class="btn btn-primary">Proceed to checkout <i class="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div id="order-summary" class="box">
                    <div class="box-header">
                        <h3 class="mb-0">Order summary</h3>
                    </div>
                    <p class="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                <td>Order subtotal</td>
                                <th>${{ overallTotal }}</th>
                                </tr>
                                <tr>
                                <td>Shipping and handling</td>
                                <th>Free Shipping</th>
                                </tr>
                                <tr>
                                <td>Tax</td>
                                <th>Tax Free</th>
                                </tr>
                                <tr class="total">
                                <td>Total</td>
                                <th>${{ overallTotal }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            cartData: 'getCartData'
        }),
        overallTotal() {
            return this.cartData.map(data => {
                return data.total
            }).reduce((a , b) => a + b, 0)
        },
        itemQty() {
            return this.cartData.map(data => {
                return data.qty
            }).reduce((a, b) => a + b, 0)
        }
    },

    methods: {
        editQty(data) {
            console.log(event.target.value);
            let payload = {
                id: data.id,
                name: data.name,
                price: parseInt(data.price),
                discount: 0,
                qty: parseInt(event.target.value)
            }
            payload.total = payload.qty * payload.price
            let newCartData = this.displayData.filter(data => {
                return data.id != payload.id
            })
            newCartData.push(payload)
            console.log(newCartData);
            // let newCartData = this.displayData.map((data) =>   [ ...data, payload ] )
            // console.log(newCartData);
            this.$store.commit('setCart', newCartData)
            this.displayData = this.cartData
        },

        deleteCart(id) {
            console.log(id, 'checkid');
            let vm = this

            $.confirm({
                title: 'Remove',
                content: 'Remove item from cart?',
                buttons: {
                    confirm: function () {
                        // $.alert('Confirmed!');
                        let checkid = id
                        let newCartData = vm.displayData.filter(data => {
                            return data.id != checkid
                        })
                        console.log(newCartData, 'newCartData');
                        vm.$store.commit('setCart', newCartData)
                        vm.displayData = vm.cartData
                    },
                    cancel: function () {
                        // $.alert('Canceled!');
                    },
                    // somethingElse: {
                    //     text: 'Something else',
                    //     btnClass: 'btn-blue',
                    //     keys: ['enter', 'shift'],
                    //     action: function(){
                    //         $.alert('Something else?');
                    //     }
                    // }
                }
            });
        }
    },

    created() {
        this.displayData = this.cartData
    },

    data() {
        return {
            numT: '',
            imgPath: '',
            displayData: []
        }
    },   

    mounted() {
      this.imgPath = process.env.MIX_BASE_URL + '/'
    }
}
</script>