let button  = ReactDOMStyle.make(~border="1px solid White",~height="90px",~width="120px",()) //use lib's ReactDOM for apply CSS in rescript  
let button1 = ReactDOMStyle.make(~border="1px solid White",~height="90px",~width="90px",())
@react.component
let make = () => {    
    let (state, setState) = React.useState (_ =>0.) //this is a principal label
    let (plabel , sublabel) =  React.useState ( _ => 0. ) //this is a second label
    let (operation,setoperation) = React.useState( _ => "")  //this are operations
    let handlereset = _ => setState(_=>0.)  //this is for delete principal label  
    let handleresetall = _ => {let _ = (sublabel(_=>0.), setState(_=>0.), setoperation(_=>""))} //this is for delete principal, second and operations label
    let handleDivision     = _ => {let _ = (sublabel( _ => state), setState(_=>0.), setoperation( _ =>" /"))} //this pass a principal label for second label, with divide operation, and delete a principal label
    let handlemultiply     = _ => {let _ = (sublabel( _ => state), setState(_=>0.), setoperation( _ =>" *"))} //this pass a principal label for second label, with multiply operation, and delete a principal label
    let handlesub          = _ => {let _ = (sublabel( _ => state), setState(_=>0.), setoperation( _ =>" -"))} //this pass a principal label for second label, with subtract operation, and delete a principal label
    let handleadd          = _ => {let _ = (sublabel( _ => state), setState(_=>0.), setoperation( _ =>" +"))} //this pass a principal label for second label, with add operation, and delete a principal label
    let handleDivisionone  = _ => {let _ = (setState( _ =>1./.state), setoperation( _ => " "))} //this divides 1 by principal label 
    let handlesqrt         = _ => {let _ = (setState( _ =>state*.state), setoperation( _ => " "), sublabel(_=>0.))} //this is squares a principal label
    let handlesqrth        = _ => {let _ = (setState( _ =>sqrt(state)), setoperation( _ => " "), sublabel(_=>0.))} //this is square root of principal label
    let equal              = _ => {let _ = ( //this is the most important function
    let handlepoint        = _ => {let _ = (setState(_ =>state/.10.))}
    switch operation {                       //you can use switch to replace if and for each operations, have operation
    | " /" => (setState(_=> plabel/.state))
    | " *" => (setState(_=> plabel*.state))
    | " +" => (setState(_=> plabel+.state))
    | " -" => (setState(_=> plabel-.state))
    | ""   => (setState(_=> 0.))
    }, setoperation( _ => " "), sublabel(_=>0.))}
    <div style={ReactDOMStyle.make(~display="grid",~justifyContent="center",())} > //this is styles and interface of calculator
        <div style={ReactDOMStyle.make(~height="90",~width="360",~backgroundColor="rgba(0, 0, 0, .75)",~justifyContent="center",())} > 
        <h2  style={ReactDOMStyle.make(~fontStyle="Italic",~fontSize="10",())}> {React.float(plabel)} <span >{React.string(operation)}</span></h2> 
        <h1  style={ReactDOMStyle.make(~fontStyle="Italic",~fontSize="20",())}> {React.float(state)} </h1>
        </div><div style={ReactDOMStyle.make(~border="10px solid White",~width="360px",())}>
            <button style={button}  onClick={handlereset}><h1>{React.string("CE")}</h1></button>
            <button style={button}  onClick={handleresetall} ><h1>{React.string("C")}</h1></button>
            <button style={button}  onClick={_ => setState(_ =>Belt.Int.toFloat(Belt.Float.toInt(state)/10))} ><h1>{React.string("DEL")}</h1></button>
            <button style={button1} onClick={handleDivisionone}> <h1>{React.string("1/x")}</h1></button> 
            <button style={button1} onClick={handlesqrt}><h1>{React.string("x2")}</h1></button>
            <button style={button1} onClick={handlesqrth}><h1>{React.string("raiz")}</h1></button>
            <button style={button1} onClick={handleDivision} ><h1>{React.string("/")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.7.)}><h1>{React.string("7")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.8.)}><h1>{React.string("8")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.9.)}><h1>{React.string("9")}</h1></button>
            <button style={button1} onClick={handlemultiply}><h1>{React.string("*")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.4.)}><h1>{React.string("4")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.5.)}><h1>{React.string("5")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.6.)}><h1>{React.string("6")}</h1></button>
            <button style={button1} onClick={handlesub} ><h1>{React.string("-")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.1.)}><h1>{React.string("1")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.2.)}><h1>{React.string("2")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.)+.3.)}><h1>{React.string("3")}</h1></button>
            <button style={button1} onClick={handleadd}><h1>{React.string("+")}</h1></button>   
            <button style={button1} onClick={_ => setState(_ =>(state*.-1.))}><h1>{React.string("+/-")}</h1></button>
            <button style={button1} onClick={handlemultiply} ><h1>{React.string(".")}</h1></button>
            <button style={button1} onClick={_ => setState(_ =>(state*.10.))}><h1>{React.string("0")}</h1></button>
            <button style={button1} onClick={equal}><h1>{React.string("=")}</h1></button>                
        </div>
    </div>
    }   
