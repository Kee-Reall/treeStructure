import { CellsWId } from '../interfaces/intarfaces'

export function sort(dataArry: Array<CellsWId>, reverse: Boolean, sortKey: keyof CellsWId): Array<CellsWId> {
    function quickSort(ary: Array<CellsWId>): Array<CellsWId> {
        if (ary.length === 1 || ary.length === 0) return ary
        else if (ary.length === 2) {
            if (ary[0][sortKey] > ary[1][sortKey]) {
                const temp = ary[1]
                ary[1] = ary[0]
                ary[0] = temp
            }
            return ary
        } else {
            const handler = Math.ceil(ary.length / 2)
            const less: Array<CellsWId> = []
            const great: Array<CellsWId> = []
            for (let i of ary) {
                if (i[sortKey] < ary[handler][sortKey]) less.push(i)
                else if (i[sortKey] > ary[handler][sortKey]) great.push(i)
            }
            return ([...quickSort(less), ary[handler], ...quickSort(great)])
        }
    }
    const result: Array<CellsWId> = quickSort(dataArry)
    return reverse ? result.reverse() : result
}