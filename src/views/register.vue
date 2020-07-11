<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-login></hm-login>
    <hm-input
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      message="用户的昵称必须是3-7位的中文"
      ref="nickname"
    ></hm-input>
    <hm-input
      placeholder="密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="register">注册</hm-button>
    <div class="go-register">
      已有账号？去
      <router-link class="link" to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const userResult = this.$refs.username.validate(this.username)
      const nickResult = this.$refs.nickname.validate(this.nickname)
      const passResult = this.$refs.password.validate(this.password)
      console.log(userResult)
      if (userResult && nickResult && passResult) {
        const res = await this.$axios({
          method: 'post',
          url: '/register',
          data: {
            username: this.username,
            nickname: this.nickname,
            password: this.password
          }
        })
        const { message, statusCode, data } = res.data
        if (statusCode === 200) {
          this.$toast.success(message)
          // 使用query传递参数，参数我们能在地址栏中看到，因此我们可以使用params的方式传递参数，但是如果使用params必须使用命名路由
          // this.$router.push({
          //   path: '/login',
          //   query: { username: this.username, password: this.password }
          // })
          this.$router.push({
            name: 'login',
            params: {
              username: this.username,
              password: this.password
            }
          })
        } else {
          this.$toast.fail(message)
        }
        console.log(res)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.go-register {
  padding: 0 20px;
  font-size: 18px;
  text-align: right;
  .link {
    color: orange;
  }
}
</style>