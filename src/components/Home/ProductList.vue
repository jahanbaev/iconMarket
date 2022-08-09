<template>

<main class="gallery">
  <ul class="gallery__list">
    <li v-for="(ss, index) in list" :key="ss" @click="goTo(index)">
      <figure>
        <img :src="ss" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms">
      </figure>
      <p class="product-name">TWS наушники от mi</p>
      <p class="product-cost">{{Math.floor(Math.random() * 79)}} 000 sum</p>
      <img class="cart" src="@/assets/icons/addToCartBlue.png" alt="">
    </li>
  </ul>
</main>

</template>

<script>
import axios from 'axios'
import router from '@/router'
export default ({
    data(){
        return {
            list : ["https://images.unsplash.com/photo-1592755763580-7f15ad645373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1520640732471-21c8333b728d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1623393884989-cb3663e431c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1610985725707-bb0766bf123b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MDk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1648104063891-6db2fc350445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1615161275552-40621b56ac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1592755763580-7f15ad645373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1625480862933-65ac6f01d82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1533160772606-ba8c6a74d336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1464380573004-8ca85a08751a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MTk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1625480862933-65ac6f01d82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1623393921554-f5801a1caddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1493401415972-d4001c9fa2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1501963917309-56546c33e19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MjU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1507955987999-df4864ee80d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1636440496891-a8a2be0fa9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5Mjg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1510215744419-742d9dce947f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmUsY2FzZXx8fHx8fDE2NTk5ODc5MzM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"]
        }
    },
    created() {
        setInterval(()=>{
    if(this.list.length < 2){
    axios.get("https://source.unsplash.com/random/500%C3%97500/?phone,case")
    .then(response => this.list.push(response.request.responseURL))
    }
},1500)
    },
    methods: {
        goTo(id){
           router.push({ name: 'ProductPage', params: { id: id } })
        }
    }
})
</script>

<style>
main.gallery {
    width: calc(100% - 21rem);
    margin: 1rem;
    margin-left: 0;
}

.gallery > h1 {
  font-size: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 1rem;
  color: #c9c9c9;
  font-weight: 100;
}

.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax( 24%, 1%));
  grid-template-rows: auto;
  grid-gap: 1%;
  
  grid-auto-flow: dense;
}

.gallery > .gallery__list > li {
    border:1px solid rgb(216, 216, 216);
    border-radius: 0.6rem;
    grid-column: span 1;
    height: 280px;
    overflow: hidden;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}
.gallery .gallery__list li .product-name{
    color: lightseagreen;
    font-size: 18px;
    font-weight: 600;
    margin: 0 6px;
    margin-top: 10px;
}

.gallery .gallery__list li .product-cost{
    font-size: 19px;
    margin: 7px;
    margin-top: 20px;
    font-weight: 500;
    opacity: 0.8;
}
.gallery .gallery__list li .cart{
    position: absolute;
    bottom: 7px;
    right: 10px;
    height: 26px;
    width: 26px;
    cursor: pointer;
}
.gallery > .gallery__list > li > figure{
    width: 100%;
    height: 190px;
    margin-bottom: 4px;
}
.gallery > .gallery__list > li > figure > img{
width: 100%;
height: 100%;
}

@media only screen and (max-width: 800px) {
  main.gallery {
    width: 100%;
    }
  .gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax( 49%, 2%));
  grid-template-rows: auto;
  grid-gap: 1%;
  grid-auto-flow: dense;
}
.gallery > .gallery__list > li > figure{
    width: 100%;
    height: 160px;
    margin-bottom: 4px;
}

.gallery > .gallery__list > li {
    border:1px solid rgb(216, 216, 216);
    border-radius: 0.6rem;
    grid-column: span 1;
    height: 280px;
    overflow: hidden;
    box-sizing: border-box;
    overflow: hidden;
 }
}
</style>