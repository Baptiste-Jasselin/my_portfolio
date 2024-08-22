import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="py-10 mx-auto flex flex-col items-center">
      {/* <Navbar /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
