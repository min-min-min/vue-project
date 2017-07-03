<template>
  <div class="row">
    <div class="col-md-4"></div>
    <form class="form-horizontal col-md-4" style="margin: 10% auto">
      <div class="row" v-if="showTip">
        <div class="col-md-12">
          <div class="col-md-3"></div>
          <div class="col-md-4 alert alert-danger">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
            账号或者密码错误
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label class="col-sm-2 control-label">账号</label>
          <input type="email" class="form-control" style="width: 300px" placeholder="Username" v-model="username">
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-12">
          <label class="col-sm-2 control-label">密码</label>
          <input type="password" class="form-control" style="width: 300px" placeholder="Password" v-model="password">
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-12">
          <label class="col-sm-2 control-label"></label>
          <button type="submit" class="form-control btn btn-primary" style="width: 300px;display: block;"
                  @click="submit">登录
          </button>
        </div>
      </div>
    </form>
    <div class="col-md-4"></div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        username: global.username,
        password: global.password,
        showTip: false
      }
    },
    methods: {
      submit () {
        this.$http.post(global.host + "/login", {
          "username": this.username,
          "password": this.password
        }, {emulateJSON: true}).then(function (rep) {
          if (rep.body.code == 200) {
            window.sessionStorage.setItem("sellercube_token", rep.body.data.accessToken)
            window.sessionStorage.setItem("username",rep.body.data.name)
            window.sessionStorage.setItem("userId",rep.body.data.id)
            this.$router.push("/main")
          } else {
            this.showTip = true
          }
        }, function (error) {
            alert("A")
        })
      }
    }
  }
</script>
<style>
  .row {
    margin-right: 0px;
    margin-left: 0px;
  }
</style>
