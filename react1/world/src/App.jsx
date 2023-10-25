
import FunctionClick from './router/functionClick'
import ClassClick from './router/classClick'
import List from'./router/list'
import Form from './form'
import Lifecyclea from './lifecyclea';

// class App extends Router{
  function App(){
    return (
      <div className="App">
       <FunctionClick/>
       <ClassClick/>
       <List />
       <Form />
       <Lifecyclea/>
    
      </div>
    )
  }
export default App
