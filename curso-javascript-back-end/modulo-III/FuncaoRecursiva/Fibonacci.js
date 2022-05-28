const fibonacci = (num)=>{
    if (num < 0) return undefined;
    if (num < 2) return num;
    return (fibonacci(num-1)+fibonacci(num-2)); 
}

console.log(fibonacci(8));
