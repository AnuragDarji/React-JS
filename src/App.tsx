import { useRecoilValue } from 'recoil';
import Card from './Components/Card'
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Login from './Components/Login';
import { openLogin } from './Store/atom';

function App() {

  const open = useRecoilValue(openLogin);

  return (
    <div>
      {open ? <Login/> : <><Header/>
      <Card/>
      <Footer/></>}
     
    </div>
  );
}

export default App;