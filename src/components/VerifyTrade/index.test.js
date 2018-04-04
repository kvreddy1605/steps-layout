import React from 'react';
import VerifyTrade from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('VerifyTrade Component Test', () => {

    it('SnapShot Test', () => {
        const verifyTrade = {
            account: {},
            funds: []
        }
        const wrapper = shallow(<VerifyTrade verifyTrade={verifyTrade} />) 
        expect(toJson(wrapper)).toMatchSnapshot();
    })
        
})

