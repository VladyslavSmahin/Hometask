import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from "./Components/Button.jsx";
import Smile from "./Components/smile.jsx";
import Counter from "./Components/counter.jsx";
import {useState, useEffect} from "react";

export function Main() {
    const [showSpan, setShowSpan] = useState(false);
    const [maxCounter, setMaxCounter] = useState(0);
    const [showSmile, setShowSmile] = useState(null);
        const [counters, setCounters] = useState({
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            count5: 0
        });

        const [smilesAndCounters, setSmilesAndCounters] = useState([
            {id: '1', smileSrc: '/smiles/1.svg', counterKey: 'count1'},
            {id: '2', smileSrc: '/smiles/2.svg', counterKey: 'count2'},
            {id: '3', smileSrc: '/smiles/3.svg', counterKey: 'count3'},
            {id: '4', smileSrc: '/smiles/4.svg', counterKey: 'count4'},
            {id: '5', smileSrc: '/smiles/5.svg', counterKey: 'count5'},
        ],)



    useEffect(() => {
        const storedCounters = JSON.parse(localStorage.getItem('counters'));
        if (storedCounters) {
            setCounters(storedCounters);
        }
    }, []);


    const handleSmileClick = (id) => {
        setCounters(prevState => {
            const updatedCounters = {...prevState, [id]: prevState[id] + 1};
            localStorage.setItem('counters', JSON.stringify(updatedCounters));
            return updatedCounters;
        });
    };
    const handleButtonClick = () => {
        const values = Object.values(counters);
        const maxCounter = Math.max(...values)
        const maxCounterKey = Object.keys(counters).find(
            key => counters[key] === maxCounter
        );
        const showSmile = smilesAndCounters.find(item => item.counterKey === maxCounterKey)?.smileSrc;
        setShowSpan(true);
        setMaxCounter(maxCounter);
        setShowSmile(showSmile);

    }
    const clearAll = () => {
        localStorage.clear()
        setShowSmile( null)
        setCounters({
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            count5: 0
        })
    }
    const size = {width: "100px", height: "100px"};
    const flexCentre = "d-flex justify-content-center align-items-center";
    const divStyle = {
        visibility: showSmile ? 'visible' : 'hidden'
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
                        <Counter id={`count${item.id}`}>
                            {counters[`count${item.id}`]}
                        </Counter>
                    </div>
                ))}
            </div>
            <div>
                <Button pos="center" text="Show Results" onClick={handleButtonClick}/>
                {showSpan && (
                    <>
                        <div className={'result'} style={divStyle}>
                            <h3 className={'m-4'}> Winner: {maxCounter}</h3>
                            <Smile src={showSmile} alt={'img'} size={size}/>
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
