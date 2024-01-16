import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from "./Components/Button.jsx";
import Smile from "./Components/smile.jsx";
import Counter from "./Components/counter.jsx";

export function Main() {
    const initialState = [
        { id: 'count1', value: 0 },
        { id: 'count2', value: 0 },
        { id: 'count3', value: 0 },
        { id: 'count4', value: 0 },
        { id: 'count5', value: 0 },
    ];
    const [showSpan, setShowSpan] = useState(false);
    const [counters, setCounters] = useState(initialState);
    const [winner, setWinner] = useState( { id: 'count1', value: 0 });

        const [smilesAndCounters, setSmilesAndCounters] = useState([
            {id: '1', smileSrc: '/smiles/1.svg', counterKey: 'count1'},
            {id: '2', smileSrc: '/smiles/2.svg', counterKey: 'count2'},
            {id: '3', smileSrc: '/smiles/3.svg', counterKey: 'count3'},
            {id: '4', smileSrc: '/smiles/4.svg', counterKey: 'count4'},
            {id: '5', smileSrc: '/smiles/5.svg', counterKey: 'count5'},
        ],)

    useEffect(() => {
        localStorage.setItem('counters', JSON.stringify(counters));
        console.log('данные перезаписаны')
    }, [counters]);

    useEffect(() => {
        JSON.parse(localStorage.getItem('counters'));

    }, []);

    const handleSmileClick = (id) => {
        setCounters((prevCounters) => {
            return prevCounters.map((counter) => {
                if (counter.id === id) {
                    return {...counter, value: counter.value + 1};
                }
                return counter;
            });
        });
    };


    const handleButtonClick = () => {
        const maxCounterObject = counters.reduce((maxCounterObject, counter) => {
            return counter.value > maxCounterObject.value ? counter : maxCounterObject;
        }, { id: '', value: 0 });
        setShowSpan(true);
        const winningSmile = smilesAndCounters.find(item => item.counterKey === maxCounterObject.id);
        if (winningSmile) {
            setWinner({ id: winningSmile.smileSrc, value: maxCounterObject.value });
        } else {
            console.log('нет победителя')
        }
    };
    const clearAll = () => {
        localStorage.clear()
        setShowSpan(false)
        setCounters([...initialState])
    }
    const size = {width: "100px", height: "100px"};
    const flexCentre = "d-flex justify-content-center align-items-center";
    const divStyle = {
        visibility: winner ? 'visible' : 'hidden'
    };
    return (
        <React.StrictMode>
            <div className={flexCentre}>
                {smilesAndCounters.map(item => (
                    <div key={item.id} style={{display: "flex", flexDirection: "column",}}>
                        <Smile
                            src={`/smiles/${item.id}.svg`}
                            alt={item.id}
                            size={size}
                            clName={'m-4'}
                            onClick={handleSmileClick}
                            id={`count${item.id}`}/>
                        <Counter
                            id={`count${item.id}`}
                            value={counters.find(counter => counter.id === `count${item.id}`).value} />


                    </div>
                ))}
            </div>
            <div>
                <Button pos="center" text="Show Results" onClick={handleButtonClick}/>
                {showSpan && (
                    <>
                        <div className={'result'} style={divStyle}>
                            <h3 className={'m-4'}> Winner: {winner.value}</h3>
                            <Smile src={winner.id} alt={'img'} size={size}/>
                        </div>
                        <Button pos="center" text="Clear Results" onClick={clearAll}/>
                    </>
                )}
            </div>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
