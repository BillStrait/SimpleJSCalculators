//import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
          <header className="App-header">
            <h1>Some Simple Javascript Calculators</h1>
          </header>
          <main>
              <F2c />
              <Mortgage />
          </main>
    </div>
  );
}



class F2c extends React.Component {
    constructor(props){
        super(props);
        this.state = { f: 0, c: 0, }
        this.UpdateC = this.UpdateC.bind(this);
        this.UpdateF = this.UpdateF.bind(this);
    }
    UpdateC(event){
        var updatedC = ((event.target.value - 32) * (5 / 9)).toFixed(2);
        this.setState({ f: event.target.value, c: updatedC });
    };
    UpdateF(event){
        var updatedF = ((event.target.value * 1.8) + 32).toFixed(2);
        this.setState({ c: event.target.value, f: updatedF });
    };
    render() {
        return (
            <div className="calcHolder">
                <h3>Fahrenheit/Celsius Conversion</h3>
                <label>Fahrenheit: </label><input id="fValue" value={this.state.f} onChange={this.UpdateC} type="number" /><br />
                <label>Celsius: </label><input id="cValue" value={this.state.c} onChange={this.UpdateF} type="number" /> <br />
            </div>
        );
    }
}


class Mortgage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { principle: 0, interestRate: 0, months: 0, monthlyPayment: "$0" }
        this.UpdatePayment = this.UpdatePayment.bind(this);
    }
    DecimalChecker(code) {
        //this method blocks anything that isn't 0-9, a negative sign, or a decimal point.
        if ((code => 48 && code <= 57) || code == 45 || code == 46)
            return true;
        return false;
        
    }
    UpdatePayment(event) {
        var oldPrinciple = this.state.principle;
        var oldInterestRate = this.state.interestRate;
        var oldMonths = this.state.months;
        console.log("checking for number");
        if (!isNaN(event.target.value)) {
            console.log("it is a number");
            switch (event.target.id) {
                case "mPrinciple":
                    oldPrinciple = event.target.value;
                    break;
                case "mMonthlyInterest":
                    oldInterestRate = event.target.value;
                    break;
                case "mMonths":
                    oldMonths = event.target.value;
                    break;
                default:
                    break;
            }

            var oldMonthlyRate = oldInterestRate / 100 / 12;
            console.log(oldMonthlyRate + ' ' + oldMonths + ' ' + oldPrinciple);
            var paymentNumber = (oldPrinciple * oldMonthlyRate * (Math.pow(1 + oldMonthlyRate, oldMonths) / (Math.pow(1 + oldMonthlyRate, oldMonths) - 1))).toFixed(2);
            var newPayment = "$";
            if (isNaN(paymentNumber)) {
                newPayment = "$0";
            } else {
                newPayment = "$" + paymentNumber;
            }
            
            
            console.log("payment: " + newPayment);
            this.setState({ principle: oldPrinciple, months: oldMonths, interestRate: oldInterestRate, monthlyPayment: newPayment })
        }
        
    }

    render() {
        return (
            <div className="calcHolder">
                <h3>Monthly Loan Payment</h3>
                <label>Principle: </label><input id="mPrinciple" value={this.state.principle} onChange={this.UpdatePayment} /><br />
                <label>Interest Rate: </label><input id="mMonthlyInterest" value={this.state.interestRate} onChange={this.UpdatePayment} /><br />
                <label>Number of Months: </label><input id="mMonths" value={this.state.months} onChange={this.UpdatePayment}  /> <br />
                <label>Monthly payment: </label><input id="mPayment" value={this.state.monthlyPayment} onChange={this.UpdatePayment} disabled />
            </div>
        );
    }
}

                export default App;
