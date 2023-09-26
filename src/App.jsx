import { useState } from "react"

function App() {

  const [num,setNum]= useState(0);
  const [num2, setNum2]= useState(0);
  const [operator, setOperator] =useState("");
 

  const handleNum = (e) => {
    const input = e.target.innerText
    if (num===0){
      setNum(e.target.innerText)
    } else {
        setNum (num + input)
      
      }
  }
  const clear = () => {
    setNum(0)
   
  }
  const handleOperator = (e)=> {
    setOperator (e.target.innerText)
    setNum2(num)
    setNum(0)
   
      }
  const percentage = () => {
    setNum(num/100)
  }

  const calculate = () => {
    switch (operator) {
      case "+":
      setNum(parseFloat(num2) + parseFloat(num))
      break;
      case"-":
      setNum(parseFloat(num2)-parseFloat(num))
      break;
      case"*":   
      setNum(parseFloat(num2)*parseFloat(num))
      break;
      case"/":
      setNum(parseFloat (num2)/parseFloat(num))
      break;
        }

        }     
  return ( 
   <div className= "w-full h-screen bg-current flex items-center justify-center text-white">
    <div className="w-1/4 h-6/5 bg-sky-900/100"> 
       <div className="w-full flex justify-end">
       <p className="mr-4 text-4*1"> {num}</p>
    </div>
        <div className="flex items-center gap-1 justify-center flex-wrap">
<button onClick={clear} className="w-16 h-16 rounded-full bg-yellow-600"> AC</button>
<button onClick= {handleOperator} className="w-16 h-16 rounded-full bg-yellow-600"> +/-</button>git 
<button onClick= {percentage} className="w-16 h-16 rounded-full bg-yellow-600">%</button>
<button onClick= {handleOperator}className="w-16 h-16 rounded-full bg-yellow-600">/</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">7</button>
<button onClick= {handleNum} className= "w-16 h-16 rounded-full bg-gray-600" >8</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">9</button>
<button onClick= {handleOperator} className="w-16 h-16 rounded-full bg-yellow-600">*</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">6</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">5</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">6</button>
<button onClick={handleOperator} className="w-16 h-16 rounded-full bg-yellow-600">-</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">1</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">2</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">3</button>
<button onClick={handleOperator}className="w-16 h-16 rounded-full bg-yellow-600">+</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">0</button>
<button onClick= {handleNum} className="w-16 h-16 rounded-full bg-gray-600">.</button>
<button onClick= {calculate} className="w-16 h-16 rounded-full bg-yellow-600">=</button>
  </div>
    </div>
      </div>
  )
}

export default App
