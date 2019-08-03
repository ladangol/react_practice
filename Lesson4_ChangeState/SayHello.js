const hellolst = ['Salut', 'Bonjour', 'Hallo', 'Hola', 'Hej']
class SayHello extends React.Component{
  constructor(props) {
   super(props);
   this.state = {say:'Hello'};
 }
  handleClick = ()=>{
    this.setState(
      {say:hellolst[Math.floor(Math.random()*hellolst.length)]}
    );
  };
  render(){
    return (<div>
      <h1>{this.state.say} {this.props.name}</h1>
      <button onClick={this.handleClick}> Say Hello!</button>

      </div>
    );
  }

}

ReactDOM.render(<SayHello name='Sara' />,
  document.getElementById('root')
);
