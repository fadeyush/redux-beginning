import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  function addCash(cash) {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  function getCash(cash) {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div>
      <div>На счету {cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={()=>getCash(Number(prompt()))}>Снять со счета</button>
    </div>
  )
}

export default App;
