<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-2 control-label">Username</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" placeholder="Username" v-model="username">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control"  placeholder="Password" v-model="password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> Remember me
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" @click="submit">Sign in</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username:global.username,
        password:global.password
      }
    },
    methods:{
        submit () {
          if ("admin@qq.com"==this.username && "admin"==this.password){
              window.sessionStorage.setItem("sellercube_token","123456")
            this.$router.push("/test")
          }
      }
    }
  }
</script>
