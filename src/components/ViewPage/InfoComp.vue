<template>
<div class="frame">
    <h1 class="product-name">Наушники tws от HAYLOU</h1>
    <p class="product-cost">{{Math.floor(Math.random() * 79)}} 000 sum</p>
    <p class="product-description-title">Описание</p>
    <p class="product-description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo quas pariatur dolores itaque mollitia excepturi et ad quos dolore corporis facilis voluptate sapiente illum repellendus eum, tempora veritatis accusamus!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo quas pariatur dolores itaque mollitia excepturi et ad quos dolore corporis facilis voluptate sapiente illum repellendus eum, tempora veritatis accusamus!
    </p>
    <p class="tags-title">Теги</p>
    
    <h2 class="tags">
        <span class="tag">Наушники</span>
        <span class="tag">Наушники беспроводные</span>
        <span class="tag">Из китая</span>
        <span class="tag">Наушники</span>
        <span class="tag">Наушники беспроводные</span>
        <span class="tag">Из китая</span>
        <span class="tag">Наушники</span><span class="tag">Наушники беспроводные</span>
        <span class="tag">Из китая</span>
        <span class="tag">Наушники</span>
    </h2>

    <div class="favorite-buttons">
    <div></div>
    <div></div>
    </div>
</div>    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.frame{
    padding-left: 1rem;
}
.product-name{
    font-size: 26px;
    font-weight: bold;
    margin-top: 8px;
}
.product-cost{
    font-size: 32px;
    font-weight: bold;
    margin-top: 8px;
    color: lightseagreen;
    margin-top: 20px;
}
.product-description-title{
    font-size: 26px;
    font-weight: bold;
    margin-top: 8px;
    margin-top: 10px;
}
.product-description{
font-size: 17px;
font-weight: 500;
opacity: 0.8;
line-height: 1.8rem;
margin-top: 4px;
}
.tags-title{
    font-size: 26px;
    font-weight: bold;
    margin-top: 10px;
}
.tags{
    overflow: hidden;
    margin-top: 10px;
    white-space: nowrap;
}
.tags .tag{
    background: rgb(238, 238, 238);
    margin: 0.4rem 0.2rem;
    width: min-content;
    white-space: normal;
    font-size: 15px;
    padding: 4px;
    font-weight: 600;
}
</style>