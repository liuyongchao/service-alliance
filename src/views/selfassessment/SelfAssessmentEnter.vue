<template>
    <div>
      <div class="container" :style="{minHeight:minHeight + 'px'}">
        <Head msg="Welcome to Your Vue.js App"/>
        <div class="content">关于我们</div>
        </div>
        <Footer msg="Welcome to Your Vue.js App"/>
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
  width: 1200px;
  margin: 0 auto;
}
</style>
