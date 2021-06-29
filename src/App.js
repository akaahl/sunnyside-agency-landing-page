import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContentOne from "./components/ContentOne";
import ContentTwo from "./components/ContentTwo";
import GridImages from "./components/GridImages";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
      <ContentOne />
      <ContentTwo />
      <GridImages />
    </div>
  );
}

export default App;
