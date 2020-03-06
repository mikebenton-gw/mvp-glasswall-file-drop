import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoadingIndicator from "../components/LoadingIndicator";

Enzyme.configure({adapter: new Adapter()});

describe("LoadingIndicator", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LoadingIndicator />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<LoadingIndicator />);
    expect(wrapper).toMatchSnapshot();
  });
});
