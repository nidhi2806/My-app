import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    //props.showAlert("Converted to uppercase","success");
  }

  const handleLoClick = () =>{
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    //props.showAlert("Converted to lowercase","success");
  }
  const handleClClick = () =>{
    //console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  }
  const handleCopy =() =>{
    console.log('i am copy');
    var text =document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
   
  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text,setText] =useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
  <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}id="MyBox" rows="5"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>



    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 *text.split("").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
