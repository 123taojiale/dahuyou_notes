<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <draggable v-model="myArray" @start="drag=true" :force-fallback="true" @end="drag=false" animation="300"
      chosen-class="drag-chosen" ghost-class="drag-ghost">
      <div v-for="element in myArray" :key="element.id" class="drag-item">{{element.name}}</div>
    </draggable>
    <pre>{{myArray}}</pre>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'App',
  data() {
    return {
      myArray: [
        {
          "name": "item1",
          "id": 1
        },
        {
          "name": "item2",
          "id": 2
        },
        {
          "name": "item3",
          "id": 3
        }
      ]
    }
  },
  components: {
    draggable
  }
}
</script>

<style>
#app {
  width: 50vw;
  margin: 60px auto 0;
  color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.drag-item {
  border: 1px solid #ddd;
  padding: 20px 10px;
  cursor: pointer;
}

.drag-chosen {
  border-color: #50b0ad;
}

.drag-ghost {
  background-color: #50b0ad;
  color: #fff;
}
</style>
