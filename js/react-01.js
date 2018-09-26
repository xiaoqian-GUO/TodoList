class Clock extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <p>引用js文件的模式</p>
                {/*注释要写在花括号里面*/}
                <h5 style={this.props.style}>now is {this.props.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
}

function tick() {
    var style={
        fontSize:20,
        color:"blue"
    };
  ReactDOM.render(
      <Clock date={new Date()} style={style}></Clock>,
      document.querySelector("#example")
  );
}

setInterval(tick, 1000);

class Second extends React.Component{
    constructor(data){
        super();
        this.data=data;
    }
    render(){
        var style={
            color:"red"
        };
        this.data="daipeng";
        return (<p style={style}>hello {this.data}</p>);
    }
}

const second=<Second data="xiaoqian"></Second>
ReactDOM.render(
    second,
    document.querySelector("#second")
);
var arr=[
    <h1 key="first">first title</h1>,
    <h2 key="second">second title</h2>,
    <h3 key="third">third title</h3>
];
ReactDOM.render(
    <div>{arr}</div>,
    document.querySelector("#third")
);

class Four extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        this.timeId=setInterval(()=>{
           this.tick(); 
        },1000);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    componentWillUnmount(){
        cancelInternal(this.timeId);
    }
    render(){
        return (
            <div>
                <p>hello xiaoqian!</p>
                <br/>
                <b>now is {this.state.date.toLocaleTimeString()}</b>
            </div>
        );
    }
}
ReactDOM.render(
    <Four/>,
    document.querySelector("#four")
);

class ButtonChange extends React.Component {
    constructor(props){
        super(props);
        this.name="dp";
        this.state={
            isToggleOn:true
        };
        //this.handlerClick=this.handlerClick.bind(this);
    }
    handlerClick(){
        this.setState((prevState)=>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.handlerClick()}>{this.state.isToggleOn?"On":"Off"}</button>
            </div>
        );
    }
}

const element = <ButtonChange/>;

ReactDOM.render(
  element,
  document.getElementById('five')
);