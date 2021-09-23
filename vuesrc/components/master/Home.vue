<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="main-slider" class="owl-carousel owl-theme">
                    <div class="item"><img :src="imgPath + `img/main-slider1.jpg`" alt="" class="img-fluid"></div>
                    <div class="item"><img :src="imgPath + `img/main-slider2.jpg`" alt="" class="img-fluid"></div>
                    <div class="item"><img :src="imgPath + `img/main-slider3.jpg`" alt="" class="img-fluid"></div>
                    <div class="item"><img :src="imgPath + `img/main-slider4.jpg`" alt="" class="img-fluid"></div>
                </div>
              <!-- /#main-slider-->
            </div>
          </div>
    </div>
</template>

<script>
export default {
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