export function canMoveKnight(from, to) {
    const [fromX, fromY] = from;
    const [toX, toY] = to;
    const dx = toX - fromX;
    const dy = toY - fromY;
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )

}