const PrimesTesting = 25000;





function Primes(){
    this.primes = [];
    this.primes_count = 0;

    this.addPrime = function(i){
        this.primes[this.primes_count++] = i;
    }

    this.isPrimeDivisible = function(candidate){
        
        for (var i = 1; i <= this.primes_count; ++i){
            if((candidate % this.primes[i]) == 0){
                console.log(this.primes[i]);
                return true;
            }
        }
        return false;
    }

    this.getPrimeCount = function(){
        return this.primes_count;
    }

}


const main = () => {
    p = new Primes();
    var c = 1;

    while (p.getPrimeCount() < 10){
        if(!p.isPrimeDivisible(c)){
            p.addPrime(c)
        }
        c++;
    }    

    console.log(p.primes.toString());
    //console.log(p.primes_count);
    var c = 1;

} 



main();