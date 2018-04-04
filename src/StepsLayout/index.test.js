import React from 'react';
import StepsLayout from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('StepsLayout Component Test', () => {

    it('SnapShot Test', () => {
        const wrapper = shallow(<StepsLayout components={[{title: 'hello', component: <p>hello</p>}]} />) 
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('On component initialization, it creates state currentComponent as expected when startAtComponent is not passed as props', () => {
        const wrapper = shallow(<StepsLayout components={[{title: 'hello', component: <p>hello</p>}]} />)
        expect(wrapper.state('currentComponent')).toBe(0);
    })
    it('On component initialization, it creates state navState as expected when startAtComponent is not passed as props', () => {
        const wrapper = shallow(<StepsLayout components={[{title: 'hello', component: <p>hello</p>}]} />)
        expect(wrapper.state('navState')).toEqual(['doing'])
    })
    it('On component initialization, it creates state currentComponent as expected when startAtComponent is passed as props', () => {
        const components = [
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>}
        ]
        const wrapper = shallow(<StepsLayout components={components} startAtComponent={1} />)
        expect(wrapper.state('currentComponent')).toBe(1)
    })
    it('On component initialization, it creates state navState as expected when startAtComponent is passed as props', () => {
        const components = [
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>}
        ]
        const wrapper = shallow(<StepsLayout components={components} startAtComponent={1} />)
        expect(wrapper.state('navState')).toEqual(['done', 'doing', 'todo'])
    })
    it('getNavStates method returns correctly', () => {
        const components = [
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>}
        ]
        const wrapper = shallow(<StepsLayout components={components} />)
        const actualValues = wrapper.instance().getNavStates(1, 3);
        const expectedValues = ['done', 'doing', 'todo'];
        expect(actualValues).toEqual(expectedValues);
    })
    it('classNames are assigned as expected', () => {
        const components = [
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>},
            {title: 'hello', component: <p>hello</p>}
        ]
        const wrapper = shallow(<StepsLayout components={components} />)
        wrapper.setState({ navState: ['done', 'doing', 'todo'] });
        expect(wrapper.find('.progress-doing').length).toBe(1);
        expect(wrapper.find('.progress-done').length).toBe(1);
        expect(wrapper.find('.progress-todo').length).toBe(1);
    })
})

