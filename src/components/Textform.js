import React, { useState } from 'react'

export default function Textform(props) {

    const [Text, setText] = useState('')
    const handleupchange = () => {
        // console.log('upper case is clicked');
        const upperText = Text.toUpperCase();
        setText(upperText);
    }

    const handlelochange = () => {
        const LowerText = Text.toLowerCase();
        setText(LowerText);
    }

    const handleclearchange = () => {
        setText("");
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Text Area</label>
                <textarea className="form-control" value={Text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupchange}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handlelochange}>Convert To LowerCase</button>
            <button className="btn btn-primary" onClick={handleclearchange}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h1>Your Text Summary</h1>
            <p>{Text.split(" ").length} Words, {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
        </>
    )
}
