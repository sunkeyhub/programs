function multi(a, b) {
    const aArr = (a+'').split('').reverse(); 
    const bArr = (b+'').split('').reverse();

    const result = [];
    for (let i=0, bLength=bArr.length; i<bLength; ++i) {
        result[i] = [];

        for (let k=0; k<i; ++k) {
            result[i].push(0);
        }

        let jin = 0;
        for (let j=0, aLength=aArr.length; j<aLength; ++j) {
            let rt = bArr[i] * aArr[j];
            if (jin > 0) {
                rt += jin;
            }
            jin = Math.floor(rt / 10);

            result[i].push(rt % 10);

            if (j === aLength-1 && jin>0) {
                result[i].push(jin);
            }
        }
    }

    let sumArr = [];
    let jin = 0;

    for (let i=0, lines=result.length, cols=result[lines-1].length; i<cols; ++i) {
        let rt = 0;
        for (let j=0; j<lines; ++j) {
            if (!result[j][i]) {
                result[j][i] = 0;
            }
            rt += result[j][i];
        }

        if (jin > 0) {
            rt += jin;
        }

        jin = Math.floor(rt / 10);

        sumArr.push(rt % 10);

        if (i===cols-1 && jin > 0) {
            sumArr.push(jin);
        }
    }

    return sumArr.reverse().join('');
}
