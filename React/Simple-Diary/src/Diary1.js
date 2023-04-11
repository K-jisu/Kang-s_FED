//연습용

import {useState} from 'react'

const Diary1 = () => {

    // const [author, setauthor] = useState("");
    // const [content, setcontent] = useState("");

    const [state, setState] = useState({
        author : "",
        content : ""
    });

    const handleChangeState = (e) =>{
        console.log(state.content)
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    };
    
    return(
        <div className='Diary1'>
            <h2>오늘의 일기</h2>
            <div>
              <input 
              name='author'
              value={state.author} 
              onChange={handleChangeState}/>
            </div>
            <div>
                <textarea 
                name='content'
                value={state.content} 
                onChange={handleChangeState}/>
            </div>
        </div>
       
    )

}

export default Diary1;