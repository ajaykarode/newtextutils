import React from 'react';

export default function About(props) {


let myStyle = {
    color : props.mode === 'dark'? 'white':'black',
    backgroundColor : props.mode === 'dark'? 'black': 'white',
    
}

return (
<div className='container' style={{color : props.mode === 'dark'? 'white':'black'}}>
    <h1 className='my-2 mx-2'>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Edit Ease gives you a way to analyze your text quickly and efficiently, be it word count, character count everything can be done easily in one click.
            </div>
            </div>
        </div>
        
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Edit Ease is a free character counter tool that provides instant character count & word count statistics for a given text. Edit Ease reports the number of words and characters. thus it is suitable for writing text with word/character limit. 
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel documents, pdf documents, essays, etc.
                </div>
            </div>
        </div>
    </div>
</div>
);
}
