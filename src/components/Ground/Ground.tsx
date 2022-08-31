import React, { useState } from 'react';
import { directoryProps, EndData } from '../../interfaces/intarfaces'
import { useSelector } from 'react-redux';
import DirectoryLvl1 from '../DirectoryLvl1/DirectoryLvl1';
//import { useDispatch } from 'react-redux';
import './Ground.scss'


//const Directory = ({ title, lvl, indexlvl1, indexlvl2 }: directoryProps): React.ReactElement => {
const Ground = (): React.ReactElement => {


    let [isShowChild, setIsShowChild] = useState(false)


    const data = useSelector((state: any) => state.data);


    return (
        <>
            <div className="dir" onClick={() => setIsShowChild((prev) => !prev)}>
                <span>/</span>
            </div>
            <div>
                {
                    isShowChild ? (
                        data.map((el: any) => (
                            <DirectoryLvl1 
                                incoming = {el}
                            />
                        ))
                    ) : null
                }
            </div>
        </>
        
        
    )
}

export default Ground