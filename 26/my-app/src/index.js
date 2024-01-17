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
            counters: [
            { id: 'count1', value: 0 },
            { id: 'count2', value: 0 },
            { id: 'count3', value: 0 },
            { id: 'count4', value: 0 },
            { id: 'count5', value: 0 },
        ],
            winner: { id: 'count1', value: 0 },
            smilesAndCounters: [
                {id: '1', smileSrc: '/smiles/1.svg', counterKey: 'count1'},
                {id: '2', smileSrc: '/smiles/2.svg', counterKey: 'count2'},
                {id: '3', smileSrc: '/smiles/3.svg', counterKey: 'count3'},
                {id: '4', smileSrc: '/smiles/4.svg', counterKey: 'count4'},
                {id: '5', smileSrc: '/smiles/5.svg', counterKey: 'count5'},
            ],
            showSpan: false,
            showSmile: null,
        };
    }

    componentDidMount() {
        try {
            const savedCounters = JSON.parse(localStorage.getItem('counters'));
            if (savedCounters) {
                this.setState({ counters: savedCounters });
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }


    handleSmileClick = (id) => {
        this.setState((prevState) => {
            const updatedCounters = prevState.counters.map((counter) => {
                if (counter.id === id) {
                    return { ...counter, value: counter.value + 1 };
                }
                return counter;
            });

            localStorage.setItem('counters', JSON.stringify(updatedCounters));
            return { counters: updatedCounters };
        });
    };


    handleButtonClick = () => {
        const maxCounterObject = this.state.counters.reduce((maxCounterObject, counter) => {
            return counter.value > maxCounterObject.value ? counter : maxCounterObject;
        }, this.state.winner);

        const winningSmile = this.state.smilesAndCounters.find(item => item.counterKey === maxCounterObject.id);
        this.setState({
            showSpan: true,
            showSmile: true,
            winner: { id: winningSmile.smileSrc, value: maxCounterObject.value }
        });
    };
    clearAll = () => {
        localStorage.clear();
        this.setState({
            counters: [
                { id: 'count1', value: 0 },
                { id: 'count2', value: 0 },
                { id: 'count3', value: 0 },
                { id: 'count4', value: 0 },
                { id: 'count5', value: 0 },
            ],
            showSmile: null,
            winner: { id: 'count1', value: 0 },
        });
    };


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
                        <div key={item.counterKey} style={{display: "flex", flexDirection: "column",}}>
                            <Smile
                                src={`/smiles/${item.id}.svg`}
                                alt={item.id}
                                size={size}
                                clName={'m-4'}
                                onClick={this.handleSmileClick}
                                id={`count${item.id}`}/>
                            <Counter id={`count${item.id}`}>
                                {this.state.counters.find(counter => counter.id === `count${item.id}`).value}
                            </Counter>
                        </div>
                    ))}
                </div>
                <div>
                    <Button pos="center" text="Show Results" onClick={this.handleButtonClick}/>
                    {this.state.showSpan && (
                        <>
                            <div className={'result'} style={divStyle}>
                                <h3 className={'m-4'}> Winner: {this.state.winner.value}</h3>
                                <Smile src={this.state.winner.id} alt={'img'} size={size}/>
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
