class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            arr:[],
            arrStatus:[],
            checkStatus:[],
            textStatus:[],
            className:"divItem",
        };
    }
    onChange=(e)=>{  
        this.setState({
            value:e.target.value,
            arr:this.state.arr
        });
    }
    getKey=(e)=>{
        if(e.keyCode==13){
            var tmp=this.state.arr;
            var tmp2=this.state.arrStatus;
            var tmp3=this.state.checkStatus;
            var tmp4=this.state.textStatus;
            var str=e.target.value;
            if(str!="" && tmp.indexOf(str)==-1){
                tmp.push(e.target.value);
                tmp2.push("floatSpanNone");
                tmp3.push("checkboxStyle");
                tmp4.push("divItem");
                this.setState({
                    value:"",
                    arr:tmp,
                    arrStatus:tmp2,
                    checkStatus:tmp3,
                    textStatus:tmp4
                });
            }
        }
    }
    deleteText=(e)=>{
        //删除text
        var parent=e.target.parentNode;
        var first=parent.firstChild;
        var lastCld=parent.lastChild;
        var str=lastCld.previousSibling.innerHTML;
        var index=this.state.arr.indexOf(str);
        var tmp=this.state.arrStatus;
        var tmp2=this.state.checkStatus;
        var tmp3=this.state.textStatus;
        if(index!=-1){
            if(first.checked){
                tmp[index]="floatSpan";
                tmp3[index]="divItem deleteStyle";
                this.setState({
                    arrStatus:tmp,
                    textStatus:tmp3
                });
            }
            else{
                tmp[index]="floatSpanNone";
                tmp3[index]="divItem";
                this.setState({
                    arrStatus:tmp,
                    textStatus:tmp3
                });
            }
            
        }
    }
    deleteFromArr=(e)=>{
        var first=e.target.parentNode.firstChild;
        var tgt=e.target.previousSibling;
        var str=tgt.innerHTML;
        var tmp=this.state.arr;
        var tmp4=this.state.textStatus;
        var index=tmp.indexOf(str);
        var len=tmp.length;
        if(index!=-1){
            tmp4[index]="checkboxStyleNone";
        }
        this.setState({
            textStatus:tmp4
        });
    }
    deleteInput=(e)=>{
        var ipt=e.target.previousSibling;
        ipt.value="";
    }
    render(){
        var tmp=this.state.arr;
        var tmp2=this.state.arrStatus;
        var tmp3=this.state.textStatus;
        var tmp4=this.state.checkStatus;
        tmp=tmp.map((item,index)=>{
            return (
                <div className={tmp3[index]} key={index}>
                <input type="checkbox" name="items" className="checkboxStyle" onClick={this.deleteText} />
                <span>{item}</span>
                <span className={this.state.arrStatus[index]} onClick={this.deleteFromArr}>x</span>
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
            width:300,
            height:30,
            borderWidth:1,
            borderColor:"#dcdcdc",
            fontSize:15,
            paddingLeft:10
        };
        var flexDiv={
            marginLeft:6,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        };
        var otherStyle={
            width:314,
            minHeight:0,
            background:"#dcdcdc"
        };
        var spanStyle={
            color:"gray",
            fontSize:20,
            marginLeft:-18,
            cursor:"default"
        };
        return (
            <div style={divStyle}>
                <p style={pStyle}>Todo List</p>
                <input placeholder="What needs to be done ?" style={iptStyle} type="text" value={this.state.value} onKeyUp={this.getKey} onChange={this.onChange} className="todoList"/>
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