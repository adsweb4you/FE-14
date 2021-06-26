var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 25; //js
var y = 25;
var z = 45;
var r = "sad";
var myobj = {
    names: "sdasd",
    age: 23,
    admin: false
};
function myname(user, age, role) {
    return user + age + role;
}
myname("admin", 25, "role");
var studentArray = ["sd", { name: "tewst" }, 12];
// function myname(user : User){
//     return user.names + user.age + user.admin;
// }
// console.log(myname({names:"nika", age:24, admin:true}));
var form = document.getElementById("forms");
var outp = document.getElementById("outs");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var val1 = document.getElementById("val1");
    var val2 = document.getElementById("val2");
    outp.innerHTML = Number(val1.value) * Number(val2.value);
});
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.title = "NAME";
        this.title = name;
    }
    Dog.prototype.jump = function () {
        console.log(this.title);
    };
    return Dog;
}());
var dogs = new Dog("ჯეკა");
dogs.jump();
var Status;
(function (Status) {
    Status["NotFound"] = "404";
    Status["ServerError"] = "500";
    Status["Ok"] = "200";
})(Status || (Status = {}));
var Respstatus = Status.ServerError;
console.log(Respstatus);
var Color = /** @class */ (function () {
    function Color(color1, color2) {
        this.secretColor = "black";
        this.red = color1;
        this.blue = color2;
    }
    Color.prototype.retxco = function () {
        return this.secretColor;
    };
    return Color;
}());
var Black = /** @class */ (function (_super) {
    __extends(Black, _super);
    function Black(red, blue) {
        return _super.call(this, red, blue) || this;
    }
    Black.accesColor = function () {
        return "sad";
    };
    return Black;
}(Color));
var mycolor = new Black("red", "blue");
console.log(Black.accesColor());
