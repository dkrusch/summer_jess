// Finds the sum of the first <count> prime numbers, not including 1
var sumPrimes = function(count)
{
    // Determines if a number is prime by finding its smallest factor. If no factor is found, the number is prime.
    function isPrime(value)
    {
        for (var i = 2; i < value; i++)
        {
            if (value % i === 0)
            {
                return false;
            }
        }
        return value > 1;
    }
    
    // Holds the current sum of prime numbers.
    var sum = 0;
    
    // Holds the number of primes found.
    var primeCounter = 1;
    
    // The first possible prime is 2 so we start checking at 2.
    var i = 2;
    
    // Gets prime numbers and adds them to the sum up until <count> is reached.
    while (primeCounter <= count)
    {
        if (isPrime(i))
        {
            primeCounter += 1;
            sum += i;
        }
        i++;
    }
    
    return sum;
};

// Prints the sum of the first 1000 prime numbers not including 1
console.log(sumPrimes(1000));