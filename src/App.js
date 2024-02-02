import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  function addCash(cash) {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  function getCash(cash) {
    dispatch({type: "GET_CASH", payload: cash})
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({type: "ADD_CUSTOMER", payload: customer})
  }
  console.log(customers)

  return (
    <div>
      <div style={{fontSize: '3rem'}}>Баланс: {cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={()=>getCash(Number(prompt()))}>Снять со счета</button>
      <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button>
      <button onClick={()=>getCash(Number(prompt()))}>Удалить клиента</button>
      <div>
        {
          customers.length > 0 ?
          <div>
            {customers.map(customer =>
              <div>{customer.name}</div>  
            )}
          </div>
          :
          <div style={{fontSize: '2rem'}}>Клиенты не найдены</div>
        }
      </div>
    </div>
  )
}

export default App;
