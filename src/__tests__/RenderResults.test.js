import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RenderResults from "../components/RenderResults";

Enzyme.configure({adapter: new Adapter()});

const validation = "File Size is too big";

describe("RenderResults", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RenderResults />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<RenderResults />);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays validation errors if validation exists", () => {
    const wrapper = shallow(<RenderResults validation={validation} />);
    expect(
      wrapper.contains(
        <div className="validationErrors">
          <p>{validation}</p>
        </div>
      )
    ).toBe(true);
  });

  it("doesn't display validation errors if no validation exists", () => {
    const wrapper = shallow(<RenderResults validation= {null} />);
    expect(
      wrapper.contains(
        <div className="validationErrors">
          <p>{validation}</p>
        </div>
      )
    ).toBe(false);
  });
});
