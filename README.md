# 创新服务联盟前端部署运维文档

## 项目列表
前端包含两个项目：

- service-alliance前端自评系统
- Service-alliance-backend后台审核管理

## 项目环境搭建

### 须知

以下均为普通用户下操作

### 安装NodeJs

```bash
sudo yum install epel-release
sudo yum install nodejs
```

### 安装git

```bash
sudo yum install git
```

### 克隆项目

1. 在`/opt`目录创建`service-alliance`和`service-alliance-backend`文件夹
2. 在对应目录内克隆项目，指令`git clone http://192.168.66.254/tech_dept/service-alliance.git `和`git clone http://192.168.66.254/tech_dept/service-alliance-backend.git`输入对应的用户名密码

### 安装依赖

对应项目根目录下分别执行`npm install npm -g`和`npm install`

### 配置和编译

1. 分别进入`service-alliance/src/request`和`service-alliance-backend/src/request`目录修改`axios.defaults.baseURL="http://api.frontent.cxfwlm.org.cn"`和`axios.defaults.baseURL="http://api.backend.cxfwlm.org.cn"`
2. 分别在各自目录执行`npm run build`
3. 编译完成后会在项目根目录生成`dist`目录

### 配置Nginx

按下面示例配置完，执行命令`sudo service nginx restart`，重启nginx即可

示例

```
server{
        listen 80;
        server_name cxfwlm.org.cn;
        root   /opt/service-alliance/dist/;
        index  index.html index.htm;
        location / {
                index  index.html;
                try_files $uri $uri/ /index.html;
        }
}
server{
        listen 80;
        server_name admin.cxfwlm.org.cn;
        root   /opt/service-alliance-backend/dist/;
        index  index.html index.htm;
        location / {
                index  index.html;
                try_files $uri $uri/ /index.html;
        }
}
```

### 地图ak申请

1. 创建百度地图开放平台用户
2. 申请地址`http://lbsyun.baidu.com/apiconsole/key`
3. 创建应用应用类型选择`浏览器端`，返回复制对应的AK
4. 更改位置`service-alliance/src/main.js`

```
Vue.use(BaiduMap, {
  ak: "申请到的key"
});
```

