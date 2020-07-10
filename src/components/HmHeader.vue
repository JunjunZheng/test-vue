<template>
  <div class="wrapper">
    <div class="hm-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconjiantou2"></span>
      </div>
      <div class="center">
        <slot></slot>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.wrapper {
  height: 40px;
}
.hm-header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 0 10px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  .left,
  .right {
    width: 30px;
  }
  .center {
    flex: 1;
    font-weight: 700;
    font-size: 16px;
  }
}
</style>