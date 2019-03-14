<template>
    <div>
      <div class="container" :style="{minHeight:minHeight + 'px'}">
        <Head msg="Welcome to Your Vue.js App"/>
        <div class="content">
            <h1 v-html="tableData.title" style="font-size:24px;padding:10px;"></h1>
            <h1 v-html="tableData.subtitle" style="font-size:18px;padding:10px;color:#555555"></h1>
            <div style="height:50px;"><p style="text-align:left;float:left;line-height:50px">[{{tableData.classify}}]</p>
            <p  style="text-align:right;float:right;line-height:50px">{{timestampToTime(tableData.uploadTime)}}</p></div>
            
            <p v-html="tableData.context"></p>
        </div>
        </div>
        <Footer msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import {articleById} from "@/api/article";
export default {
  data() {
    return {
      tableData:"",
      minHeight: 0
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
    articleById(this.$route.params.id).then(res => {
      this.tableData = res;
    });
  },
  methods:{
    timestampToTime(timestamp) {
                const date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                const Y = date.getFullYear() + '-';
                const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                const D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+ ' ';
                const h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours())+ ':';
                const m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
                const s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
                return Y+M+D+h+m+s;//时分秒可以根据自己的需求加上
    },
  },
  components: {
    Head,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.content {
  p{
    text-align: left;
    line-height: 24px;
    color: #555555;
  }
  width: 1000px;
  margin: 20px auto;
}
</style>
