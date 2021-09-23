<template>
    <div>
        <app-navbar />
        <app-pager />
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Breadcrumb from './Pager.vue'

export default {
    components: {
        appNavbar: Navbar,
        appPager: Breadcrumb
    }
}
</script>