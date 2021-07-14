<template>
    <div>
        <h2>练习使用 vant </h2>
        <h3>1.0 使用 vant 中的 button</h3>
        <van-button @click="fn" type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <h3>2.0 使用 vant 中的单元格</h3>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <h3>3.0 使用 vant 中的图标</h3>
        <van-icon name="like" />
        <van-icon name="star" />
        <h3>4.0 使用 vant 中的插槽</h3>
        <van-cell value="内容">
            <template #title>
                <van-icon name="like" />
                <span>单元格</span>
                <van-icon name="star" />
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log('hello')
    }
  }
}
</script>

<style>

</style>
