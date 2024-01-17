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
            } ,
            smilesAndCounters: [
                {id: '1', smileSrc: '/smiles/1.svg', counterKey: 'count1'},
                {id: '2', smileSrc: '/smiles/2.svg', counterKey: 'count2'},
                {id: '3', smileSrc: '/smiles/3.svg', counterKey: 'count3'},
                {id: '4', smileSrc: '/smiles/4.svg', counterKey: 'count4'},
                {id: '5', smileSrc: '/smiles/5.svg', counterKey: 'count5'},
            ],
            showSpan: false,
            maxCounter: 0,
            showSmile: null,
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
        const showSmile = this.state.smilesAndCounters.find(item => item.counterKey === maxCounterKey)?.smileSrc;
        console.log(showSmile)
        console.log(maxCounter)
        console.log(maxCounterKey)
        console.log(this.state.counters)
        this.setState({
            showSpan: true,
            maxCounter,
            showSmile
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
            showSmile: null,
        })
    }

    render() {
        const size = {width: "100px", height: "100px"};
        const flexCentre = "d-flex justify-content-center align-items-center";
        const divStyle = {
            visibility: this.state.showSmile ? 'visible' : 'hidden'
        };
        return (
            <React.StrictMode>
                <div className={flexCentre}>
                    {this.state.smilesAndCounters.map(item => (
                        <div key={item.id} style={{display: "flex", flexDirection: "column",}}>
                            <Smile
                                src={`/smiles/${item.id}.svg`}
                                alt={item.id}
                                size={size}
                                clName={'m-4'}
                                onClick={this.handleSmileClick}
                                id={`count${item.id}`}/>
                            <Counter id={`count${item.id}`}>
                                {this.state.counters[`count${item.id}`]}
                            </Counter>
                        </div>
                    ))}
                </div>
                <div>
                    <Button pos="center" text="Show Results" onClick={this.handleButtonClick}/>
                    {this.state.showSpan && (
                        <>
                            <div className={'result'} style={divStyle}>
                                <h3 className={'m-4'}> Winner: {this.state.maxCounter}</h3>
                                <Smile src={this.state.showSmile} alt={'img'} size={size}/>
                            </div>
                            <Button pos="center" text="Clear Results" onClick={this.clearAll}/>
                        </>
                    )}
                </div>
            </React.StrictMode>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
