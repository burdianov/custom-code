import { shallow } from 'enzyme';
import RealLifeRef from './../../../components/04-useRef/RealLifeRef';

describe('pruebas en <RealLifeRef />', () => {
  const wrapper = shallow(<RealLifeRef />);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
