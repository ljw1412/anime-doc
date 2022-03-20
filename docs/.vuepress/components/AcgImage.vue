<template>
  <div class="acg-image" :class="[left ? 'is-left' : 'is-right']" :style="{ width }">
    <img :src="$withBase(src)" :alt="title" />
    <div class="image-name">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AcgImage',

  props: {
    left: Boolean,
    width: String,
    src: String,
    title: String
  }
})
</script>

<style lang="scss">
.acg-image {
  padding: 2px;
  box-sizing: border-box;
  border: 1px solid var(--c-border);
  background-color: var(--c-bg);
  font-size: 0;

  &.is-left {
    float: left;
    margin: 4px 4px 4px 0;
  }
  &.is-right {
    float: right;
    margin: 4px 0 4px 4px;
  }

  .image-name {
    font-size: 14px;
    text-align: center;
  }
}
</style>
