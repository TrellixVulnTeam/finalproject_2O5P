import Footer from "./components/Footer/Footer";
import AboutAuthor from "./components/AboutAuthor/AboutAuthor";
import ArticlesResources from "./components/ArticlesResources/ArticlesResources";
import AuthorBook from "./components/AuthorBook/AuthorBook";
import BestCompany from "./components/BestCompany/BestCompany";
import GetBook from "./components/GetBook/GetBook";
import Learn from "./components/Learn/Learn";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <AuthorBook/>
      <AboutAuthor/>
      <BestCompany/>
      <GetBook/>
      <Learn/>
      <ArticlesResources/>
      <Footer/>
    </div>
  );
}

export default App;
