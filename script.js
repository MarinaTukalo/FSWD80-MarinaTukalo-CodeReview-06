var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(img, place, zip, address) {
        this.img = img;
        this.place = place;
        this.zip = zip;
        this.address = address;
    }
    Location.prototype.display = function () {
        return "\n\t\t\t\t<img class=\"img-fluid card-img-top d-xs-none d-sm-none d-md-block\" src=\"img/" + this.img + "\">\n\t\t\t\t" + this.place + "<br><hr>\n\t\t\t\t" + this.zip + "<br><hr>  \n\t\t\t\t" + this.address + " \n\t\t\t";
    };
    return Location;
}());
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(img, place, zip, address, telephone, type, web) {
        var _this = _super.call(this, img, place, zip, address) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Food.prototype.display_food = function () {
        return _super.prototype.display.call(this) + "<br><hr>\n\t\t\t\tPHONE NUMBER: " + this.telephone + "<br><hr>\n\t\t\t\tTYPE of CUISINE: " + this.type + "<br><hr>  \n\t\t\t\tWEB-PAGE: <a href=\"" + this.web + "\">" + this.web + "</a>\n\t\t\t\t";
    };
    return Food;
}(Location));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(img, place, zip, address, date, time, price) {
        var _this = _super.call(this, img, place, zip, address) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Event.prototype.display_event = function () {
        return _super.prototype.display.call(this) + "<br><hr>\n\t\t\t\tDATE: " + this.date + "<br><hr>\n\t\t\t\tTIME: " + this.time + "<br><hr>  \n\t\t\t\tTICKET PRICE: " + this.price + " \n\t\t\t\t";
    };
    return Event;
}(Location));
var Church_V = new Location("vienna_1.jpg", "ST. CHARLES CHURCH", "1010 Vienna", "Karlsplatz 1");
var Zoo_V = new Location("vienna_2.jpg", "ZOO VIENNA", "1130 Vienna", "Maxingstraße 13b");
var Thai_V = new Food("vienna_3.jpg", "LEMON LEAF THAI RESTAURANT", "1050 Vienna", "Kettenbrückengasse 19", 5812308, "Thai", "http://www.lemonleaf.at/");
var Sixta_V = new Food("vienna_4.jpg", "SIXTA RESTAURANT", "1050 Vienna", "Schönbrunner Straße 21", 5852856, "traditional austrian", "http://www.sixta-restaurant.at/");
var Music_V = new Event("vienna_5.jpg", "MUSIKVEREIN: MOSKAUER VIRTUOSEN", "1010 Vienna", "Musikvereinsplatz 1", "25.10.2019", "19.30", "45 EUR");
var Gallery_V = new Event("vienna_6.jpg", "ALBERTINA: MARIA LASSNIG", "1010 Vienna", "Albertinaplatz 1", "29.10.2019", "16.00", "35 EUR");
var Opera_S = new Location("sydney_1.jpg", "SYDNEY OPERA HOUSE", "2000 Sydney", "Bennelong Point");
var Pool_S = new Location("sydney_2.jpg", "BONDI ICEBERGS POOL Sydney", "2026 Sydney", "1 Notts Ave,Bondi Beach");
var Greek_S = new Food("sydney_3.jpg", "The RESTAURANT ALPHA", "2000 Sydney", "238 Castlereagh St", 90981111, "greek", "http://www.alpharestaurant.com.au/");
var Italian_S = new Food("sydney_4.jpg", "The RESTAURANT PENDOLINO", "2000 Sydney", "100/412-414 George Street LEVEL 2 THE STRAND ARCADE", 92316117, "italian", "https://www.pendolino.com.au/");
var Cirque_S = new Event("sydney_5.jpg", "CIRQUE DU SOLEIL KURIOS", "2000 Sydney", "Entertainment Quarter, Moore Park", "20.10.2019", "19.00", "135 AUD");
var Concert_S = new Event("sydney_6.jpg", "THE ROYAL EDINBURGH MILITARY TATTOO", "2000 Sydney", "ANZ Stadium, Sydney Olympic Park", "22.10.2019", "18.00", "155 AUD");
var array = [Church_V, Zoo_V, Thai_V, Sixta_V, Music_V, Gallery_V, Opera_S, Pool_S, Greek_S, Italian_S, Cirque_S, Concert_S];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    if (typeof val.web != "undefined") {
        document.getElementById("cards").innerHTML += "<div class=\"card col-lg-3 col-md-5 col-sm-11 mx-auto\">" + val.display_food() + "</div><br>";
    }
    else if (typeof val.price != "undefined") {
        document.getElementById("cards").innerHTML += "<div class=\"card col-lg-3 col-md-5 col-sm-11 mx-auto\">" + val.display_event() + "</div><br>";
    }
    else {
        document.getElementById("cards").innerHTML += "<div class=\"card col-lg-3 col-md-5 col-sm-11 mx-auto\">" + val.display() + "</div><br>";
    }
    ;
}
;
