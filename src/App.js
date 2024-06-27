import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

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

  async function getTransactions() {
    const url = `http://localhost:4000/api/transaction`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = `http://localhost:4000/api/transaction`;
    const price = name.split(" ")[0];
    console.log(url);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setName("");
        setDescription("");
        setDatetime("");
        console.log("result", json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  let balance = 0;
  for (transaction of transactions) {
    balance += parseFloat(transaction.price); // Ensure the price is a number
  }

  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];

  return (
    <main>
      <h1>
        {balance}
        <span>{fraction}</span>
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
            placeholder={"description"}
          ></input>
        </div>
        <button type="submit">Add a new transaction</button>
        {transactions.length}
      </form>
      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description"> {transaction.description}</div>
              </div>

              <div className="right">
                <div
                  className={
                    "price " +
                    (parseFloat(transaction.price) < 0 ? "red" : "green")
                  }
                >
                  {transaction.price}
                </div>
                <div className="datetime">
                  {new Date(transaction.datetime).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
