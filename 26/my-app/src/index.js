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
            },
            smileMassive: {
                count1: '/smiles/1.svg',
                count2: '/smiles/2.svg',
                count3: '/smiles/3.svg',
                count4: '/smiles/4.svg',
                count5: '/smiles/5.svg'
            },
            showSpan: false,
            maxCounter: 0,
            showSmile: null,
            isVisible: true
        };
    }

    componentDidMount() {
        const savedCounters = JSON.parse(localStorage.getItem('counters'));
        if (savedCounters) {
            this.setState({counters: savedCounters});
        }

    }

    handleSmileClick = (id) => {
        this.setState(prevState => {
            const updatedCounters = {...prevState.counters};
            updatedCounters[id] += 1;
            localStorage.setItem('counters', JSON.stringify(updatedCounters));
            return {counters: updatedCounters};
        });
    };
    handleButtonClick = () => {
        const values = Object.values(this.state.counters);
        const maxCounter = Math.max(...values)
        const maxCounterKey = Object.keys(this.state.counters).find(
            key => this.state.counters[key] === maxCounter
        );
        const showSmile = Object.keys(this.state.smileMassive).includes(maxCounterKey) ? this.state.smileMassive[maxCounterKey] : null;
        this.setState({
            showSpan: true,
            maxCounter,
            showSmile,
            isVisible: true
        });

    }
    clearAll = () => {
        localStorage.clear()
        this.setState({
            counters: {
                count1: 0,
                count2: 0,
                count3: 0,
                count4: 0,
                count5: 0
            },
            isVisible: false
        })

    }

    render() {
        const size = {width: "100px", height: "100px"};
        const flexCentre = "d-flex justify-content-center align-items-center";
        const { isVisible } = this.state;
        const divStyle = {
            visibility: isVisible ? 'visible' : 'hidden'
        };
        const smiles = [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
        ];
        return (
            <React.StrictMode>
                <div className={flexCentre}>
                    {smiles.map(item => (
                    <Smile src={`/smiles/${item.id}.svg`} alt={item.id} size={size} clName={'m-4'}
                           onClick={this.handleSmileClick} id={`count${item.id}`}/>))}
                </div>
                <div className={flexCentre}>
                    {smiles.map(item => (
                        <Counter id={`count${item.id}`}>
                            {this.state.counters[`count${item.id}`]}
                        </Counter>
                    ))}
                </div>
                <div>
                    <Button pos="center" text="Show Results" onClick={this.handleButtonClick}></Button>
                    {this.state.showSpan && (
                        <>
                        <div className={'result'} style={divStyle}>
                            <h3 className={'m-4'}> Winner: {this.state.maxCounter}</h3>
                            <Smile src={this.state.showSmile} alt={'img'} size={size}/>
                        </div>
                        <Button pos="center" text="Clear Results" onClick={this.clearAll} />
                        </>
                    )}
                </div>
            </React.StrictMode>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
