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
var User = /** @class */ (function () {
    function User() {
        this.username = "superadmin";
        this.passwor = "SDF32_23-04%238YU_!@";
        this.token = "sal;fj32u4894576y8ydhsgrhtgkl;fhgj4-03858";
        this.seassionId = sessionStorage.getItem('token');
        this.name = 'ადმინ';
        this.avatar = "img/bird.png";
        this.role = "super admin";
    }
    User.prototype.login = function (username, pass) {
        if (!this.auth()) {
            if (username == this.username && pass == this.passwor) {
                sessionStorage.setItem('token', this.token);
            }
            else {
                document.getElementById("outs").innerText = "მომხმარებელი ვერ მოიძებნა";
            }
        }
        else {
            alert("თქვენ უკვე დალოგინებული ხართ");
        }
    };
    User.prototype.auth = function () {
        if (this.seassionId == this.token) {
            return true;
        }
        return false;
    };
    return User;
}());
var Superadmin = /** @class */ (function (_super) {
    __extends(Superadmin, _super);
    function Superadmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Superadmin.prototype.select = function () {
    };
    Superadmin.prototype.store = function () {
    };
    Superadmin.prototype.update = function () {
    };
    Superadmin.prototype["delete"] = function () {
    };
    return Superadmin;
}(User));
var Adminstritaror = /** @class */ (function (_super) {
    __extends(Adminstritaror, _super);
    function Adminstritaror() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Adminstritaror;
}(User));
var user = new User();
function checklogin(e) {
    e.preventDefault();
    var usename = document.getElementById("user");
    var pass = document.getElementById("pass");
    user.login(usename.value, pass.value);
}
