<script setup lang="ts">
import { withBase } from 'vitepress'

defineOptions({ name: 'DocInfoCard' })
const props = defineProps({
  left: Boolean,
  image: { type: String, default: '' },
  info: { type: Object, default: () => ({}) }
})

function formatData(value: any) {
  if (typeof value !== 'string') return value
  return value.replace(/\n/g, '<br />')
}
</script>

<template>
  <div class="doc-info-card" :class="[left ? 'is-left' : 'is-right']">
    <table style="margin: 0">
      <tr v-if="image">
        <td colspan="2" style="font-size: 0">
          <img :src="withBase(image)" />
        </td>
      </tr>
      <tr v-for="(item, i) of info" :key="item.label + i">
        <td style="width: 80px">{{ item.label }}</td>
        <td v-html="formatData(item.value)"></td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
@use '../styles/palette.scss' as *;

.doc-info-card {
  position: relative;
  width: 250px;
  box-sizing: border-box;
  z-index: 10;
  &.is-left {
    float: left;
    padding-right: 4px;
  }
  &.is-right {
    float: right;
    padding-left: 4px;
  }

  table {
    margin: 0;

    background-color: var(--c-bg);

    th,
    td {
      padding: 0.4em;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
}

@media (max-width: #{$MQMobile}) {
  .doc-info-card {
    width: 100%;
    margin-bottom: 12px;
  }
}
</style>
