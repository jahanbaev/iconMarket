<template>
<div>
    <div class="left-bar" :class="{'fixed': scroll}">
    <div v-for="(items, index) in menu" :key="index" class="item">
    <p>{{items}}</p>
    </div>
    <div class="item last-item">
    <p>Другие продукты</p>
    </div>
    </div>
<div class="replacer" :class="{'activeLeft': scroll}"></div>
</div>

</template>

<script>

export default ({
    data() {
       return{
        scroll: false,
        menu : ["Все категории","Топ продаж", "Наушники", "мобильные аксессуары", "Повер банки","Провода USB","TWS продукты","Блоки питания","Для копмютеров"]
       } 
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
        handleScroll () {
            this.scroll = (window.scrollY >= 443)?true:false
        }
    }
})
</script>


<style scoped>
.left-bar{
    padding: 7px 0;
    width: 18rem;
    
    border-radius: 0.6rem;
    margin: 1rem;
    box-sizing:content-box;
    background: rgb(235, 234, 234);
    transition: all 0.1s linear;
}
.left-bar .item{
    width: 94%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgba(0, 161, 236, 0.219);
    margin: 0 2px;
    margin: auto;
    cursor: pointer;
} 

.left-bar .last-item{
   border-bottom: none; 
}
.left-bar .item:hover {
    background: rgb(189, 189, 189);
}
.fixed {
top:65px;
position: fixed;
}

.activeLeft{
   width: 18rem;
   margin: 1rem; 
}
@media only screen and (max-width: 800px) {
    .left-bar{
        display: none;
    }
}
</style>