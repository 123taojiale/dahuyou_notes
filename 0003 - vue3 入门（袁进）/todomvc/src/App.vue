<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoContentRef"
          @keyup.enter="increaseNewTodo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="(todo, i) in filteredTodoList"
            :key="todo.id"
            :class="{ editing: todo === editingTodoRef, completed: todo.completed === true }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.content }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.content"
              @keyup.esc="cancelTodo(todo)"
              @blur="updateTodo(todo, todo.content)"
              @keyup.enter="updateTodo(todo, todo.content)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{ remainTodoLength }}</strong>
          <span>item{{ remainTodoLength > 1 ? "s" : "" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a
              href="#/all"
              :class="{ selected: ['all', ''].includes(visibilityRef) }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" :style="{
          display: `${completedTodoLength > 0 ? 'inline' : 'none'}`
        }"
        @click="removeAllDone">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList.js";
import addNewTodo from "./composition/addNewTodo.js";
import filterTodoList from "./composition/filterTodoList.js";
import editTodo from "./composition/editTodo.js";
import useRemove from "./composition/useRemove.js";

export default {
  setup() {
    const { todosRef } = useTodoList(); // 获取所有的任务列表

    return {
      todosRef,
      ...addNewTodo(todosRef),
      ...filterTodoList(todosRef),
      ...editTodo(todosRef),
      ...useRemove(todosRef)
    };
  },
};
</script>
