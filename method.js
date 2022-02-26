const student = {
    id : 101,
    name : 'Rj Kebriya',
    major:" Mathematics",
    money: 5000,
    isRich : false,
    subject: ['english', 'economics' , 'math 101' , 'calculus'],
    bestFriend: {
        name : 'khundu',
        subject : 'Mathematics'
    },

takaExam : function(){
    console.log(this.name,'taking Exam');

},
treatDe:function(expense , boksish){
    this.money = this.money - expense - boksish;
    return this.money;
}
}
student.takaExam();

const reaminigMoney1 = student.treatDe(900 , 100);
const reaminigMoney2 = student.treatDe(500 , 50);
console.log(reaminigMoney1);
console.log(reaminigMoney2);