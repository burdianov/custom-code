import { authReducer } from './../../auth/authReducer';
import { types } from './../../types/types';

describe('pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'John'
      }
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ name: 'John', logged: true });
  });

  test('debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ logged: false });
  });
});
