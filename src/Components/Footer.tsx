import { useRecoilValue } from "recoil";
import { cardState } from "../Store/atom";

const Footer = () => {
  const item = useRecoilValue(cardState);

  return (
    <div className="fixed-bottom">
      <footer className="footer py-3 bg-dark text-white">
        <div className="container text-center">
            <span className="font-weight-bold">Total Price: </span>
            <span className="font-weight-bold text-warning">${item * 100}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
