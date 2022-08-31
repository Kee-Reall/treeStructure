import React,{ useState } from 'react';
import Item from '../Item/Item';
import './DirectoryLvl2.scss'

const DirectoryLvl2 = ({incoming}: any) =>{


    let [isShowChild, setIsShowChild] = useState(false)

    return(
        //<div>{props.incoming.title}</div>
        <div  style={{ marginLeft: '2rem' }}>
            <div className="dir" onClick={() => setIsShowChild((prev) => !prev)}>
                <span>{incoming.title}</span>
            </div>
            <div className="tableArea" >
                { isShowChild ? (
                  incoming.items.map((el: any, i: number) => (
                        <div>
                        <Item
                            content = {el}
                            index = {i}
                        /></div>
                    ))  
                  ) : null                    
                }
            </div>   
        </div>
    )
}

export default DirectoryLvl2