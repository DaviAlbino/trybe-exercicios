const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} + ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
    console.log(`${ifScope} + ' o que estou fazendo aqui ? :O'`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);



  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
  const decreaseArrays = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    
    return oddsAndEvens;
  }

const decreased = decreaseArrays();

  console.log(`Os números ${decreased} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉



  const factorial = (number) => {
    let newNumber = 1;
    for(let index = 2; index <= number; index += 1) {
      newNumber *= index; 
    }
    
    return newNumber
  }

  console.log(factorial(8));

  const longestWord = sentence => {
    let wordArray = sentence.split(' ');
    let longest = 0;
    let longWord = '';

    for(let index = 0; index < wordArray.length; index += 1){
      if(wordArray[index].length > longest) {
        longest = wordArray[index].length;
        longWord = wordArray[index];
      }
    }
    return longWord;
  }

  console.log(longestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`));

  

  const identity = stringName => {
    let 
  }