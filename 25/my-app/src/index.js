import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Components/Spinner';
import Input from './Components/Input';
import Button from "./Components/Button";
import ResponseWrapper from "./Components/ResponseWrapper";

class Swapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            backgroundColor: `rgba(255, 255, 255, 0.1)`
        }
    }
    handleButtonClick = () => {
        this.setState(prevState => {
            return {
                isDisabled: !prevState.isDisabled,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            };
        });
    };
    render() {
        return (
            <React.StrictMode>
                <Spinner/>
                <Input text="SWAPI – The Star Wars API" placeholderText="Введите текст..." disabled={this.state.isDisabled}/>
                <Button text="Get Data" onClick = {this.handleButtonClick}/>
                <ResponseWrapper
                    text={`"people": "https://swapi.dev/api/people/",\n"planets": "https://swapi.dev/api/planets/",\n"films": "https://swapi.dev/api/films/",\n"species": "https://swapi.dev/api/species/",\n"vehicles": "https://swapi.dev/api/vehicles/",\n"starships": "https://swapi.dev/api/starships/"`} backgroundColor={this.state.backgroundColor}/>
            </React.StrictMode>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Swapi />);
