<template>
  <q-page class="q-pa-sm">
    <div>

      <banner></banner>
       <carousel-section></carousel-section>
       <mobikwik></mobikwik>
       <top-shelf></top-shelf>
       <shelf-carousel></shelf-carousel>
       <rewards></rewards>
       <shop></shop>
       <stores></stores>
       <foter></foter>
    </div>
  </q-page>
</template>
 <script>
import banner from 'components/Ajio/banner.vue'
 import carouselSection from 'components/Ajio/carousel.vue'
 import mobikwik from 'components/Ajio/mobikwik.vue'
 import topShelf from 'components/Ajio/topShelf.vue'
 import shelfCarousel from 'components/Ajio/shelfCarousel.vue'
 import rewards from 'components/Ajio/rewards.vue'
 import shop from 'components/Ajio/shop.vue'
 import stores from 'components/Ajio/stores.vue'
 import foter from 'components/Ajio/foter.vue'
export default {
  components: { banner, carouselSection, mobikwik, topShelf, shelfCarousel,rewards, shop,stores,foter}
}
</script>
