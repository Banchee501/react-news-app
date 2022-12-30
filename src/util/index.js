// const months = {
//     0
// }

// export const prseTime = (time, vrit) => {
//     switch(vrit) {
//         case ('time') :
//             return `${new Date(time).getHours}:  ` // minute

//         // time month 
//         // month[{new Date(time).getMonth()]
//     }
// }

// time, timeMonth, month, 
// const res = (dte, month)
//const filtered =  arr.filter(item => {
// return new Date(item.dte).getMonth() === month
//})
// return res

export const getTime = (time) => {

    const optionHours = {
        hour: 'numeric',
        minute: 'numeric',
    }

    const date = new Date(time).toLocaleString("uk", optionHours)
    
    return date
}

export const getDate = (time) => {

    const optionDate = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    const date = new Date(time).toLocaleString("uk", optionDate)

    return date
}