import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DownloadFile from '../DownloadFile';

Enzyme.configure({ adapter: new Adapter() });

describe("DownloadFile", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<DownloadFile />);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<DownloadFile />);
    expect(wrapper).toMatchSnapshot();
  });

  it("shows message when file has issues", () => {
      const wrapper = shallow(<DownloadFile hasIssues={true} />);
      expect(wrapper.contains(<h1>Unable to protect file due to structual issues</h1>)).toBe(true);
  });

  it("shows button when file has been protected", () => {
    const wrapper = shallow(<DownloadFile hasIssues={false} />);
    expect(wrapper.contains(<button>Download Protected File</button>))
  })
})

