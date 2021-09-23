
import Home from '../components/master/Home'

// Shop
import Shop from '../components/shop/Index'
import Product from '../components/shop/Product'
import ProductDetail from '../components/shop/Detail'

// Cart
import Cart from '../components/cart/Cart'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:gender/:categ',
    component: Shop,
    children: [
      {
        path: ':subcateg',
        name: 'Product',
        component: Product,
        props: true
      },
      {
        path: ':subcateg/:pid',
        name: 'Detail',
        component: ProductDetail,
        props: true
      }
    ]
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  }
]
