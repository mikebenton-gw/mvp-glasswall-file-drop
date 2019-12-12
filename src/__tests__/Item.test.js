import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Item from '../Item';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockItem = { children: ["Hello", "World"] };

describe("Item", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Item item={mockItem} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<Item item={mockItem} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("contains a tr", () => {
    const wrapper = shallow(<Item item={mockItem} />);
    expect(wrapper.contains(<tr><td>{mockItem.children[0].value}</td></tr>)).toBe(true);
  })

})
