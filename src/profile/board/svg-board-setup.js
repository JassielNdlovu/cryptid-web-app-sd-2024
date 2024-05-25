document.addEventListener('DOMContentLoaded', () => {
   setUpBoard(); 
});

function setUpBoard() {
    const svg = document.getElementById('board');

    if (!svg) return;

    const hexagonPath = (size) => {
        const s = size;
        const h = Math.sqrt(3) * s;
        return `M ${s},0 L ${s / 2},${h / 2} L -${s / 2},${h / 2} L -${s},0 L -${s / 2},-${h / 2} L ${s / 2},-${h / 2} Z`;
    };

    const drawHexagon = (x, y, size) => {
        const hex = document.createElementNS("http://www.w3.org/2000/svg", "path");
        hex.setAttribute("d", hexagonPath(size));
        hex.setAttribute("transform", `translate(${x}, ${y})`);
        hex.setAttribute("stroke", "white");
        hex.setAttribute("fill", "lightblue");
        svg.appendChild(hex);
    };

    const size = 30;

    const startRows = 1;
    const startCols = 2;

    const cols = 12 + startCols;
    const rows = 9 + startRows;

    const hexHeight = Math.sqrt(3) * size;

    for (let row = startRows; row < rows; row++) {
        for (let col = startCols; col < cols; col++) {
            const x = col * (1.5 * size);
            const y = row * hexHeight + (col % 2) * (hexHeight / 2);
            drawHexagon(x, y, size);
        }
    }
}
