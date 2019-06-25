<template>
  <div>
    <div class="container" :style="{minHeight:minHeight + 'px'}">
      <Head></Head>
      <div class="content">
        <div class="top">
          <div class="top-left">
            <template>
              <el-carousel indicator-position="inside" height="430px">
              <el-carousel-item v-for="(item,index) in images" :key="index">
              <img :src="item.uri" alt="" style="width:820px;height:430px">
              </el-carousel-item></el-carousel>
            </template>
            
          </div>
          <div class="top-right">
            <div class="top-right-top"  >
              
<div class="top-right-top-float">
  
            <p>北京企业技术中心创新服务联盟是在市经信委的指导与支持下成立的非营利性社会组织，负责《北京市企业技术中心建设评价规范》贯标工作，并为企业提供投资并购、政府申报、技术培训、区域间合作等服务。致力于搭建政府与企业间无障碍沟通桥梁，成为企业与企业间交流合作的纽带。</p>
            <a href="">查看更多</a>

</div>

            
            </div>
            <div class="top-right-left">服务</div>
            <div class="top-right-right">加入</div>
          </div>
        </div>
        <div class="center">
          <div class="center-left">
            <div class="box"><p>联盟动态</p><router-link tag="p" class="more" :to="{name:'articlelist',params:{index:1}}">更多</router-link></div>
            <ul >
              <li v-for="(item,index) in tableData0.list" :key="index">
                <div class="news-image">
                    <img :src="item.preview.uri" alt="" style="width:205px;height:131px">
                </div>
                <div class="news-content">
              <router-link tag="a" :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
                <!-- <a href="">北京企业技术中心创新服务联盟成立</a> -->
                <p>{{item.context}}</p>             
                <p class="type">[{{item.classify}}]</p>
                <p class="date">{{timestampToTime(item.uploadTime)}}</p>
                </div>
              </li>                         
            </ul>
          </div>
          <div class="center-right">
            <div class="box"><p>企业自评</p></div>
            <router-link tag="a" to="/selfassessmententer"><img src="../assets/image/self-evaluation.png" alt=""></router-link>
            
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
              <div class="box"><p>最新通知</p><router-link tag="p" class="more" :to="{name:'articlelist',params:{index:2}}">更多</router-link></div>
              <ul>
                <li v-for="(item,index) in tableData1.list" :key="index">
                  <div class="publishdate">
                    <h1>{{timestampToTime(item.uploadTime).substring(0,4)}}</h1>
                    <p>{{timestampToTime(item.uploadTime).substring(5,10)}}</p>
                  </div>
                  <div class="publishtitle"><router-link tag="a" :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link></div>
                </li>
              </ul>
          </div>
          <div class="bottom-center">
              <div class="box"><p>一周政策</p><router-link tag="p" class="more" :to="{name:'articlelist',params:{index:3}}">更多</router-link></div>
              <ul>
                <li v-for="(item,index) in tableData2.list" :key="index"><router-link tag="a" :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link></li>
              </ul>
              
          </div>
          <div class="bottom-right">
              <div class="box"><p>产业地图</p></div>
              <router-link tag="a" to="/industrymap"><img src="../assets/image/map.png" alt=""></router-link>            
          </div>
        </div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import {articleList} from "@/api/article";
import {getImages} from "@/api/image";

