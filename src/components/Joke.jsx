import axios from "axios";
import React, { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const dadJokeUrl = " https://icanhazdadjoke.com/";
  useEffect(() => {
    axios
      .get(dadJokeUrl, { headers: { Accept: "application/json" } })
      .then(res =>setJoke(res.data))
      .catch(err => console.log(err))
  },[]);

const getJoke = ()=>{
        axios
      .get(dadJokeUrl, { headers: { Accept: "application/json" } })
      .then(res =>setJoke(res.data))
      .catch(err => console.log(err))
}

  return (
    <div>
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a className="btn btn-primary" onClick={getJoke}>
            Get Another Joke
          </a>
        </div>
      </div>
    </div>
  );
};

export default Joke;
