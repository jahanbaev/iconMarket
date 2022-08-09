<template>
    <div class="main-result">
    <div class="result-frame">
    <div class="result" v-for="p of searchItem" :key="p"><p class="result-text">{{p}}</p></div>
    </div>
    </div>
</template>
<script>
export default {
    props:['search'],
    data() {
        return {
            prompts:["наушники","беспроводные наушники","беспроводные мышки","мышка","чехлы для телефона","чехлы","защитные очки","защитный экран"]
        }
    },
       computed: {
    searchItem(){
        if(this.search){
        return this.prompts.filter((val) => {
            return val.includes(this.search.toLowerCase())
        })
        }else{
            return false
        }
    }
      }
    }
</script>
<style scoped>

.main-result{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 99999999;
    border-radius: 0.6rem;
    overflow: hidden;
}

.result-frame{
border-radius: 0.6rem;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.219);
    margin: 15px 0;
}
.main-result .result{
    width: 400px;
    background: #fff;
    height: 35px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px 8px;
    
}
.main-result .result:hover{
    background: rgb(175, 175, 175);
}
.main-result .result p{
    width: 100%;
}
</style>