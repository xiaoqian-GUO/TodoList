class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            arr:[],
            className:"divItem"
        };
    }
    onChange=(e)=>{  
        this.setState({
            value:e.target.value, 
            });
    }
    getKey=(e)=>{
        if(e.keyCode==13){
            var tmp=this.state.arr;
            if(e.target.value!=""){
                tmp.push(e.target.value);
                this.setState({
                    value:"",
                    arr:tmp
                }); 
            }
        }
    }
    deleteText=(e)=>{
        //删除text
        var parent=e.target.parentNode;
        var className=parent.className;
        if(className.indexOf("deleteStyle")==-1){
            className+=" deleteStyle";
        }
        parent.className=className;
    }
    deleteInput=(e)=>{
        var ipt=e.target.previousSibling;
        ipt.value="";
    }
    render(){
        var tmp=this.state.arr;
        tmp=tmp.map((item,index)=>{
            return (
                <div className="divItem" key={index}>
                {item}
                <span className="floatSpan" onClick={this.deleteText}>x</span>
                </div>
            );
        });
        var divStyle={
            width:"100%",
            height:300,
            textAlign:"center",
            position:"absolute",
            margin:"auto",
        };
        var pStyle={
            paddingLeft:20,
            fontSize:26,
            color:"gray",
            letterSpacing:2,
            lineHeight:"20px",
            paddingLeft:20
        };
        var iptStyle={
            width:200,
            height:20,
            borderWidth:1,
            borderColor:"black",
            fontSize:14
        };
        var flexDiv={
            marginLeft:54,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        };
        var otherStyle={
            width:202,
            minHeight:0,
            background:"#dcdcdc"
        };
        var spanStyle={
            color:"gray",
            fontSize:20,
            marginLeft:-18,
            cursor:"default"
        };
        var divItemStyle={
            textAlign:"left",
            marginLeft:10,
            fontSize:14,
            fontWeight:"bold",
            paddingTop:5,
            paddingBottom:5
        };
        return (
            <div style={divStyle}>
                <p style={pStyle}>Todo List</p>
                输入：<input style={iptStyle} type="text" value={this.state.value} onKeyUp={this.getKey} onChange={this.onChange} className="todoList"/>
                <span style={spanStyle} onClick={this.deleteInput}>x</span>
                <div style={flexDiv}>
                    <div style={otherStyle}>
                       {tmp}
                    </div>
                </div>
            </div>
        );
    }
}

const example=<TextInput></TextInput>
ReactDOM.render(
    example,
    document.querySelector("#example")
);