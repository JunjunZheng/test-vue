<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-login></hm-login>
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式错误"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="login">登录</hm-button>
    <div class="go-register">
      没有账号？去
      <router-link class="link" to="/register">注册</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    // console.log(this.$route)
    // 使用query获取参数
    // this.username = this.$route.query.username
    // this.password = this.$route.query.password
    // 使用params获取参数
    this.username = this.$route.params.username
    this.password = this.$route.params.password
  },
  methods: {
    async login() {
      const userNameResult = this.$refs.username.validate(this.username)
      const passwordResult = this.$refs.password.validate(this.password)
      if (userNameResult && passwordResult) {
        // const res = await this.$axios.post('http://localhost:3000/login', {
        //   username: this.username,
        //   password: this.password
        // })
        const res = await this.$axios({
          method: 'post',
          url: '/login',
          data: {
            username: this.username,
            password: this.password
          }
        })
        const { message, statusCode, data } = res.data
        if (statusCode === 200) {
          this.$toast.success(message)
          localStorage.setItem('token', data.token)
          localStorage.setItem('userId', data.user.id)
          this.$router.push('/user')
        } else {
          this.$toast.fail(message)
        }
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
