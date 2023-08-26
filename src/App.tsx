import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Vadim",
    second: "Korobets",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "kent" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <Greet name="Vadim" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
