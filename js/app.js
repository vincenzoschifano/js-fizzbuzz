for ( let i = 0; i < 100 ; i++) {

    let num = i + 1

    console.log(num)

    let rest0 = num % 3
    let rest1 = num % 5
    
    //console.log(rest)
    if (rest0 + rest1 == 0) {
        console.log('FizzBuzz')

    } else if (rest1 == 0) {

        console.log('Buzz')

    } else if  (rest0 == 0) {

        console.log('Fizz')
    }
    
}

