import "./style/App.css";
import Header from "./blocks/header";
import Page1 from "./pages/page1/page_1";
import Footer from "./blocks/footer";

function App() {
  return (
    <>
      <main class="container">
        <Header />
        <Page1 />
      </main>

      <Footer />
    </>
  );
}

export default App;
