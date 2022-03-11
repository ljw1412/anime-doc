<template>
  <div class="doc-info-card"
    :class="[ left ? 'is-left' : 'is-right' ]">
    <table>
      <tr>
        <td colspan="2"
          style="font-size: 0">
          <img v-if="image"
            :src="$withBase(image)" />
        </td>
      </tr>
      <tr v-for="(item,i) of info"
        :key="item.label + i">
        <td style="width: 80px;">{{ item.label }}</td>
        <td v-html="formatData(item.value)"></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocInfoCard",

  props: {
    left: Boolean,
    image: { type: [String, Array], default: "" },
    info: { type: Object, default: () => ({}) },
  },

  methods: {
    formatData(value) {
      if (typeof value !== "string") return value;
      return value.replace(/\n/g, "<br />");
    },
  },
});
</script>

<style lang="scss">
@import "../styles/palette.scss";

.doc-info-card {
  width: 260px;
  box-sizing: border-box;
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
    font-size: 12px;
    background-color: var(--c-bg);

    th,
    td {
      padding: 0.4em;
      text-align: center;
    }
  }
}

@media (max-width: #{$MQMobile}) {
  .doc-info-card {
    width: 100%;
  }
}
</style>
