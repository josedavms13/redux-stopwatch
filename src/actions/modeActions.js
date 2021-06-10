
export const type = {
    setCountUp : 'count_up',
    setCountDown : 'count_down'
}
export const setModeUp = ()=> ({
    type : type.setCountUp
})

export const setModeDown = ()=>({
    type : type.setCountDown
})