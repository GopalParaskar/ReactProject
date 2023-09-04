import React,{useState} from 'react'

export default function TextCom(props) {
    

    const handleUpLower=()=>{
        console.log("handleUpLower was clicked ");
        let newtext=text.toUpperCase();
        setText(newtext)
    }

    const handleLowerCase=()=>{
        console.log("handleLowerCase was clicked ");
        let newtext2=text.toLowerCase();
        setText(newtext2)
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handle=(m)=>{
        setText(m.target.value)
    }
    const handleSent=()=>{
         let sentp=text.split(".").length-1;
         document.getElementById("dem").innerHTML = sentp+" Sentences";

    }
    
    const handlePara=()=>{
        let nop=text.split('\n\n').filter(para => para.trim() !== '').length;
        document.getElementById("parag").innerHTML = nop+" Paragraphs";

        
    }

    const handleCopy=()=>{
        var text=document.getElementById("Mbox");
        text.select();
        navigator.clipboard.writeText(text.value).then(()=>{
            alert("Successfully Copied");
        }).catch(()=>{
            alert("Something went wronge")
        })
       
}

    const romoveExtraSpace=()=>{
        let nText=text.split(/[ ]+/);
        setText(nText.join(" "));
    }
    const[text,setText]=useState("");
    //setText("New Text")
  return (
    <>
    {/**/}
     <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}} >
          <h1>{props.he}</h1>
          <div className="mb-3">
          <label htmlFor="Mbox" className="form-label">{props.Example}</label>
          {/*style={{backgroundColor:props.mode==='light'?'white':'grey'}}*/}
          <textarea className="form-control" id="Mbox" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
          </div>
          <button className="btn btn-outline-info mx-2" onClick={handleUpLower}>Convert to Upper</button>
          <button className="btn btn-outline-info mx-2" onClick={handleLowerCase}>Convert  to Lower</button>
          <button className="btn btn-outline-warning mx-2" onClick={handle}>Clear Text</button>
          <button className="btn btn-outline-dark mx-2" onClick={handleSent}>No Of Sentence</button>
          <button className="btn btn-outline-info mx-2" onClick={handlePara}>No of Paragraph</button>
          <button className="btn btn-outline-dark mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-outline-success mx-2" onClick={romoveExtraSpace}>Romove Extra Space</button>
     </div>
     <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <p id="dem"> Sentences</p>
      <p id="parag">Paragraphs</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in textbox"}</p>
     </div>
     </>
  )
}
