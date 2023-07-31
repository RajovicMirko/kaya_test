import Test from "./components/Test/Test";
import MUIProvider from "./style";

function App() {
  return (
    <div className="App">
      <MUIProvider>
        <Test />
      </MUIProvider>
    </div>
  );
}

export default App;
