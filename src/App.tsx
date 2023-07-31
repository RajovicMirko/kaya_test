import ChatAI from "./components/ChatAI/ChatAI";
import Layout from "./components/Layout/Layout";
import MUIProvider from "./style";

function App() {
  return (
    <div className="App">
      <MUIProvider>
        <Layout>
          <ChatAI />
        </Layout>
      </MUIProvider>
    </div>
  );
}

export default App;
