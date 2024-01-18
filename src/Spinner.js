import React from 'react'

const Spinner = ({className}) => {
    let loaderArr = ["[    ]", "[=   ]", "[==  ]", "[=== ]", "[ ===]", "[  ==]", "[   =]", "[    ]", "[   =]", "[  ==]", "[ ===]", "[====]", "[=== ]", "[==  ]", "[=   ]"];
    let count = loaderArr.length;
    let i = 0;
    setInterval(() => {
        if (i < count) {
            document.getElementById('loader').innerHTML = loaderArr[i];
            i++
        } else {
            i = 0;
            document.getElementById('loader').innerHTML = loaderArr[i];
        }
    }, 100)
  return (
    <div className={className}>
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "monospace"}} id="loader"></div>
    </div>
  )
}

export default Spinner