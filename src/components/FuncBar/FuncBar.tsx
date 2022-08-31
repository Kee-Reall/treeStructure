import React, { useState } from 'react';
import './FuncBar.scss'
import { useSelector } from 'react-redux';

const FuncBar = (): any => {
    const data = useSelector((state: any) => state.data);
    
    // function searcherStart(ary: any[], searcher: string): any {
    //     function searcher (tree: any, searcher: string): any {
    //         if(tree.title !== searcher)
    //     }
    //     for(let i of ary){
    //         searcher(i)
    //     }
    // }

    //searcher(data)

    let [status,setStatus] = useState(0)

    const allHide = (
        <div className="Bar" >
            <div className="chrest" onClick={() => setStatus((prev) => prev = 2)}>&#10006;</div>
            <div className="lupa" onClick={()=> setStatus((prev) => prev = 1)}>
                <div className="curcle"></div>
                <div className="stick"></div>
            </div>
        </div>
    )

    const lupaOpen  = (
        <div className="Bar t">
            <div className="chrest" onClick={() => setStatus((prev) => prev = 2)}>&#10006;</div>
            <div className="lupa Opened" onClick={() => setStatus((prev) => prev = 0)}>
                <input type={'text'}></input>
                <div className="curcle"></div>
                <div className="stick"></div>
            </div>
        </div>
    )

    const chrestOpen = (
        <div className="Bar" >
            <div className="chrest Opened" onClick={() => setStatus((prev) => prev = 0)} >
                <div>
                    <span>&#10006;</span>
                </div>
                
                <select>
                    <option></option>
                    <option>Пункт 2</option>
                </select>
            </div>
            <div className="lupa" onClick={() => setStatus((prev) => prev = 1)}>
                <div className="curcle"></div>
                <div className="stick"></div>
            </div>
        </div>
    )
    
    
    return(
        <>
            {status === 1 ? lupaOpen : status === 2 ? chrestOpen : allHide}
        </>
        
    )
}

export default FuncBar