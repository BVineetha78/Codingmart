import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HooksCounter from "./components/HooksCounter";
function App() {
  return (
    <div className="App">
      <ClassCounter /> 
      <HooksCounter/>
      <HookCounter2 />
      <HookCounter3 />

    </div>
  );
}

export default App;
