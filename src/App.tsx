import Layout from "./components/Layout/Layout";
import MUIProvider from "./style";

function App() {
  return (
    <div className="App">
      <MUIProvider>
        <Layout></Layout>
      </MUIProvider>
    </div>
  );
}

export default App;
