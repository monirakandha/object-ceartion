const student = {
    id : 101,
    money: 5000,
    name : 'Rj Kebriya',
treatDe:function(expense){
    this.money = this.money - expense;
    console.log(this);
    return this.money;
}
}

const heroBalam = {
    id:102,
    money : 6000,
    name : 'Hero Balam',
}
student.treatDe(100);

const heroTreatDe = student.treatDe.bind(heroBalam);
heroTreatDe(500);
heroTreatDe(300);
heroTreatDe(600);
student.treatDe(400);