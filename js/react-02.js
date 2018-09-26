function Welcome(props){
    return <h4>欢迎回来！</h4>
}
function Guest(props){
    return <h4>请先注册！</h4>
}
function Greeting(props){
    var bl=props.isLoggedIn;
    if(bl){
        return <Welcome/>
    }
    else{
        return <Guest/>
    }
}
function LoginButton(props){
    return (
        <button onClick={props.onClick}>登陆</button>
    );
}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>退出</button>
    );
}
class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        };
    }
    handlerLoginClick=()=>{
        this.setState({
            isLoggedIn:true
        });
    }
    handlerLoginoutClick=()=>{
        this.setState({
            isLoggedIn:false
        });
    }
    render(){
        var isLoggedIn=this.state.isLoggedIn;
        var button=null;
        if(isLoggedIn){
            button=<LogoutButton onClick={this.handlerLoginoutClick}/>
        }
        else{
            button=<LoginButton onClick={this.handlerLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {button}
            </div>
        );
    }

}

const example=<Example></Example>
ReactDOM.render(
    example,
    document.querySelector("#second")
);