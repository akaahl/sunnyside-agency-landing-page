import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContentOne from "./components/ContentOne";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
      <ContentOne />
    </div>
  );
}

export default App;
