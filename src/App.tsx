import Chat from "./components/Chat/Chat";
import Layout from "./components/Layout/Layout";
import MUIProvider from "./style/MUIProvider";

function App() {
  return (
    <div className="App">
      <MUIProvider>
        <Layout>
          <Chat />
        </Layout>
      </MUIProvider>
    </div>
  );
}

export default App;
