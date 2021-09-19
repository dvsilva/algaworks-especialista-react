function App (){
  return <div>
      <h1>Olá Mundo</h1>
      <Input label="Name"/>
      <Input label="Email"/>
      <Input label="Password" type="password"/>
    </div>;
}

function Input({label, type = "text"}){
  return <label className="input">
    <span>{label}:</span>
    <input type={type}/>
  </label>
}

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
 );