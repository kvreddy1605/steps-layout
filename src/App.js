import React, { Component } from 'react';
import './App.scss';
import StepsLayout from './StepsLayout';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';
import MyComponent4 from './components/MyComponent4';
import VerifyTrade from './components/VerifyTrade';

const verifyTradeData = {
  account: {
      name: "Roanoke County Public Schools Cave Spring HS Athletic Dept.",
      number: "24600000196"
  },
  funds: [
    {
      description: "GS Financial Square Government",
      ticker: "GSGXX",
      firm: 7458100,
      tradeDate: "15.Mar.2018",
      tradeType: "Purchase",
      accountType: "Shares",
      tradeAmount: 10000,
      currrency: "USD",
      PLID: "STD",
      shareBalance: "21653.063 | NAV 1.000"
    },
    {
      description: "GS Financial Square Government",
      ticker: "GSGXX",
      firm: 7458100,
      tradeDate: "15.Mar.2018",
      tradeType: "Purchase",
      accountType: "Shares",
      tradeAmount: 10000,
      currrency: "USD",
      PLID: "STD",
      shareBalance: "21653.063 | NAV 1.000"
    }
  ]
}

class App extends Component {
  render() {
    const config =
      [
        { title: 'Enter', component: <MyComponent1 /> },
        { title: 'Verify', component: <MyComponent2 /> },
        { title: 'Confirm', component: <MyComponent3 /> },
        { title: 'Settle', component: <MyComponent4 /> },
      ];

    return (
      <div className="App">
        <div>
          <StepsLayout components={config}/>
        </div>
        <div>
          <VerifyTrade verifyTrade={verifyTradeData} />
          <VerifyTrade verifyTrade={verifyTradeData} />
        </div>
      </div>
    );
  }
}

export default App;
