let magiciansNames = ["jack", "tim", "cook", "sam"];

function show_magicians(magicians) {
    magicians.forEach((mag) => {
        console.log(mag)
    })
}
// show ooriginal arr
show_magicians(magiciansNames)


function make_great(magicians) {
    let arr = []
    magicians.map((mag, i) => {
        arr.push(`The great ${mag}`)
    })
    return arr

}

const TransformedMagiciansNames = make_great(magiciansNames);
console.log(TransformedMagiciansNames);
console.log(magiciansNames);
