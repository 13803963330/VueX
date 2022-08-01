<template>
  <div
    :class="
      type == 'default'
        ? 'btn default'
        : type == 'primary'
        ? 'btn primary'
        : type == 'danger'
        ? 'btn danger'
        : 'btn default'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'alley-Button',
  props: {
    type: {
      type: String,
      default: 'Default'
    }
  }
}
</script>

<style>
.btn {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.default {
  border: 1px solid rgb(60, 97, 153);
}

.primary {
  border: 1px solid rgb(145, 39, 39);
}

.danger {
  border: 1px solid rgb(181, 209, 79);
}
</style>
