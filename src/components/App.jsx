// import ItemsContextProvider from "../contexts/ItemsContextProvider";
import BackgroundHeading from "./common/BackgroundHeading";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ItemList from "./features/ItemList";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemsContextProvider> */}
        <Header />
        <ItemList />
        <Sidebar />
        {/* </ItemsContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
