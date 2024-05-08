function skillsMember() {
    var member = {};
    member.name = "Brendan";
    member.age = 36;
    member.skills = ["JavaScript", "Python", "HTML", "CSS"];
    member.greet = function() {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    };
    return member;
}