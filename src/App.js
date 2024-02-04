import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  function addCash(cash) {
    dispatch(addCashAction(cash))
  }

  function getCash(cash) {
    dispatch(getCashAction(cash))
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div>
      <div style={{fontSize: '3rem'}}>Баланс: {cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={()=>getCash(Number(prompt()))}>Снять со счета</button>
      <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button>
      <button onClick={()=>dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
      <div>
        {
          customers.length > 0 ?
          <div>
            {customers.map(customer =>
              <div key={customer.id} onClick={()=>removeCustomer(customer)}>{customer.name}</div>  
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
