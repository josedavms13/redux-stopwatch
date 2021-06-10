

export const type ={
    increaseSeconds : 'increase_seconds',
    decreaseSeconds : 'decrease_seconds',

    increaseMinutes : 'increase_minutes',
    decreaseMinutes : 'decrease_minutes',

    increaseHours : 'increase_hours',
    decreaseHours : 'decrease_hours',

    resetSeconds : 'reset_seconds',
    resetMinutes : 'reset_minutes',
    resetHours : 'reset_hours',
}

export const increaseSeconds = ()=>({
    type : type.increaseSeconds
})

export const decreaseSeconds = ()=>({
    type : type.decreaseSeconds
})


export const increaseMinutes = ()=>({
    type : type.increaseMinutes
})
export const decreaseMinutes = ()=>({
    type : type.decreaseMinutes
})


export const increaseHours = ()=>({
    type : type.increaseHours
})
export const decreaseHours = ()=>({
    type : type.decreaseHours
})

export const resetSeconds = ()=>({
    type : type.resetSeconds
})

export const resetMinutes = ()=>({
    type : type.resetMinutes
})

export const resetHours = ()=>({
    type : type.resetHours
})