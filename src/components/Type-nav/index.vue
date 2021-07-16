<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="currentIndex = -1">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div
              class="item"
              :class="{ item_on: currentIndex === index }"
              v-for="(item1, index) in categoryList"
              :key="item1.categoryId"
              @mouseenter="moveIn(index)"
            >
              <h3>
                <!-- 第一种写法：把所有的a标签换成router-link，会导致卡顿，因为标签太多了，导致内存当中组件对象很多，所以效率不高
                       解决办法：看第二个路由把声明式导航换成编程式导航-->
                <router-link
                  :to="{
                    name: 'search',
                    query: {
                      category1Id: item1.categoryId,
                      categoryName: item1.categoryName,
                    },
                  }"
                  >{{ item1.categoryName }}</router-link
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="(item2, index) in item1.categoryChild"
                    :key="item2.categoryId"
                  >
                    <dt>
                      <!-- 把声明式导航换成编程式导航 -->
                      <a
                        href="javascrit:;"
                        @click="
                          $router.push({
                            name: 'search',
                            query: {
                              category2Id: item2.categoryId,
                              categoryName: item2.categoryName,
                            },
                          })
                        "
                        >{{ item2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(item3, index) in item2.categoryChild"
                        :key="item3.categoryId"
                      >
                      <!-- 把声明式导航改为编程式导航，click事件，点击之后，是需要调用函数的
                      同样每个a标签都添加了点击事件，那么内存中就会定义很多个函数，内存占用也是非常大的
                      效率虽然比声明式导航强，但是还是不够好，所以使用事件委派 
                      事件委派的处理：找公共的离自己最近的祖先元素，而且这个祖先元素只有一个-->
                        <a
                          href="javascrit:;"
                          @click="
                            $router.push({
                              name: 'search',
                              query: {
                                category3Id: item3.categoryId,
                                categoryName: item3.categoryName,
                              },
                            })
                          "
                          >{{ item3.categoryName}}</a
                        >
                        <!-- <route-link
                          :to="{
                            name: 'search',
                            query: {
                              category3Id: item3.categoryId,
                              categoryName: item3.categoryName,
                            },
                          }"
                          >{{ item3.categoryName }}</route-link
                        > -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import _ from 'lodash'  这样引入会把整个lodash全部引入，打包后体积比较大
import throttle from "lodash/throttle"; //引入单文件，用谁引入谁
export default {
  name: "Type-nav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    // 没节流的时候
    // moveIn(index){
    //      this.currentIndex=index
    //      console.log(index);
    // }

    // var throttled = _.throttle(renewToken, 300000, { 'trailing': false }); 示例
    // 有节流的时候(不能用箭头函数，因为箭头函数内部)
    moveIn: throttle(function (index) {
      this.currentIndex = index;
      console.log(index);
    }, 20),
  },
  //  组件在挂载完成的时候，就立马发送请求数据，存储到vuex里面，而不是直接在vue组件里面
  mounted() {
    //  dispatch是分发和触发的意思，和emit单词一样，本质就是调用指定的action函数
    this.$store.dispatch("getCategoryList");
  },
  // computed的功能从Vuex里把数据捞到vue组件当中使用
  // 以后要是从Vuex拿的是数据（就是state和getters里的东西），都在computed当中拿
  // 以后要是从Vuex拿的是方法（就是mutation和action里的东西），都在methods当中拿,这个一般用的少
  computed: {
    // mapState函数内部可以是数组也可以是对象
    // 是数组就要满足条件：
    // 1、数据直接就是总的state当中的数据，不能是模块里面的
    // 2.数组当中的名字必须和state当中的名字一致
    // 我们操作的state都是总的state
    // ...mapState(['categoryList'])  不能写成数组，因为categoryList不是state.categoryList,而是state.home.categoryList
    ...mapState({ categoryList: (state) => state.home.categoryList }), //必须要用对象，而且返回的是state.home.categoryList
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: skyblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

