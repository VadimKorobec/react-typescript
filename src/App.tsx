import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Counter } from "./components/state/Counter";

function App() {
  const personName = {
    first: "Vadim",
    second: "Korobets",
  };

  const nameList = [
    { first: "Bruce", second: "Wayne" },
    { first: "Clark", second: "kent" },
    { first: "Princess", second: "Diana" },
  ];

  return (
    <div className="App">
      <Greet name="Vadim" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log("Button", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          width: "400px",
          margin: "auto",
        }}
      />
      <Counter />
    </div>
  );
}

export default App;
