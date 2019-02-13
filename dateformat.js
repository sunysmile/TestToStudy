"use strict"

var DateFormat = function(date,firstSymbol,twoSymbol){
    var _this = window;
    if(typeof date === 'string'){
        _this.timeNumber = parseInt(date);
    }else if(typeof date === 'number'){
        _this.timeNumber = parseInt(date);
    }else{
        _this.timeNumber = (new Date()).getTime();
    }

    DateFormat.fn.timeNumber = _this.timeNumber;
    DateFormat.fn.firstSymbol = firstSymbol;
    DateFormat.fn.twoSymbol = twoSymbol;
    return DateFormat.fn.init();
};

DateFormat.fn = DateFormat.prototype = {
    constructor: DateFormat,
    init: function(){
        if((typeof this.firstSymbol !== 'undefined'&&this.firstSymbol) && (typeof this.twoSymbol!=='undefined'&&this.twoSymbol)){
            return this.YYYY()+this.firstSymbol+this.MM()+this.firstSymbol+this.DD()+' '+this.hh()+this.twoSymbol+this.mm()+ this.twoSymbol +this.ss();
        }else if(typeof this.firstSymbol !== 'undefined'&&this.firstSymbol){
            return this.YYYY()+this.firstSymbol+this.MM()+this.firstSymbol+this.DD();
        }else if(typeof this.twoSymbol!=='undefined'&&this.twoSymbol){
            return this.hh()+this.twoSymbol+this.mm()+ this.twoSymbol +this.ss();
        }else{
            return this.YYYY()+ '-' +this.MM()+ '-' +this.DD()+' '+this.hh()+ ':' +this.mm()+ ':' +this.ss();
        }
    },
    YYYY: function(){
        var _this = this;
        this.year = (new Date(_this.timeNumber)).getFullYear();
        return this.year;
    },
    MM: function(){
        var _this = this;
        this.month = (new Date(_this.timeNumber)).getMonth()+1<10?'0'+((new Date(_this.timeNumber)).getMonth()+1):(new Date(_this.timeNumber)).getMonth()+1;
        return this.month;
    },
    DD: function(){
        var _this = this;
        this.day = (new Date(_this.timeNumber)).getDate()<10?'0'+(new Date(_this.timeNumber)).getDate():(new Date(_this.timeNumber)).getDate();
        return this.day;
    },
    hh: function(){
        var _this = this;
        this.hours = (new Date(_this.timeNumber)).getHours()<10?'0'+(new Date(_this.timeNumber)).getHours():(new Date(_this.timeNumber)).getHours();
        return this.hours;
    },
    mm: function(){
        var _this = this;
        this.mimutes = (new Date(_this.timeNumber)).getMinutes()<10?'0'+(new Date(_this.timeNumber)).getMinutes():(new Date(_this.timeNumber)).getMinutes();
        return this.mimutes;
    },
    ss: function(){
        var _this = this;
        this.seconds = (new Date(_this.timeNumber)).getSeconds()<10?'0'+(new Date(_this.timeNumber)).getSeconds():(new Date(_this.timeNumber)).getSeconds();
        return this.seconds;
    }
};

if(typeof module !== 'undefined' && module.exports){
    module.exports = DateFormat;
}

if(typeof define === 'function'){
    define(function(){
        return DateFormat;
    });
}

DateFormat.fn.init.prototype = DateFormat.fn;
module.exports = DateFormat;