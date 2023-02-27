import React from "react";
import Button from "./components/button/Button";
// import "./App.css";

function App() {
    return (
        <div>
            <Button>Primary</Button>
            <Button className="button--secondary">Secondary</Button>
        </div>
    );
}

export default App;
