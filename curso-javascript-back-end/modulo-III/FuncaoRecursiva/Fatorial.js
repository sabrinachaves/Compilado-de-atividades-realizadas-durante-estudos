const fatorial = (num) => {
    if (num < 0)
        return undefined;
    if (num < 2) return 1;
    return num*fatorial(num-1);
}

console.log(fatorial(5));