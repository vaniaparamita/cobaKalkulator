import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
	super();
		
	this.state = {
		nilai1: null,
		nilai2: null,
		operator: null,
		hasil: null,
	}
  }
  
  handleSubmit(e){
	  e.preventDefault();
	  
	  const nilai1 = parseInt(this.refs.nilai1.value);
	  const nilai2 = parseInt(this.refs.nilai2.value);
	  const operator = this.refs.operator.value;
	  
	  var hasil;
	  switch(operator){
		  case '+': 
			hasil = nilai1 + nilai2;
			break;
		  case '-':
			hasil = nilai1 - nilai2;
			break;
		  case '*':
			hasil = nilai1 * nilai2;
			break;
		  case '/':
		    hasil = nilai1 / nilai2;
			break;
	  }
	  this.setState({nilai1, nilai2, operator, hasil});
	  
	  this.refs.nilai1.value = null;
	  this.refs.nilai2.value = null;
  }
  
  renderHasil(){
	  const {nilai1, nilai2, operator, hasil} = this.state;
	  if(this.state.hasil){
		  return (
			<div>
				<br />
				<p className="alert alert-success">
				{nilai1+operator+nilai2+'='+hasil}
				</p>
			</div>	
		  );
	  }
	  
  }

  render() {
	  return(
		<div>
			<form onSubmit={this.handleSubmit.bind(this)}>
			<label>Nilai :</label><br/>
			<input type="number" ref="nilai1" className="form-control"/><br/>
			<input type="number" ref="nilai2" className="form-control"/><br/>
			<br/>
			<label>Operator:</label>
			<select ref="operator" className="form-control">
				<option value="+">"+"</option>
				<option value="-">"-"</option>
				<option value="*">"*"</option>
				<option value="/">"/"</option>
			</select><br/><br/>
				<button className="btn btn-primary">Lihat Hasil</button>
			</form>
			{this.renderHasil()}
		</div>	
	  
    );
  }
}
//ReactDOM.render(
	//<App />,
	//document.getElementById('container')
	//);
	
export default App;
