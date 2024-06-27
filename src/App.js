import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={"+200 new samsung TV"}></input>
          <input type="datetime-local"></input>
        </div>
        <div className="description">
          <input type="text" placeholder={"desciprtion"}></input>
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
