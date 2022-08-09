<template>
  <div class="flex">
  <LeftBarTopVue/>
  <SliderComp/>
  </div>
  <div class="flex">
  <LeftBar/>
  <ProductList/>
  </div>
</template>
<script>
import LeftBar from '@/components/Home/LeftBar.vue'
import SliderComp from '@/components/Home/SliderComp.vue'
import ProductList from '@/components/Home/ProductList.vue'
import LeftBarTopVue from '@/components/Home/LeftBarTop.vue'

export default ({
 components: {
    LeftBar,
    SliderComp,
    ProductList,
    LeftBarTopVue
}
})
</script>

<style scoped>
.flex{
    display:flex; 
    padding: 0 45px; 
    margin-top: 1.2rem;
    position:relative;
}



@media only screen and (max-width: 800px) {
    .flex{
        flex-direction: column;
        padding: 0 5px; 
    }
}
</style>