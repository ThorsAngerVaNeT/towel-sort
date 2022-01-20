// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (undefined === matrix || 0 === matrix.length) return [];

    let result = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
        result = result.concat(i % 2 === 0 ? matrix[i] : matrix[i].reverse());
    }
    return result;
};
