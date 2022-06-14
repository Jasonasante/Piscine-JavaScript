function dayOfTheYear(date) {
    let d = new Date(date)
    d.setMonth(0)
    d.setDate(0)
    let diffTime = Math.abs(d - date)
    let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return days
}