<template>
    <div :class="{'bg-img': full}" class="bg" @click="fullScreen">
    <div class="slider-block border border-yellow-400 mt-10 h-">
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{clickable: true}"
        :navigation="true"
        class="mySwiper w-1/4">
        <swiper-slide v-for="(item,index) in baners" :key="index">
        <img class="" :src="item">
        </swiper-slide>      
      </swiper>
      </div>
    </div>
</template>

<script>
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
    props: ['url'],
    data() {
         return {
            list : ["https://images.unsplash.com/photo-1592755763580-7f15ad645373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1520640732471-21c8333b728d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1623393884989-cb3663e431c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1610985725707-bb0766bf123b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1648104063891-6db2fc350445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1615161275552-40621b56ac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1592755763580-7f15ad645373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1625480862933-65ac6f01d82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1533160772606-ba8c6a74d336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1464380573004-8ca85a08751a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1625480862933-65ac6f01d82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1623393921554-f5801a1caddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1493401415972-d4001c9fa2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1501963917309-56546c33e19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1507955987999-df4864ee80d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1636440496891-a8a2be0fa9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5Mjg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1510215744419-742d9dce947f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"],
            full : false,
    baners: [
        "https://i.pinimg.com/564x/a3/7d/d3/a37dd31ee336a8fb6a2a59504310d53f.jpg",
        "https://i.pinimg.com/564x/94/a9/f7/94a9f79bf82d934e615d55fa9ab05670.jpg",
        "https://i.pinimg.com/564x/6b/cd/d4/6bcdd4a3433e672033c0b117126b6247.jpg"
      ],
    Autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    } 
    },
    methods:{
        fullScreen(){
            this.full = !this.full
        }
    },
    components: {
    Swiper,
    SwiperSlide
    },
}
</script>

<style scoped>
.swiper {
    transition: all 0.2s linear;
    width: 45vw;
    height: 30vw;
    margin: 1rem;
    border-radius: 0.6rem;
    overflow: hidden;
}
.swiper img {
    width: 45vw;
    height: 30vw;
}
.bg{
    transition: all 0.2s linear;
}
.bg-img{
    background: #000;
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    left: 0;
    z-index: 999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 800px) {
    .swiper {
    transition: all 0.2s linear;
    width: 100%;
    height: 60vw;
    margin: 0;
    border-radius: 0;
    padding-top: 0;
    margin-top: 0;
    }
    .swiper img {
    width: 100%;
    height: 100%;
}
}
</style>