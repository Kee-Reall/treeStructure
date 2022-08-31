import React, { useState } from 'react';
import {getDate} from '../../helpers/getDate'
import { sort } from '../../helpers/sorting';
import './Item.scss'

const Item = ({content,index}:any) => {

    const data = content.data.map((el: any, i: number) =>{
        el.id = i + 1
        return el
    })

    let [renderData, setRenderData] = useState(data)
    let [sortIdRevers, setSortIdRevers] = useState(false)
    let [sortTitleRevers, setSortTitleRevers] = useState(false)
    let [sortNumberRevers, setSortNumberRevers] = useState(false)

    function sortBy(value: 'number' | 'title' | 'id') {
        switch (value) {
            case 'id':
                setRenderData(sort(renderData, sortIdRevers, value))
                setSortIdRevers((prev) => !prev)
                setSortNumberRevers(() => false)
                setSortTitleRevers(() => false)
                break
            case 'title':
                setRenderData(sort(renderData, sortTitleRevers, value))
                setSortTitleRevers((prev) => !prev)
                setSortNumberRevers(() => false)
                setSortIdRevers(() => false)
                break
            case 'number':
                setRenderData(sort(renderData, sortNumberRevers, value))
                setSortNumberRevers((prev) => !prev)
                setSortTitleRevers(() => false)
                setSortIdRevers(() => false)
                break
        }
    }

    
    let [shouldRender,setShouldRender] =  useState(false)
    const body = shouldRender ? (
        <tbody>
            <tr>
                <td onClick={sortBy.bind(null, 'id')}>#</td>
                <td onClick={sortBy.bind(null, 'title')}>Title</td>
                <td onClick={sortBy.bind(null, 'number')}>Number</td>
            </tr>
            {
                renderData.map((el: any) => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td>{el.number}</td>
                    </tr>
                ))
            }
        </tbody>
    ): null


    console.log(content)
    return(
        <table>
            <thead onClick={() => setShouldRender((prev) => !prev)}>
            <tr>
                <td>{content.title}</td>
                <td colSpan={3} rowSpan={2}>{`${getDate(content.dateStart)}-${getDate(content.dateEnd)}`}</td>

            </tr>
            <tr>
                <td>{content.subTitle}</td>
            </tr>
           </thead>
           {body}
        </table>
    )
}

export default Item