<template>
  <q-carousel infinite style="height:100%" :autoplay="2000" transition-prev="slide-right" transition-next="slide-left"
    animated v-model="slideIndex">
    <q-carousel-slide v-for="slide, index in slides" :name="index">
      <a href="https://www.ajio.com/s/min-50-percent-off-5046-27984">
      <q-img width="100%" height="350px" :src="slide.imgUrl"></q-img>
      </a>
    </q-carousel-slide>
  </q-carousel>
  <div class="q-pt-sm">
    <a href="https://www.ajio.com/shop/pre-buzz">
    <q-img width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/PREBUZZ-D-UHP.gif" />
  </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slideIndex: 0,
      slides: [
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Top-P2-AvaasaDNMXTrends-Min50.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Top-P4-AzorteAltheoryOutryt-Flat50.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Top-P1-LevisUSPA-Min40.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Top-P3-USPA-Min50.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Top-P5-Axgant-Upto40.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-d-Top-P6-LouisphilippeAllenSolly-Min40.jpg' },
      ]
    }
  }
}
</script>



