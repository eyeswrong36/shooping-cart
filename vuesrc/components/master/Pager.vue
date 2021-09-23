<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li aria-current="page" class="breadcrumb-item active" v-if="!checker">Home</li>
                <li aria-current="page" class="breadcrumb-item active" v-if="checker && marami.gender!= ''">
                    {{ marami.gender }}
                </li>
                <li aria-current="page" class="breadcrumb-item active" v-if="checker && marami.categ != ''">
                    {{ marami.categ }}
                </li>
                <li aria-current="page" class="breadcrumb-item active" v-if="checker && marami.subcateg != ''">
                    {{ marami.subcateg }}
                </li>
                <!-- {{ checker }} -->
            </ol>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            marami: 'getParamCateg'
        }),
        checker() {
            return this.marami != '' ? true : false
        }
    }
}
</script>