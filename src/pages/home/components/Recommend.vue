<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: "http://img1.qunarzz.com/sight/p0/1507/1d/116e14079ea2130a37b92117571739f3.water.jpg_200x200_4c6bf620.jpg",
          title: '镇江金山',
          desc: '白蛇传的传说，处处诉说着镇江古城的历史'
        }, {
          id: '0002',
          imgUrl: "http://img1.qunarzz.com/sight/p0/1507/1d/116e14079ea2130a37b92117571739f3.water.jpg_200x200_4c6bf620.jpg",
          title: '镇江金山',
          desc: '白蛇传的传说，处处诉说着镇江古城的历史'
        }, {
          id: '0003',
          imgUrl: "http://img1.qunarzz.com/sight/p0/1507/1d/116e14079ea2130a37b92117571739f3.water.jpg_200x200_4c6bf620.jpg",
          title: '镇江金山',
          desc: '白蛇传的传说，处处诉说着镇江古城的历史'
        }, {
          id: '0004',
          imgUrl: "http://img1.qunarzz.com/sight/p0/1507/1d/116e14079ea2130a37b92117571739f3.water.jpg_200x200_4c6bf620.jpg",
          title: '镇江金山',
          desc: '白蛇传的传说，处处诉说着镇江古城的历史'
        }, {
          id: '0005',
          imgUrl: "http://img1.qunarzz.com/sight/p0/1507/1d/116e14079ea2130a37b92117571739f3.water.jpg_200x200_4c6bf620.jpg",
          title: '镇江金山',
          desc: '白蛇传的传说，处处诉说着镇江古城的历史'
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
    .recommend-title
      margin-top: .2rem
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
          line-height: .54rem
          font-size: .32rem
          ellipsis()
        .item-desc
          line-height: .4rem
          color: #ccc
          ellipsis()
        .item-button
          line-height: .44rem
          margin-top: .2rem
          background: #ff9300
          padding: 0 .1rem
          border-radius: .06rem
          color: #fff
</style>
