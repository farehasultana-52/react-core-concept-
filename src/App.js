import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = ['Mango', 'Banana','Apple','Orange','Clipart','Cucumber','Jackfruit' ] 
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustator', price: '$80.99'},
    {name: 'PDF Reader', price: '$50.99'},
    {name: 'Premiere Element', price: '$500.99'},
    {name: 'Illustator', price: '$80.99'}
  ]
  const friends =['Faria', 'Erin', 'Eva','Elina']

  const productNames = products.map(product => product.name)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            fruits.map(fruit => <li>{fruit}</li>) 
          }
          {
            products.map(product => <li>{ product.name}</li>)
          }
          
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Fareha" job="developer"></Person>
        {
          friends.map(friend => <li>{friend}</li>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
    )
}
function Users(){
  const[users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: '1px solid blue',
    margin:'5px',
    borderRadius:'5px',
    backgroundColor:'lightblue',
    height:'220px',
    width:'200px',
    float: 'left'
  }
  console.log(props)
return(
  <div style={productStyle}>
    <h2>{props.product.name}</h2>
    <h4>{props.product.price}</h4>
    <button>Buy Now</button>
  </div>
)
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin: '10px'
  }
  
  
  return (
    <div style={{border:'2px solid yellow', margin: '5px'}}>
      <h3>My Name:{props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}





export default App;
