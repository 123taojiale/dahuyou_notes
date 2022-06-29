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
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="allDone"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in filteredTodoList"
            :class="{
              completed: todo.completed,
              editing: todo === editingTodoRef,
            }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="startEdit(todo)">{{ todo.content }}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.content"
              @keyup.esc="cancelEdit(todo)"
              @blur="confirmEdit(todo)"
              @keyup.enter="confirmEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todoListRef.length > 0">
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
          @click="removeAllCompleted"
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
import modifyTodoList from "./composition/modifyTodoList.js";
import removeTodo from "./composition/removeTodo.js";

export default {
  setup() {
    const todoListRef = useTodoList().todoListRef; // 具有响应式的任务列表

    return {
      todoListRef,
      ...addTodoList(todoListRef),
      ...filterTodoList(todoListRef),
      ...modifyTodoList(todoListRef),
      ...removeTodo(todoListRef),
    };
  },
};
</script>
