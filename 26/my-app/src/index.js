/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from "./Components/Button";
import Smile from "./Components/smile";
import Counter from "./Components/counter";

const flexCentre = "d-flex justify-content-center align-items-center"
const root = ReactDOM.createRoot(document.getElementById('root'));
const handleSmileClick = (id) => {
    console.log(`Clicked Smile with ID: ${id}`);
};
const size = {width: "100px", height: "100px"}
root.render(
    <React.StrictMode>
        <div className={flexCentre}>
            <Smile src="/smiles/1.svg" alt="1" size={size} clName={'m-4'}
                   onClick={() => handleSmileClick('count1')}/>
            <Smile src="/smiles/2.svg" alt="2" size={size} clName={'m-4'}
                   onClick={() => handleSmileClick('count2')}/>
            <Smile src="/smiles/3.svg" alt="3" size={size} clName={'m-4'}
                   onClick={() => handleSmileClick('count3')}/>
            <Smile src="/smiles/4.svg" alt="4" size={size} clName={'m-4'}
                   onClick={() => handleSmileClick('count4')}/>
            <Smile src="/smiles/5.svg" alt="5" size={size} clName={'m-4'}
                   onClick={() => handleSmileClick('count5')}/>
        </div>
        <div className={flexCentre}>
            <Counter id={'count1'}>0</Counter>
            <Counter id={'count2'}>0</Counter>
            <Counter id={'count3'}>0</Counter>
            <Counter id={'count4'}>0</Counter>
            <Counter id={'count5'}>0</Counter>
        </div>
        <Button pos="center" text="Show Results"></Button>
    </React.StrictMode>
);
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from "./Components/Button";
import Smile from "./Components/smile";
import Counter from "./Components/counter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: {
                count1: 0,
                count2: 0,
                count3: 0,
                count4: 0,
                count5: 0
            }
        };
    }

    componentDidMount() {
        const savedCounters = JSON.parse(localStorage.getItem('counters'));
        if (savedCounters) {
            this.setState({ counters: savedCounters });
        }
    }

    handleSmileClick = (id) => {
        this.setState(prevState => {
            const updatedCounters = { ...prevState.counters };
            updatedCounters[id] += 1;
            localStorage.setItem('counters', JSON.stringify(updatedCounters));
            return { counters: updatedCounters };
        });
    };

    render() {
        const size = { width: "100px", height: "100px" };
        const flexCentre = "d-flex justify-content-center align-items-center";

        return (
            <React.StrictMode>
                <div className={flexCentre}>
                    <Smile src="/smiles/1.svg" alt="1" size={size} clName={'m-4'}
                           onClick={() => this.handleSmileClick('count1')} />
                    <Smile src="/smiles/2.svg" alt="2" size={size} clName={'m-4'}
                           onClick={() => this.handleSmileClick('count2')}/>
                    <Smile src="/smiles/3.svg" alt="3" size={size} clName={'m-4'}
                           onClick={() => this.handleSmileClick('count3')}/>
                    <Smile src="/smiles/4.svg" alt="4" size={size} clName={'m-4'}
                           onClick={() => this.handleSmileClick('count4')}/>
                    <Smile src="/smiles/5.svg" alt="5" size={size} clName={'m-4'}
                           onClick={() => this.handleSmileClick('count5')}/>
                </div>
                <div className={flexCentre}>
                    <Counter id={'count1'}>{console.log(this.state.counters.count1)}</Counter>
                    <Counter id={'count2'}>{this.state.counters.count2}</Counter>
                    <Counter id={'count3'}>{this.state.counters.count3}</Counter>
                    <Counter id={'count4'}>{this.state.counters.count4}</Counter>
                    <Counter id={'count5'}>{this.state.counters.count5}</Counter>
                </div>
                <Button pos="center" text="Show Results"></Button>
            </React.StrictMode>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
