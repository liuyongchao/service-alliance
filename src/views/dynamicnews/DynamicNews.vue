<template>
  <div>
    <div class="container" :style="{minHeight:minHeight + 'px'}">
    <Head msg="Welcome to Your Vue.js App" />
    <div>动态要闻</div>
    <div class="content">
        <div class="left">
            <ul>
                <router-link tag="li" :to="{name:'notice'}">通知公告</router-link>
                <router-link tag="li" :to="{name:'news'}">产业要闻</router-link>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>           
    </div>
    </div>
    <Footer msg="Welcome to Your Vue.js App" />    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      minHeight: 0
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
  },
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #eeeeee;
  .left {
    height: 500px;
    width: 500px;
    float: left;
    color: #ffffff;
    background-color: red;
  }
  .right {
    height: 500px;
    float: left;
    color: #ffffff;
    display: inline;
    background-color: blue;
  }
}
</style>
