<script setup lang="ts">
import { PropType } from 'vue'
import { withBase } from 'vitepress'

defineOptions({ name: 'ImageTextGrid' })
const props = defineProps({
  list: { type: Array as PropType<ImageTextItem[]>, default: () => [] },
  fit: { type: String, default: 'cover' }
})
</script>

<template>
  <div class="image-text-grid">
    <div class="image-text-item" v-for="item of list" :key="item.url">
      <a :href="item.url">
        <acg-ratio-div class="image">
          <img :src="withBase(item.image)" :style="{ 'object-fit': fit }" />
        </acg-ratio-div>
        <div class="text">{{ item.name }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/palette.scss' as *;
.image-text-grid {
  --grid-gutter: 12px;
  --grid-columns: 5;

  display: grid;
  grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));
  row-gap: var(--grid-gutter);
  column-gap: var(--grid-gutter);

  a {
    text-decoration: none !important;
  }

  .image-text-item {
    width: 100%;

    .image {
      width: 100%;
      font-size: 0;
      border-radius: 8px;
      overflow: hidden;
      img {
        pointer-events: none;
        transition: transform 0.3s ease-out;
      }
    }

    .text {
      display: block;
      text-align: center;
      padding: 4px 0;
      font-size: 14px;
      line-height: 1.2;
    }

    &:hover {
      .image img {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: #{$MQMobile}) {
  .image-text-grid {
    --grid-gutter: 8px;
    --grid-columns: 4;
  }
}
</style>
