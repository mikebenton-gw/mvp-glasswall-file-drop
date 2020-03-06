import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProcessFile from "../components/ProcessFile";

Enzyme.configure({adapter: new Adapter()});

describe("ProcessFile", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ProcessFile />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<ProcessFile />);
    expect(wrapper).toMatchSnapshot();
  });
});
