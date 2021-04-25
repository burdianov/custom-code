import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './../../hooks/useForm';

describe('pruebas en useForm', () => {
  const initialForm = {
    name: 'john',
    email: 'john@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    const target = { name: 'name', value: 'Volodea' };
    act(() => {
      handleInputChange({ target });
    });

    const [values] = result.current;

    expect(values).toEqual({ ...initialForm, name: target.value });
  });

  test('debe de re-establecer el formulario con reset', () => {
    const target = { name: 'name', value: 'Volodea' };

    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({ target });
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
