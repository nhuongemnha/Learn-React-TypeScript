import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Phat",
    last: "Nguyen",
  };
  const nameList = [
    {
      first: "Phat",
      last: "Nguyen",
    },
    {
      first: "Trang",
      last: "Nguyen",
    },
    {
      first: "Phat",
      last: "Nguyen Tien",
    },
  ];

  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Phat" isLoggedIn={false} />
      <Button handleClick={(event, id) => console.log("hello", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User/>
      <Counter/>
    </div>
  );
}

export default App;
