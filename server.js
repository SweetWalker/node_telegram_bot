var express = require('express');
var TelegramBot = require('node-telegram-bot-api');
var imagesnapjs = require('imagesnapjs'), fs = require('fs');
var http = require('http');
var token = '171920206:AAGcGl8qxQ8t_dkBG2xHfzwVFq_w_jw0A_A';
var filename = '/Users/user/Downloads/pentagramm.jpg';
var options = {
	host: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/DarkCactus?api_key=273f01a7-8436-492c-870a-89683f87039e',
	method: 'GET'
}

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    if(msg.text == 'photo')
        fs.exists(filename, function (exists) {
            if(exists)
                fs.unlinkSync(filename);
            imagesnapjs.capture(filename, { cliflags: '-w 2'}, function(err) {
                console.log(err ? err : 'Success!');
                bot.sendPhoto(chatId, filename, {caption: "It's your photo!"});
            });
    });
    http.get({
    	path: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/DarkCactus?api_key=273f01a7-8436-492c-870a-89683f87039e'
    }, function(res){
    	console.log(res)
    })

});