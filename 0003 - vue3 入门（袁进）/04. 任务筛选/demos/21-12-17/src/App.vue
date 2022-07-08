<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          v-model="newTodoRef"
          @keyup.enter="addTodo"
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in filteredTodoList"
            :class="{ completed: todo.completed }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label>{{ todo.content }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ remainingTodoLen }}</strong>
          <span>item{{ remainingTodoLen > 1 ? "s" : "" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all' }"
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
        <button
          class="clear-completed"
          :style="{
            display: `${completedTodoLen > 0 ? 'inline' : 'none'}`,
          }"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList.js";
import addTodoList from "./composition/addTodoList.js";
import filterTodoList from "./composition/filterTodoList.js";

export default {
  setup() {
    const todoListRef = useTodoList().todoListRef; // 具有响应式的任务列表

    return {
      todoListRef,
      ...addTodoList(todoListRef),
      ...filterTodoList(todoListRef),
    };
  },
};
</script>
