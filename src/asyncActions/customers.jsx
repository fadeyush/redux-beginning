import { addManyCustomerAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json=>dispatch(addManyCustomerAction(json)))
    }
}

//redux-thunk - это middleware, который позволяет внутри сторонних функций использовать dispatch
//Он внутри себя опрокилывает в эту функцию параметром dispatch и можно им пользоваться

//middleware - позволяет обернуть метод стора dispatch