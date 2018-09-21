interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(myTodo.title + ": " + myTodo.text);
}

let myTodo = {
  title: 'Trash',
  text: 'Take out trash'
}

showTodo(myTodo);

// Read only
interface Point {
  readonly x: number;
  readonly y: number;
}

// Implementing interface
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
