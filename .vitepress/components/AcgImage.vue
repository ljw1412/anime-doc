<script setup lang="ts">
import { withBase } from 'vitepress'

defineOptions({ name: 'AcgImage' })
const props = defineProps({
  left: Boolean,
  width: String,
  src: { type: String, default: '' },
  title: String,
  fit: { type: String, default: 'cover' }
})
</script>

<template>
  <div
    class="acg-image"
    :class="[left ? 'is-left' : 'is-right']"
    :style="{ width }"
  >
    <img :src="withBase(src)" :alt="title" :style="{ objectFit: fit }" />
    <div class="image-name">{{ title }}</div>
  </div>
</template>

<style lang="scss">
.acg-image {
  padding: 2px;
  box-sizing: border-box;
  border: 1px solid var(--c-border);
  background-color: var(--c-bg);
  font-size: 0;

  img {
    width: 100%;
  }

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
