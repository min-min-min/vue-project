<template>
  <div>
    <p class="bg-primary" style="font-size: 30px">
      {{name}},欢迎你登录JAVA打印机后台管理系统
    </p>
    <br/>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="input-group input-group-lg col-md-4">
        <span class="input-group-addon">用户名：</span>
        <select class="form-control">
          <option>aaaaa</option>
          <option>bbbbbbbb</option>
        </select>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="input-group input-group-lg col-md-4">
        <span class="input-group-addon">打印类型：</span>
        <select class="form-control">
          <option>aaaaa</option>
          <option>bbbbbbbb</option>
        </select>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="input-group input-group-lg col-md-4">
        <span class="input-group-addon">机器名：</span>
        <select class="form-control">
          <option>aaaaa</option>
          <option>bbbbbbbb</option>
        </select>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="input-group input-group-lg col-md-4">
        <button class="btn btn-primary btn-lg" style="width: 100%" @click="sure">确定</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'main',
    data(){
      return {
        name: window.sessionStorage.getItem("username")
      }
    },
    beforeCreate(){
      //检查有没有登录
      if (!window.sessionStorage.getItem("sellercube_token")) {
        this.$router.push("/")
      }
    },
    methods: {
      sure: function () {

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
