<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{ msg }}</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    </ul>
    <input class="form-control" v-model="msg2"/>
    <h1>{{ msg2 }}</h1>
    <button id="show-modal" @click="showModal = true" class="btn btn-danger">显示模态框吧</button>
    <button @click="getDouBan" type="button" class="btn btn-primary">点击获取豆瓣排行榜top10</button>
    <br/><br/>
    <ul>
      <li v-for="article in articles">
        <p class="bg-primary" style="height:30px">{{article.title}}</p>
      </li>
    </ul>
    <modala v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </modala>
  </div>
</template>

<script>
  import Modala from './model/model'
  export default {
    name: 'test',
    data () {
      return {
        msg: '这个页面是用来测试各种组件的',
        msg2: '',
        articles: [],
        showModal: false
      }
    },
    components: {
      Modala
    },
    beforeCreate(){
      //检查有没有登录
      if (!window.sessionStorage.getItem("sellercube_token")) {
          alert(window.sessionStorage.getItem("sellercube_token"))
        this.$router.push("/")
      }
    },
    methods: {
      getDouBan: function () {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then(function (response) {
          // 这里是处理正确的回调
          this.articles = response.data.subjects
        }, function (response) {
          // 这里是处理错误的回调
          console.log(response)
        })
      }
    }
  }
</script>
