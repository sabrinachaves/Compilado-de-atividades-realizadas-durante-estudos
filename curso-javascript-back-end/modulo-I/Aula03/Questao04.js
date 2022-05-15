const palavraOriginal = "Sabrina";
 novaPalavra = "";

reverseString = (palavra) =>{
    for(let i = palavra.length -1; i >= 0; i--)
    {
        novaPalavra+=palavra[i];
    }
    return novaPalavra;
}

 console.log(reverseString(palavraOriginal));