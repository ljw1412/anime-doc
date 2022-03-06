<template>
  <div class="image-text-grid">
    <div class="image-text-item"
      v-for="item of list"
      :key="item.url">
      <acg-ratio-div class="image">
        <img :src="item.image">
      </acg-ratio-div>
      <router-link class="text"
        :to="item.url">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageTextGrid",
  props: { list: { type: Array, default: () => [] } },
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
