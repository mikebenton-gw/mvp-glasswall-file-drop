import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RenderAnalysis from "../components/RenderAnalysis";

Enzyme.configure({adapter: new Adapter()});

describe("RenderAnalysis", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RenderAnalysis />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<RenderAnalysis />);
    expect(wrapper).toMatchSnapshot();
  });
});
