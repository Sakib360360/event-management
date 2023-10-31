const isTouchDevice = ()=> {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export default isTouchDevice;