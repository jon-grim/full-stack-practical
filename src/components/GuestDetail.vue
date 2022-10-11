<template>
  <div class="flex flex-col">
    <dt class="text-xs font-semibold text-slate-800">{{ title }}</dt>
    <dd>{{ value }}</dd>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
