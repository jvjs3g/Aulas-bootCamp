import React , {Component} from 'react';
import TechItem from '../components/TechItem';
class TechList extends Component{

  state = {
    newTech:'',
    techs:[
    ]
  };
  //Executa assim que um componete aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)})
    }
  }
  //Executa sempre que houver alterações  nas props ou estado
  componentDidUpdate(_,prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }


  //Executado quando o componente deixa de existir
  componentWillUnmount(){

  }

  handlerInputChange = e =>{
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e =>{
    e.preventDefault();

    this.setState({ techs: [... this.state.techs, this.state.newTech], newTech:''})
  }


  handlerDelete = (techs) => {
    this.setState({ techs: this.state.techs.filter(t => t !== techs)})
  }
  render(){
  
    return (
      <form onSubmit={this.handleSubmit}> 
      <ul>
        {this.state.techs.map(techs => (<TechItem  key={techs} techs={techs} onDelete={() => this.handlerDelete(techs)}/>))}
      </ul>

      <input type="text" onChange={this.handlerInputChange} value={this.state.newTech}/>
      <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;