export interface fromIndexTs {
    incomingData: Array<any>
} //входной интерфейс

export interface Cells {
    title: string,
    number: number
} // интерйес значений ячейки данных до преобразования

export interface CellsWId {
    title: string,
    number: number
    id: number
} // интерйес значений ячейки данных после преобразования

export interface EndData {
    title: string,
    subTitle: string,
    dateStart: number,
    dateEnd: number,
    data: Array<Cells>
} // интерйес ячейки данных

export interface directoryLvl2 {
    title: string,
    items: Array<EndData>
} // интерфейс вложенности второго уровня

export interface directoryLvl1 {
    title: string,
    items: Array<directoryLvl2>
} // интерфейс вложенности первого уровня

export interface directoryProps {
    title: string
    lvl: number
    indexlvl1: number
    indexlvl2: number
} // интерфейс входных данных для компонента директории

export interface tableProps {
    item: EndData
    index: number
    witchShowed: [number[], Function]
    uniq: string
}

export interface FuncBarProps {
    searcher: any
    setSearcher: Function
}