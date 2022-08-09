<template>
  <div>
    <div class="slider-block border border-yellow-400 mt-10 h-">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :slidesPerGroup="1"
        :autoplay="Autoplay"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{clickable: true}"
        :navigation="true"
        class="mySwiper w-1/4"
      >
        <swiper-slide v-for="(item,index) in baners" :key="index">
        <img class="" :src="item">
        </swiper-slide>      
      </swiper>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/bundle';
 
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
 
// install Swiper modules
SwiperCore.use([Pagination, Navigation,Autoplay]);
export default {
  data(){
    return{
      baners: [
        "https://i.pinimg.com/564x/a3/7d/d3/a37dd31ee336a8fb6a2a59504310d53f.jpg",
        "https://i.pinimg.com/564x/94/a9/f7/94a9f79bf82d934e615d55fa9ab05670.jpg",
        "https://i.pinimg.com/564x/6b/cd/d4/6bcdd4a3433e672033c0b117126b6247.jpg"
      ],
      Autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(() => {
       // console.log(JSON.stringify(response) + " from axios")
      })
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style scoped>
.swiper {
  width: 44rem;
  height: 22rem;
  border-radius: 0.6rem;
  margin: 1rem;
  margin-left: 0;
}

.swiper img{
  width: 100%;
  height: 100%;
   object-fit: cover;
}

.swiper-slide{
  background: rgb(141, 141, 141);
}

@media only screen and (max-width: 800px) {
.swiper {
  width: 100%;
  height: 14rem;
  }
}

</style>