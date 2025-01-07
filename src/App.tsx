import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name="Platen" age={32} isEmployee={true} />
      <Button label="Click me" onClick={() => console.log("clicked")} disabled={false} />
    </div>
  );
};

export default App;
