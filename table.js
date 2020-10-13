const mul = [];

for (let i = 0; i < 9; i++){
    let row = [];
    
    for (let j = i+1; j <= (i + 1) * 9; j += (i+1))
        row.push(j);
    
    mul.push(row);
}

console.log(mul);
    

