class Location {
	place:string;
	zip:string;
	address:string;
	img:string;

	constructor(img:string,place:string, zip:string,address:string){
		this.img=img;
		this.place=place;
		this.zip=zip;
		this.address=address;		
	}

	display(){
		return `
				<img class="img-fluid card-img-top d-xs-none d-sm-none d-md-block" src="img/${this.img}">
				${this.place}<br><hr>
				${this.zip}<br><hr>  
				${this.address} 
			`
	}
}

class Food extends Location {
	telephone:number;
	type:string;
	web:string;

	constructor(img:string,place:string, zip:string,address:string,telephone:number,type:string,web:string){
		super(img, place, zip, address);
		this.telephone = telephone;
		this.type = type;
		this.web = web;
	}

	display_food(){
		return `${super.display()}<br><hr>
				PHONE NUMBER: ${this.telephone}<br><hr>
				TYPE of CUISINE: ${this.type}<br><hr>  
				WEB-PAGE: <a href="${this.web}">${this.web}</a>
				`
	}
}

class Event extends Location {
	date:any;
	time:any;
	price:any;

	constructor(img:string,place:string, zip:string,address:string,date:any,time:any,price:any){
		super(img, place, zip, address);
		this.date = date;
		this.time = time;
		this.price = price;
	}

	display_event(){
		return `${super.display()}<br><hr>
				DATE: ${this.date}<br><hr>
				TIME: ${this.time}<br><hr>  
				TICKET PRICE: ${this.price} 
				`
	}
}

var Church_V = new Location ("vienna_1.jpg","ST. CHARLES CHURCH","1010 Vienna","Karlsplatz 1");
var Zoo_V = new Location ("vienna_2.jpg","ZOO VIENNA","1130 Vienna","Maxingstraße 13b");
var Thai_V = new Food("vienna_3.jpg","LEMON LEAF THAI RESTAURANT","1050 Vienna","Kettenbrückengasse 19",5812308,"Thai","http://www.lemonleaf.at/");
var Sixta_V = new Food("vienna_4.jpg","SIXTA RESTAURANT","1050 Vienna","Schönbrunner Straße 21",5852856,"traditional austrian","http://www.sixta-restaurant.at/");
var Music_V = new Event("vienna_5.jpg","MUSIKVEREIN: MOSKAUER VIRTUOSEN","1010 Vienna","Musikvereinsplatz 1","25.10.2019","19.30","45 EUR");
var Gallery_V = new Event("vienna_6.jpg","ALBERTINA: MARIA LASSNIG","1010 Vienna","Albertinaplatz 1","29.10.2019","16.00","35 EUR");

var Opera_S = new Location ("sydney_1.jpg","SYDNEY OPERA HOUSE","2000 Sydney", "Bennelong Point");
var Pool_S = new Location ("sydney_2.jpg","BONDI ICEBERGS POOL Sydney","2026 Sydney", "1 Notts Ave,Bondi Beach");
var Greek_S = new Food ("sydney_3.jpg","The RESTAURANT ALPHA","2000 Sydney", "238 Castlereagh St",90981111,"greek","http://www.alpharestaurant.com.au/");
var Italian_S = new Food ("sydney_4.jpg","The RESTAURANT PENDOLINO","2000 Sydney", "100/412-414 George Street LEVEL 2 THE STRAND ARCADE",92316117,"italian","https://www.pendolino.com.au/");
var Cirque_S = new Event("sydney_5.jpg","CIRQUE DU SOLEIL KURIOS","2000 Sydney","Entertainment Quarter, Moore Park","20.10.2019","19.00","135 AUD");
var Concert_S = new Event("sydney_6.jpg","THE ROYAL EDINBURGH MILITARY TATTOO","2000 Sydney","ANZ Stadium, Sydney Olympic Park","22.10.2019","18.00","155 AUD");

var array = [Church_V, Zoo_V, Thai_V, Sixta_V, Music_V, Gallery_V, Opera_S, Pool_S, Greek_S, Italian_S, Cirque_S, Concert_S];

for (let val of array){
	if(typeof val.web != "undefined"){
		document.getElementById("cards").innerHTML += `<div class="card col-lg-3 col-md-5 col-sm-11 mx-auto">` + val.display_food() + `</div><br>`;
	}
	else if(typeof val.price != "undefined"){
		document.getElementById("cards").innerHTML += `<div class="card col-lg-3 col-md-5 col-sm-11 mx-auto">` + val.display_event() + `</div><br>`;
	}
	else{
		document.getElementById("cards").innerHTML += `<div class="card col-lg-3 col-md-5 col-sm-11 mx-auto">` + val.display() + `</div><br>`;
	};
};
