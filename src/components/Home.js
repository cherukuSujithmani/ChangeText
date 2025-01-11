import React ,{ useState } from "react";

export default function Home(props) {

    const [text, setText]=useState('');
    const changed=(event)=>{
        setText(event.target.value);
        console.log(event.target.value);
    }
    const changetoupper=()=>{
        let upper=text.toUpperCase();
        setText(upper);
    }
    const changetolower=()=>{
        let lower=text.toLowerCase();
        setText(lower);
    }
    const handleCopy=()=>{
        var text =document.getElementById('floatingTextarea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleextraspace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const cleartext=()=>{
        setText('');
    }
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="form-floating">
            <textarea onChange={changed} value={text} style={{backgroundColor:props.mode=== 'dark' ? 'gray' : 'white',color:props.mode=== 'dark' ? 'white' : 'black'}}   className="form-control" rows="10" placeholder="enter ur sentance" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea"> enter text here</label>
        </div><br />
        <button onClick={changetoupper} className="btn btn-primary mx-2"> convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={changetolower}> conver to lowercase</button>
        <button onClick={handleextraspace} className="btn btn-primary mx-2"> Remove Extra spaces</button>
        <button onClick={handleCopy} className="btn btn-primary mx-2"> copy text</button>
        <button onClick={cleartext} className="btn btn-primary mx-2"> clear the text</button>
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white' : 'black'}}>
        <h1>word counter</h1>
        <p>{text.split(' ').length} words and {text.length} letters</p>
        <h2>preview</h2>
        <p>{text.length>0?text:'Enter some text to preview'}</p>
    </div>
    </>
  )
}
