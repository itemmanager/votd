import renderer from 'react-test-renderer';
import { Header } from "../Header";
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components'


test('Header snapshot', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
