<template>
  <div class="modal">
    <slot>
      <button>default button...</button>
    </slot>
  </div>
</template>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
}
</style>
