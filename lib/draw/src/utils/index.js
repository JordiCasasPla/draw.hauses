/**
 * Get the current pos of the mouse in canvas
 * @param {canvas} canvas
 * @param {event} e
 * @returns {object} {x, y}
 */
const getMouseCoords = (canvas, e) => {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

export { getMouseCoords };