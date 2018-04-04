import React from 'react';
import './index.scss';

const verifyTradeLabels = ["Description", "Ticker", "Firm/Branch", "Trade Date", "Trade Type", "Account Type", "Trade Amount", "Currrency", "PLID"];

const createLabels = (labels) => (
    labels.map((label, index)=> {
        return (<div className="label" key={index}>{label}</div>)
    })  
);
const createFund = (fund) => {
    const {description, ticker, firm, tradeDate, tradeType, accountType, tradeAmount, currrency, PLID, shareBalance} = fund;
    return (<div className="fund">
                <div className="fund__row1">
                    <div>{description}</div>
                    <div>{ticker}</div>
                    <div>{firm}</div>
                    <div>{tradeDate}</div>
                    <div>{tradeType}</div>
                    <div>{accountType}</div>
                    <div>{tradeAmount}</div>
                    <div>{currrency}</div>
                    <div>{PLID}</div>
                </div>
                <div className="fund__row2">
                    Share balance: {shareBalance}
                </div>
            </div>)
};


const VerifyTrade = (props) => {
    const { verifyTrade: {account, funds} } = props;
    const labels = verifyTradeLabels;

    return(
        <div className="verifyTrade">
            <div className="verifyTrade__account-details">
                <div>{account.name}</div>
                <div>{account.number}</div>
            </div>
            <div className="verifyTrade__labels">
                {createLabels(labels)}
            </div>
            <div className="verifyTrade__fund-details">
                {funds.map((fund)=> createFund(fund))}
            </div>
        </div>
    );
}


export default VerifyTrade;
