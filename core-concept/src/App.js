import React, {useState, useEffect} from 'react';
import JSXVariable from "./components/JSXVariables";

function App() {
  const products = [
    {name: "Photoshop", price: "80.99"},
    {name: "Illustrator", price: "60.99"},
    {name: "PDF Reader", price: "6.99"}
  ]
  return (
    <div>
      <JSXVariable name = "Yusuf" name2 = "Abir"></JSXVariable>,
      <Person name ="Munna" job = "Developer"></Person>,
      <Person name ="Abir" job = "Student"></Person>,
      {/* <Product product = {products[0]}></Product>,
      <Product product = {products[1]}></Product>, */}
      {/* <Product name = {products[2].name} price = {products[2].price}></Product> */}
      {/* <Product product = {products[2]}></Product>, */}
      {/* <ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
      </ul> */}
      <Counter></Counter>
      <Users></Users>
    </div>
   
  );
}
function Person(props){
  const personStyle = {
    border: "2px solid salmon",
    margin: "10px",
    paddingLeft: "120px",
    color: "red"

  }
  return (
    <div style ={personStyle}>
      <h1>I am {props.name}</h1>
      <h2>My Profession: {props.job} </h2>
    </div>
  );
}
function Product(props){
  // const productStyle = {
  //   border: "1px solid gray",
  //   borderRadius: "5px",
  //   height: "200px",
  //   width: "200px",
  //   marginLeft: '300px',
  //   float: "left"
  // }
 const buy ={
   color: "salmon",
   marginLeft: '70px'
 }
 const {name, price } = props.product;
  //console.log(productStyle);
  return(
    <div style ={productStyle}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button style = {buy}> Buy Now</button>
    </div>
  )
}
const productStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  height: "200px",
  width: "200px",
  marginLeft: '300px',
  float: "left"
}
function Counter(){
  const [count, setCount] = useState(10)
  const handleIncrease = () => {
    setCount(count + 1);
    if(count < 10){
      setCount(count +2)
    }
  }
  // state = {
  //   count: 0
  // }
  //  const handleIncrease = () =>{
  //   this.setState({count: this.state.count +1 });
  // }
  const handleDecrease = () =>{
    
    if(count>0){
      setCount(count -1)
    }
  }
  return(
    <div style = {productStyle}>
      <h1>Count: {count}</h1>
      <button onClick ={handleIncrease} style={{color:"green", marginLeft: "50px" }}>Increase</button>
      <button onMouseMove = {handleDecrease} style ={{color:"red", marginLeft: "50px"}}>Decrease</button>
    </div>
  )
}
function Users(){
  const [user, setUser] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div>
      <h1>Dynamic Users: {user.length}</h1>
      <ul>{
        user.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
