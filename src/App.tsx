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
import { Toast } from "./components/Toast";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";
import { RandomNumber } from "./components/restriction/RandomNumber";
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", second: "Wayne" },
          { id: 2, first: "Clark", second: "kent" },
          { id: 3, first: "Princess", second: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive={true} />
      <Toast position="left-bottom" />
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
