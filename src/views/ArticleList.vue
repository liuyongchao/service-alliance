<template>
    <div>
      <div class="container" :style="{minHeight:minHeight + 'px'}">
        <Head msg="Welcome to Your Vue.js App"/>
        <el-row>
  <el-col :span="6" style="padding:0 10px 10px 0;">
    <h1 style="background:#0088d3;padding:10px;color:#fff">联盟动态</h1>
    <el-menu
      @select="handleSelect"
      style="border:1px solid #eee"
      :default-active="index"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" style="border-bottom:1px solid #eee">
        <i class="el-icon-menu"></i>
        <span slot="title">联盟动态</span>
      </el-menu-item>
      <el-menu-item index="2" style="border-bottom:1px solid #eee">
        <i class="el-icon-document"></i>
        <span slot="title">最新通知</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">一周政策</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="18">
    <h1 style="background:#0088d3;padding:10px;color:#fff;text-align:left">{{title}}</h1>
    <div style="padding:15px" class="article">
      <ul>             
              <li v-for="(item, index) in tableData.list" :key="index">
                <div class="news-content">
                <router-link tag="a" :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
                <!-- <a href="">北京企业技术中心创新服务联盟成立</a> -->
                <p class="content">{{item.context}}</p>             
                <p class="type">[{{item.classify}}]</p>
                <p class="date">{{timestampToTime(item.uploadTime)}}</p>
                </div>
              </li>
    </ul> 
    <el-pagination
      style="margin:20px 0;"
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size="5"
      :total="tableData.total">
</el-pagination>
    </div>       
  </el-col>
</el-row>
        </div>
        <Footer msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import {articleList} from "@/api/article";

export default {
  data() {
    return {
      minHeight: 0,
      tableData:"",
      classify:0,
      index:"1",
      title:"联盟动态"
    };
  },
  methods: {
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        },
        getArticleList(pageNum,pageSize,classify){
          articleList(pageNum,pageSize,classify).then(res => {
            this.tableData = res;
            if(classify === 0){
              this.title = "联盟动态"
            }else if(classify === 1){
              this.title = "最新通知"
            }else{
              this.title = "一周政策"
            }
          })
        },
      handleSelect(index,indexPath){
        this.classify = index - 1;
        this.getArticleList(1,10,this.classify)
      },
      handleCurrentChange(val){
        this.getArticleList(val,10,this.classify)
      }
        
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
    if(this.$route.params.index){
      this.index = this.$route.params.index;
      this.getArticleList(1,10,this.index-1)
    }else{
      this.getArticleList(1,10,0);
    } 
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
.el-row{
  width: 1200px;
  margin:30px auto;
}
.article li {
  margin-top:5px;
        height: 70px;
        border-bottom: 1px solid #eeeeee;
        .news-content {
          height: 70px;
          width: 100%;
          float: right;
          position: relative;
          a {
            padding: 5px;
            font-size: 14px;
            display: block;
            text-align: left;
            text-decoration: none;
            color: #555555;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p.content {
            height: 28px;
            width: 100%;
            text-align: left;
            font-size: 12px;
            line-height: 14px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp:2;
            word-break:break-all;
            display:-webkit-box;
            -webkit-box-orient:vertical;
          }
          p.type {
            font-size: 12px;
            color: #999999;
            position: absolute;
            bottom: 2px;
          }
    p.date {
      font-size: 12px;
      color: #999999;
      position: absolute;
      right: 0;
      bottom: 2px;
    }
  }
}
</style>
