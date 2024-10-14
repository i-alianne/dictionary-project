import logo from "./logo.svg";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>DICTIONARY</h1>
          <p>What word do you want to look up?</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded with 💜 by{" "}
          <a href="https://i-alianne.com/" target="_blank" rel="noreferrer">
            Alianne
          </a>
          . This project is open-sourced on{" "}
          <a
            href="https://github.com/i-alianne/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
