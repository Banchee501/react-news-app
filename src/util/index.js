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

    const date = new Date(time).toLocaleString("uk", optionDate).replace(" о", "")

    return date
}

export const getDay = (time) => {

    const optionHours = {
        day: 'numeric',
        month: 'long',
    }

    const date = new Date(time).toLocaleString("uk", optionHours)

    return date
}