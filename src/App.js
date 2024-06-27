import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  // function addnewTransaction(ev) {
  //   ev.preventDefault();
  //   const url = process.env.REACT_APP_API_URL + "/transaction";
  //   console.log(url);
  //   fetch(url, {method: 'POST',
  //   headers:{'Content-type':'application/json'},
  //   body:JSON.stringify(value:{name, description, datetime})});
  // }.then(response => {
  //   response.json().then(json => {
  //     console.log('result', json)
  //   })
  // })

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = `http://localhost:4000/api/transaction`;
    console.log(url);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, datetime }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 new samsung TV"}
          ></input>
          <input
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
            type="datetime-local"
          ></input>
        </div>
        <div className="description">
          <input
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            type="text"
            placeholder={"desciprtion"}
          ></input>
        </div>
        <button type="submit">Add a new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Samsung TV</div>
            <div className="description"> it was time for a new TV</div>
          </div>

          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">27-06-2024</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Part Time Job</div>
            <div className="description"> time to earn some money</div>
          </div>

          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">27-06-2024</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description"> light saber screen</div>
          </div>

          <div className="right">
            <div className="price red">-900</div>
            <div className="datetime">27-06-2024</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
