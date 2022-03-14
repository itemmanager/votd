import renderer from 'react-test-renderer';
import { Footer } from "../Footer";
import 'jest-styled-components'


test('Footer snapshot', () => {
    const component = renderer.create(
        <Footer />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
