import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from './Components/Spinner';
import Input from './Components/Input';
import Button from "./Components/Button";
import ResponseWrapper from "./Components/ResponseWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Spinner/>
        <Input text="SWAPI – The Star Wars API" placeholderText="Введите текст..."/>
        <Button text="Get Data"/>
        <ResponseWrapper
            text={`"people": "https://swapi.dev/api/people/",\n"planets": "https://swapi.dev/api/planets/",\n"films": "https://swapi.dev/api/films/",\n"species": "https://swapi.dev/api/species/",\n"vehicles": "https://swapi.dev/api/vehicles/",\n"starships": "https://swapi.dev/api/starships/"`}/>
    </React.StrictMode>
);

