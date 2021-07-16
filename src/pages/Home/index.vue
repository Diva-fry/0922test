<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 推荐 -->
    <Recommend/>
    <!-- 排行 -->
    <Rank />
    <!-- 喜欢 -->
    <Like/>
    <!-- 楼层 -->
    <Floor/>
    <!-- 楼层 -->
    <Floor/>
    <!-- 品牌 -->
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContainer"
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'


export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
};
</script>

<style>
</style>