<template>
    <header class="header mb-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container" @click="clearParam()"><router-link :to="{ name: 'Home' }" class="navbar-brand home"><img :src="imgPath + 'img/logo.png'" alt="Obaju logo" class="d-none d-md-inline-block"><img src="img/logo-small.png" alt="Obaju logo" class="d-inline-block d-md-none"><span class="sr-only">Obaju - go to homepage</span></router-link>
                <div class="navbar-buttons">
                    <button type="button" data-toggle="collapse" data-target="#navigation" class="btn btn-outline-secondary navbar-toggler"><span class="sr-only">Toggle navigation</span><i class="fa fa-align-justify"></i></button>
                    <button type="button" data-toggle="collapse" data-target="#search" class="btn btn-outline-secondary navbar-toggler"><span class="sr-only">Toggle search</span><i class="fa fa-search"></i></button><router-link :to="{ name: 'Cart' }" class="btn btn-outline-secondary navbar-toggler"><i class="fa fa-shopping-cart"></i></router-link>
                </div>
                <div id="navigation" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><router-link :to="{ name: 'Home' }" class="nav-link active">Home</router-link></li>
                        <li class="nav-item dropdown menu-large"><a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Men<b class="caret"></b></a>
                            <ul class="dropdown-menu megamenu">
                                <li>
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Clothing</h5>
                                            <ul class="list-unstyled mb-3">
                                                <!-- <li class="nav-item"><a href="category.html" class="nav-link">T-shirts</a></li> -->
                                                <li class="nav-item" @click="setParam('men', 'clothing', 't-shirt')">
                                                    <router-link class="nav-link" 
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'clothing', subcateg: 't-shirt' } }"
                                                    >
                                                        T-shirts
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'clothing', 'shirt')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'clothing', subcateg: 'shirt' } }"
                                                    >
                                                        Shirts
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'clothing', 'pants')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'clothing', subcateg: 'pants' } }"
                                                    >
                                                        Pants
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Shoes</h5>
                                            <ul class="list-unstyled mb-3">
                                                <li class="nav-item" @click="setParam('men', 'shoes', 'trainer')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'shoes', subcateg: 'trainer' } }"
                                                    >
                                                        Trainers
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'shoes', 'sandal')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'shoes', subcateg: 'sandal' } }"
                                                    >
                                                        Sandals
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'shoes', 'hiking')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'shoes', subcateg: 'hiking' } }"
                                                    >
                                                        Hiking shoes
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'shoes', 'casual')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'shoes', subcateg: 'casual' } }"
                                                    >
                                                        Casual
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Accessories</h5>
                                            <ul class="list-unstyled mb-3">
                                                <li class="nav-item" @click="setParam('men', 'accessories', 'trainer')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'accessories', subcateg: 'trainer' } }"
                                                    >
                                                        Trainers
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'accessories', 'sandal')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'accessories', subcateg: 'sandal' } }"
                                                    >
                                                        Sandals
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'accessories', 'hiking')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'accessories', subcateg: 'hiking' } }"
                                                    >
                                                        Hiking accessories
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('men', 'accessories', 'casual')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'men', categ: 'accessories', subcateg: 'casual' } }"
                                                    >
                                                        Casual
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown menu-large"><a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Ladies<b class="caret"></b></a>
                            <ul class="dropdown-menu megamenu">
                                <li>
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Clothing</h5>
                                            <ul class="list-unstyled mb-3">
                                                <li class="nav-item" @click="setParam('women', 'clothing', 't-shirt')">
                                                    <router-link class="nav-link" 
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'clothing', subcateg: 't-shirt' } }"
                                                    >
                                                        T-shirts
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'clothing', 'shirt')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'clothing', subcateg: 'shirt' } }"
                                                    >
                                                        Shirts
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'clothing', 'pants')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'clothing', subcateg: 'pants' } }"
                                                    >
                                                        Pants
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Shoes</h5>
                                            <ul class="list-unstyled mb-3">
                                                <li class="nav-item" @click="setParam('women', 'shoes', 'trainer')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'shoes', subcateg: 'trainer' } }"
                                                    >
                                                        Trainers
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'shoes', 'sandal')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'shoes', subcateg: 'sandal' } }"
                                                    >
                                                        Sandals
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'shoes', 'hiking')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'shoes', subcateg: 'hiking' } }"
                                                    >
                                                        Hiking shoes
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'shoes', 'casual')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'shoes', subcateg: 'casual' } }"
                                                    >
                                                        Casual
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-4">
                                            <h5>Accessories</h5>
                                            <ul class="list-unstyled mb-3">
                                                <li class="nav-item" @click="setParam('women', 'accessories', 'trainer')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'accessories', subcateg: 'trainer' } }"
                                                    >
                                                        Trainers
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'accessories', 'sandal')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'accessories', subcateg: 'sandal' } }"
                                                    >
                                                        Sandals
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'accessories', 'hiking')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'accessories', subcateg: 'hiking' } }"
                                                    >
                                                        Hiking accessories
                                                    </router-link>
                                                </li>
                                                <li class="nav-item" @click="setParam('women', 'accessories', 'casual')">
                                                    <router-link class="nav-link"
                                                        :to="{ name: 'Product', params: { gender: 'women', categ: 'accessories', subcateg: 'casual' } }"
                                                    >
                                                        Casual
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="navbar-buttons d-flex justify-content-end">
                    <!-- /.nav-collapse-->
                        <div id="search-not-mobile" class="navbar-collapse collapse"></div><a data-toggle="collapse" href="#search" class="btn navbar-btn btn-primary d-none d-lg-inline-block"><span class="sr-only">Toggle search</span><i class="fa fa-search"></i></a>
                        <div id="basket-overview" class="navbar-collapse collapse d-none d-lg-block"><router-link :to="{ name: 'Cart' }" class="btn btn-primary navbar-btn"><i class="fa fa-shopping-cart"></i><span>{{itemQty}} items in cart</span></router-link></div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="search" class="collapse">
            <div class="container">
                <form role="search" class="ml-auto">
                    <div class="input-group">
                        <input type="text" placeholder="Search" class="form-control">
                        <div class="input-group-append">
                            <button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            cartData: 'getCartData'
        }),
        itemQty() {
            return this.cartData.map(data => {
                return data.qty
            }).reduce((a, b) => a + b, 0)
        }
    },

    methods: {
        setParam(gender, categ, subcateg) {
            let payload = {
                gender,
                categ,
                subcateg
            }
            // console.log(payload);
            this.$store.commit('setParamCateg', payload)
        },

        clearParam() {
            // this.$store.commit('setParamCateg', '')
        }
    },

    data() {
        return {
            imgPath: ''
        }
    },

    mounted() {
      this.imgPath = process.env.MIX_BASE_URL + '/'
    }
}
</script>