export default {
  data() {
    return {
      minHeight: 10,
      tableData0:"",
      tableData1:"",
      tableData2:"",
      images:""
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 200;
    var me = this;
    window.onresize = function() {
      me.minHeight = document.documentElement.clientHeight - 200;
    };
    this.getArticleList0()
    this.getArticleList1()
    this.getArticleList2()
    this.handleImages();
  },
  methods:{
    handleImages(){
        getImages().then(res => {
          this.images = res;
        })
      },
    //联盟动态
    getArticleList0(){
          articleList(1,3,0).then(res => {
            this.tableData0 = res;
            
          })
        },
    //最新通知
    getArticleList1(){
          articleList(1,5,1).then(res => {
            this.tableData1 = res;
          })
        },
    //一周政策
    getArticleList2(){
          articleList(1,5,2).then(res => {
            this.tableData2 = res;
          })
        },
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
  width: 1200px;
  margin: 0 auto;
  .top {
    height: 430px;
    .top-left {
      width: 820px;
      height: 430px;
      float: left;
    }
    .top-right {
      width: 380px;
      height: 430px;
      float: right;
      position: relative;
      p {
        font-size: 14px;
        color: #666666;
        padding: 10px;
        text-align: left;
      }
      a {
        text-decoration: none;
        color: #999999;
        text-align: right;
        font-size: 14px;
        display: block;
        padding: 0 10px 5px;
      }

      .top-right-top {
        //height: 30px;
        background: url(../assets/image/introduction.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0, auto;
        height: 360px;
        width: 380px;
      }
      .top-right-top-float {
        position: absolute;
        bottom: 110px;
        left: 0px;
        //color: #59b431;
        p {
          color: #ece8e8;
          padding: 0px 10px 0px 10px;
        }
        a {
          color: #ece8e8;
          padding: 0px 20px 0px 0px;
        }
      }
      .top-right-left {
        width: 190px;
        height: 100px;
        float: left;
        color: #ffffff;
        line-height: 100px;
        background-color: #59b431;
        bottom: 0;
        left: 0;
        position: absolute;
      }
      .top-right-right {
        width: 190px;
        height: 100px;
        float: right;
        color: #ffffff;
        line-height: 100px;
        background-color: #ffbf4f;
        bottom: 0;
        right: 0;
        position: absolute;
      }
    }
  }
  .center {
    height: 500px;
    //width: 1400px;
    margin: 20px 0 0 0;
    .center-left {
      width: 820px;
      display: inline-block;
      margin-left: -20px;
      .box {
        position: relative;
        height: 46px;
        border-bottom: 1px solid #0088d3;
        p {
          display: inline-block;
          text-align: center;
          float: left;
          height: 46px;
          width: 100px;
          line-height: 46px;
          color: #ffffff;
          background-color: #0088d3;
        }
        p.more{
          float: right;
          cursor: pointer;
          color: #555555;
        display: inline-block;
        background-color:#fff;
      }
      }
      li {
        height: 131px;
        padding: 10px 0px 0px 0px;
        border-bottom: 1px solid #eeeeee;
        .news-image {
          width: 205px;
          height: 131px;
          float: left;
        }
        .news-content {
          height: 131px;
          width: 580px;
          float: right;
          position: relative;
          a {
            padding: 10px;
            display: block;
            text-align: left;
            text-decoration: none;
            color: #555555;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            padding: 5px;
            text-align: left;
            font-size: 14px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p.type {
            position: absolute;
            bottom: 0;
          }
          p.date {
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
    .center-right {
      width: 360px;
      height: 500px;
      float: right;
      display: inline-block;
      .box {
        border-bottom: 1px solid #0088d3;
        p {
          text-align: center;
          height: 46px;
          width: 100px;
          line-height: 46px;
          color: #ffffff;
          background-color: #0088d3;
        }
      }
      img {
        padding: 10px 0 0;
      }
    }
  }
  .bottom {
    height: 396px;
    padding: 20px 0 0;

    padding: 20px 0px 0 0px;
    .box {
        position: relative;
        height: 46px;
        border-bottom: 1px solid #0088d3;
        p {
          display: inline-block;
          text-align: center;
          float: left;
          height: 46px;
          width: 100px;
          line-height: 46px;
          color: #ffffff;
          background-color: #0088d3;
        }
        p.more{
          float: right;
          cursor: pointer;
          color: #555555;
        display: inline-block;
        background-color:#fff;
      }
      }
    .bottom-left {
      float: left;
      width: 400px;
      display: inline-block;
      ul {
        height: 333px;
        li {
          border-bottom: 1px solid #eeeeee;
          .publishdate {
            width: 70px;
            margin: 25px 0 20px;
            display: inline-block;
            border-right: 2px solid #eeeeee;
            h1 {
              font-size: 20px;
              color: #555555;
            }
            p {
              font-size: 14px;
              color: #999999;
            }
          }
          .publishtitle {
            line-height: 20px;
            text-align: left;
            width: 304px;
            margin: 0 0 20px 10px;
            color: #555555;
            display: inline-block;
            a{
              text-decoration: none;
              color: #555555;
            }
          }
        }
      }
    }
    .bottom-center {
      float: left;
      width: 400px;
      display: inline-block;
      margin: 0 20px 0;
      padding: 0px 0px 0px 0px;
      ul {
        height: 333px;
        li {
          text-align: left;
          padding: 20px 0 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-bottom: 2px dashed #eeeeee;
          a {
            font-size: 14px;
            color: #555555;
            text-decoration: none;
          }
        }
      }
    }
    .bottom-right {
      float: left;
      width: 360px;
      display: inline-block;

      //padding: 0px 28px 0px;
      img {
        padding: 30px 0px 0px;
      }
    }
  }
}
</style>
