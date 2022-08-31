export const getDate = (integer: number): string => {
    const date: Date = new Date(integer)
    let day = date.getDate().toString()
    if (day.length === 1) day = '0' + day
    let month = date.getMonth().toString()
    if (month.length === 1) month = '0' + month
    return `${day}.${month}.${date.getFullYear()}`
}