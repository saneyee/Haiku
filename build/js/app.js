(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Haiku = require('./../js/haiku.js').haikuModule;

$(function(){
$(".formOne").submit(function(event){
  event.preventDefault();

  var userInput = $("#input").val();
  var match = /\r|\n/.exec(userInput);
  if(match != 2){
    alert("Not a Haiku");
  }
  else {
    // var romanNumerical = new Roman();
    // var output = romanNumerical.convertToRoman(userInput);
    // $("#output").text(output);
    alert("Its a Haiku");
  };

});
});

},{}]},{},[1]);
