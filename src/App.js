import "./App.css";
import InputField from "./components/InputField/InputField";
import Card from "./components/UI/Card/Card";
import ListField from "./components/ListField/ListField";
import { useState } from "react";
import ErrorModlar from "./components/ErrorModlar/ErrorModlar";

function App() {
  const [items, setItems] = useState([]);
  const [check, setCheck] = useState(true);

  const itemshandler = (name, age) => {
    setItems((prev) => [
      ...prev,
      {
        name: name,
        age: age,
      },
    ]);
  };

  const checkInputHandler = (value) => {
    setCheck(value);
  };

  return (
    <div className="App">
      <div style={{zIndex:'0'}}>
        <Card>
          <InputField getItems={itemshandler} checkInput={checkInputHandler} />
        </Card>
        {items.length > 0 && (
          <Card>
            <ListField items={items} />
          </Card>
        )}
        {!items && <p>Enter name and Age</p>}
      </div>
      <div style={{ position: "absolute", top: "25vh", zIndex: "1" }}>
        <Card check={check}>
          <ErrorModlar onClickBtn={checkInputHandler} />
        </Card>
      </div>
    </div>
  );
}

export default App;
