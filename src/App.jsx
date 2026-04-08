import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleShow = () => {
    setInput("");
    if (input === "vit-bangalore-12") {
      setShow(true);
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <>
      <div className="image-container">
        <h2>Essentials</h2>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <input
          type="password"
          className="pass-input"
          placeholder="Enter password to see the target list......."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleShow}>Show</button>

        {show && (
          <div className="div6">
            <div className="hide-btn-dv">
              <button onClick={() => setShow(false)}>hide</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
