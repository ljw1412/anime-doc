<template>
  <div class="image-text-grid">
    <div class="image-text-item" v-for="item of list" :key="item.url">
      <router-link :to="item.url">
        <acg-ratio-div class="image">
          <img :src="$withBase(item.image)" :style="{ 'object-fit': fit }" />
        </acg-ratio-div>
        <div class="text">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageTextGrid",
  props: {
    list: { type: Array, default: () => [] },
    fit: String
  },
});
</script>

<style lang="scss">
.image-text-grid {
  --grid-gutter: 8px;
  display: flex;
  flex-wrap: wrap;
  .image-text-item {
    flex-shrink: 0;
    width: calc(16.66% - var(--grid-gutter));
    margin-right: var(--grid-gutter);
    margin-bottom: var(--grid-gutter);
    .image {
      width: 100%;
      font-size: 0;
      img {
        pointer-events: none;
      }
    }
    .text {
      display: block;
      text-align: center;
    }
    &:nth-child(6n) {
      margin-right: 0;
    }
  }
}
</style>
