function max(arr) {
    let max = 0
    let count = 0

    for (i of arr) {
        if (i == 1) {
            count += 1
        } else {
            if (max < count) {
                max = count
                count = 0
            } else {
                count = 0
            }
        }
    }
    if (max < count) {
        max = count
    }
    return max
}

console.log(max([1,1,0,1,1,1]))