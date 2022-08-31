import React,{useState} from 'react';
//import { DirectoryLvl1Props, EndData } from '../../interfaces/intarfaces'
import { useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import DirectoryLvl2 from '../DirectoryLvl2/DirectoryLvl2';

const DirectoryLvl1 = ({incoming}: any): React.ReactElement => {


   let [isShowChild, setIsShowChild] = useState(false)
//    let [witchShowed,setWitchSowed] = useState([])
//    const data = useSelector((state: any) => state.data[props.index]);

    
    const Result = (
        <div style={{ marginLeft: '1rem' }} >
            <div onClick={() => setIsShowChild((prev) => !prev)} className="dir">
                <span >{incoming.title}</span>
            </div>
            <div>
                { isShowChild ? (
                        incoming.items.map((el: any,i: number) => (
                            <DirectoryLvl2 incoming={el}/>
                        ))
                    ) : null
                    
                }
            </div>
        </div>
    )

    return(
        Result
    )
}

export default DirectoryLvl1