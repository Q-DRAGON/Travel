<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        // 如果超出 8 个, 超出的第一个下标是 8, 8 / 8 = 1
        const page = Math.floor(index / 8)
        // 单页初始化，创建一个空数组
        if(!pages[page]) {
          pages[page] = []
        }
        // 将 iconList push 进去
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icon
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    position: relative
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .28rem
      padding: .2rem
      box-sizing: border-box
      .icon-img-content
        display: block
        height: 100%
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .28rem
      line-height: .28rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
