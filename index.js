const {useState} = React;

const App = () => {
  return(
  <ListComp />
  )
}

const AddForm = ({addValue}) => {
const [value, setValue] = useState("")
const [count, setCount] = useState(0);

const handleSubmit = e => {
  e.preventDefault();
  value && addValue(value);
  setCount(count+1);
  setValue("");
}
  
  return(
  <form onSubmit={handleSubmit}>
   <h4>Number of items on the list: {count}</h4>
   <input type="text" value={value} onChange = {(e=>setValue(e.target.value))} />
   <button type="submit" disabled={!value.length}>Add</button>
  </form>
  ); 
}

  const ListComp = () => {
  const [list, setList] = useState([]);

  
  const addValue = text => {
    if(list.indexOf("mini") !== -1){
      alert("This item already exists");
    }else{setList([...list, { text }])} 
  };
 
  return(
  <>
    <AddForm addValue = {addValue} />
    <ul>{list.map(item=>{return(<li key={item.index}>{item.text}</li>)})}</ul>
      
  </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
