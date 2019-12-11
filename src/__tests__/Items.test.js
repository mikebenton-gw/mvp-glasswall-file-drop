import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Items from '../Items';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockItems = [
    {children: ["Hello", "World"]},
    {children: ["How Are", "You"]}];

describe("Items", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Items items={mockItems} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<Items items={mockItems} />);
    expect(wrapper).toMatchSnapshot();
  });
})
