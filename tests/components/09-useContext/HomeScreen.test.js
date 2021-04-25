import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import HomeScreen from './../../../components/09-useContext/HomeScreen';

describe('pruebas en <HomeScreen />', () => {
  const user = {
    name: 'John',
    email: 'john@gmail.com'
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
