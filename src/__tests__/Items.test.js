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

  it("contains an Item component for each Item", () => {
    const wrapper = shallow(<Items items={mockItems} />);
    expect(wrapper.find("Item")).toHaveLength(mockItems.length);
  })

  it("returns null when there is no data to map", () => {
    const wrapper = shallow(<Items />);
    expect(wrapper).toMatchSnapshot();
  })

  it("doesn't break without items", () => {
    const wrapper = shallow(<Items />);
    expect(wrapper.find("Item")).toHaveLength(0);
  })

  it("doesn't break with empty items", () => {
    const wrapper = shallow(<Items items={[]} />);
    expect(wrapper.find("Item")).toHaveLength(0);
  })
})
