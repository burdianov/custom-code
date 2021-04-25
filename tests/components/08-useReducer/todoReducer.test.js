import { demoTodos } from '../../fixtures/demoTodos';
import { todoReducer } from './../../../components/08-useReducer/todoReducer';

describe('pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('debe de agregar un todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender dibujar',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('debe de borrar un todo', () => {
    const action = {
      type: 'delete',
      payload: 1
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test('debe de acer el toggle del todo', () => {
    const action = {
      type: 'toggle',
      payload: 1
    };

    const state = todoReducer(demoTodos, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
