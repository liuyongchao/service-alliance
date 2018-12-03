<template>
  <div>
    <Head msg="Welcome to Your Vue.js App" />
    <div>会员登录</div>
    <Footer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "head",
  components: {
    Head,
    Footer
  }
};
</script>
