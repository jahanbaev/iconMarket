<template>
<div>
    <nav>
    <div class="items">
    <h1>icon</h1>
    <input class="search" type="text" v-model="search" placeholder="Что искать?">
    <div class="button">
    <img src="../assets/icons/icons8-heart-32.png" alt="">
    </div>
    </div>
    </nav>
    <PromptComp :search="search" />
</div>
</template>

<script>
import PromptComp from '@/components/Home/PromptComp.vue'

export default ({
    data(){
        return {
            search: ''
        }
    },
    components: {
        PromptComp
    },
})
</script>

<style scoped>
nav{
    z-index: 99999;
    left: 0;
    top: 0;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    background: #000;
    display: flex;
    color: #fff;
}
nav .items{
    margin: 0 60px;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
}

nav .search{
    border: none;
    padding: 5px;
    width: 400px;
    border-radius: 0.4rem;
    height: 2rem;
    background: rgb(90, 90, 90);
    margin:auto;
}
nav .items .button{
    width: 2rem;
    height: 2rem;
    padding: 0.1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

p, h1{
    color: #fff;
}

@media only screen and (max-width: 600px) {
    nav .items{
    margin: 0 10px;
    }
    nav .items .button{
        display: inline;
    }
    nav .search{
        width: 240px;
    }
}
</style>