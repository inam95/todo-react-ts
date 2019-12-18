import { FetchTodosAction, DeleteTodoAction } from "./todo";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
