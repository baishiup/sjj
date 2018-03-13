<template>
  <div id="App">
    <Item></Item>
    vue template
    <Item></Item>
  </div>
</template>

<script>
import Item from './components/Item';
export default {
  name: 'App',
  components: {
    Item
  }
};
</script>

<style lang="less" scoped>
@import url('./assets/style/common.less');
#App {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
