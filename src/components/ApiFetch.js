import React from "react";
import {VscBug} from 'react-icons/vsc';

export default function ApiFetch() {
  return <button onClick={() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    /* get the response a convert it to json */
    .then(response=>response.json())
    /* show the data converted to json in console */
    .then(data=>console.log(data))
    /* if there's any error, show it in console */
    .catch(error=>console.log(error))
}}>
    <VscBug/>
    Bring data</button>;
}
