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
                <a href="">北京企业技术中心创新服务联盟成立</a>
                <p>2017年4月24日,北京企业技术中心创新服务联盟成立大会暨第一次工作会在软交所顺利召开</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-10</p>
                </div>
              </li>
              <li>
                <div class="news-image">
                    <img src="../assets/image/news02.png" alt="">
                </div>
                <div class="news-content">
                <a href="">北京市企业技术中心创新服务联盟2018年第二届理事会在京召开</a>
                <p>北京市企业技术创新服务联盟是在市经信委的指导和支持下，为进一步深化“放管服”改革，构建了由政府主导认定，优化为标准审核形式——全国首创及唯一依托标准进行企业技术中心建设与管理的模式。</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-10</p>
                </div>
              </li>
              <li>
                <div class="news-image">
                    <img src="../assets/image/news03.png" alt="">
                </div>
                <div class="news-content">
                <a href="">企业技术中心联盟加入胚芽企业服务平台</a>
                <p>北京企业技术中心创新服务联盟（以下简称联盟）在市经信委的指导下，自2017年成立以来，成员数量达600余家，涵盖高精尖科技各领域大中型领军企业，在企业技术中心的搭建和创新服务、政企交流等方面影响巨大</p>             
                <p class="type">[企业新闻]</p>
                <p class="date">2017-07-10</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="center-right">
            <div class="box"><p>企业自评</p></div>
            <img src="../assets/image/self-evaluation.png" alt="">
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
              <div class="box"><p>最新通知</p></div>
              <ul>
                <li>
                  <div class="publishdate">
                    <h1>2018</h1>
                    <p>11-20</p>
                  </div>
                  <div class="publishtitle">关于召开高科技企业2018年融资专场对接会的通知</div>
                </li>
                <li>
                 <div class="publishdate">
                    <h1>2018</h1>
                    <p>11-19</p>
                  </div>
                  <div class="publishtitle">申报北京：开展2018年度北京市市级企业技术中心创建工作的预通知</div>
                </li>
                <li>
                  <div class="publishdate">
                    <h1>2018</h1>
                    <p>11-19</p>
                  </div>
                  <div class="publishtitle">关于召开2018年北京企业技术中心创新服务联盟揭牌仪式的通知</div>
                </li>
              </ul>
          </div>
          <div class="bottom-center">
              <div class="box"><p>一周政策</p></div>
              <ul>
                <li><a href="">组织申报新一代关于召开高科技企业2018年融资专场对接会的通知</a></li>
                <li><a href="">申报2019年度示范园区专利战略专项资金</a></li>
                <li><a href="">开展网络安全技术应用试点示范项目推荐工作</a></li>
                <li><a href="">国家重点研发计划“战略性国际科技创新合作”重点专项2018年度联合研发与示范项目申报指南</a></li>
                <li><a href="">著作权侵权</a></li>
                <li><a href="">交通事故</a></li>
              </ul>
              
          </div>
          <div class="bottom-right">
              <div class="box"><p>产业地图</p></div>
              <img src="../assets/image/map.png" alt="">
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
    //width: 1400px;
    margin: 20px 0 0 0;
    .center-left {
      width: 820px;
      display: inline-block;
      margin-left: -20px;
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
    width: 1400px;
    padding: 20px 0 0;
    
    padding: 20px 0px 0 0px;
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
          }
        }
      }
    }
    .bottom-center {
      float: left;
      width: 400px;
      display: inline-block;
      margin: 0 20px 0;
      padding: 0px 0px 0px 0px ;
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
