<template>
  <div>
    <div class="container" :style="{minHeight:minHeight + 'px'}">
      <Head></Head>
      <div class="content">
        <div class="top">
          <div class="top-left">
            <img src="../assets/image/banner.png" alt="">
          </div>
          <div class="top-right">
            <img src="../assets/image/introduction.png" alt="">
            <p>北京企业技术中心创新服务联盟是在市经信委的指导与支持下成立的非营利性社会组织，负责《北京市企业技术中心建设评价规范》贯标工作，并为企业提供投资并购、政府申报、技术培训、区域间合作等服务。致力于搭建政府与企业间无障碍沟通桥梁，成为企业与企业间交流合作的纽带。</p>
            <a href="">查看更多</a>
            <div class="top-right-left">服务</div>
            <div class="top-right-right">加入</div>
          </div>
        </div>
        <div class="center">
          <div class="center-left">
            <div class="box"><p>联盟动态</p></div>
            <ul>             
              <li>
                <div class="news-image">
                    <img src="../assets/image/news01.png" alt="">
                </div>
                <div class="news-content">
                <a href="">北京企业技术中心创新服务联盟成立导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</a>
                <p>北京企业技术中心创新服务联盟是在市经信委的指导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-01</p>
                </div>
              </li>
              <li>
                <div class="news-image">
                    <img src="../assets/image/news01.png" alt="">
                </div>
                <div class="news-content">
                <a href="">北京企业技术中心创新服务联盟成立导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</a>
                <p>北京企业技术中心创新服务联盟是在市经信委的指导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-01</p>
                </div>
              </li>
              <li>
                <div class="news-image">
                    <img src="../assets/image/news01.png" alt="">
                </div>
                <div class="news-content">
                <a href="">北京企业技术中心创新服务联盟成立导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</a>
                <p>北京企业技术中心创新服务联盟是在市经信委的指导与支持下成立的非营利性社会组织导与支持下成立的非营利性社会组织</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-01</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="center-right"></div>
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
export default {
  data() {
    return {
      minHeight: 10
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
    margin: 20px 0 0;
    .center-left {
      width: 820px;
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
      li {
        height: 131px;
        padding: 10px;
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
  }
}
</style>
