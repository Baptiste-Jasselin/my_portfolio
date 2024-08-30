import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="py-20 mx-auto flex flex-col items-center gap-16">
      {/* <Navbar /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
