import { cardState } from "../Store/atom";
import { useRecoilState } from 'recoil';

const Card = () => {

    const [item, setItem] = useRecoilState(cardState);

    const addItemHandler = () => {
        setItem(item + 1);
    }

    const removeItemHandler = () => {
        if(item > 0){
            setItem(item - 1);
        }
    }

  return (
    <div className="card text-center m-auto mt-3 bg-light" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title mb-3 font-weight-bold">Items</h5>
        <h6 className="card-subtitle mb-2">Price: 100 $</h6>
        <p className="card-text">No.of item: {item}</p>
        <button type="button" className="btn btn-success" onClick={addItemHandler}>
          Add
        </button>
        <button type="button" className="btn btn-danger ml-3" onClick={removeItemHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
