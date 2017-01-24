var monica = {
    name: 'Thais',
    total: 1000,
    deductMontlyFee: function(fee){
        this.total = this.total - fee;
        console.log(this.name + ' remaining balance is ' + this.total);

    }

}

monica.deductMontlyFee(100);

var katia ={
    name: 'Katia',
    total: 1500
}

var katiaFeedDeductor = monica.deductMontlyFee.bind(katia,200);

katiaFeedDeductor();
katiaFeedDeductor();


var henrique = {
    name: 'Henrique',
    total: 400
}

var henriqueFeedDeductor = monica.deductMontlyFee.bind(henrique,25);

henriqueFeedDeductor();
katiaFeedDeductor();
henriqueFeedDeductor();
monica.deductMontlyFee(100);