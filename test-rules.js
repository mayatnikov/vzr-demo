#!/usr/bin/env node
/**
 * Проверка работы правила ВЗР СК
 */
const log = require('rufus').getLogger('Camunda DMN');
const axios = require('axios');


// полный расчет
 const url = 'http://10.50.73.119:8084/engine-rest/decision-definition/key/getPremium/tenant-id/vzr/evaluate'

 const requests =[  
    {
        "variables" : {
            "req_id": { "value" : "REQ-XX-29997-1"},
            "country_code" : { "value" : "XXX" },           //  код страны
            "medical_summ": { "value" : 44000},           // страховая премия
            "ndays": { "value" : "15"},           // дней поездки
            "medical_prog": { "value" : "C"},               // программа страхования
            "age" : { "value" : 43},                      // возраст
            "baggage_lost_summ" : { "value" : 1100},      // премия багаж
            "go_summ" : { "value" : 25000},               // премия ГО
            "ns_summ": { "value" : 5000},                 // премия НС
            "tech_assist_summ": { "value" : 5000},        // технический ассист
            "trip_cancel_summ": { "value" : 50000},       // отмена поездки
            "extrim_flag": { "value" : 1},                // характер отдыха ( 1 - 5 )
        }
    },

].forEach(req => { fcall(req); } )

function fcall(req) {    
    // log.debug(req);
    axios({
        method: 'post',
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        url: url,
        data: req
    })
    .then(function(response) {
          log.info("response body:\n",response.data[0]);
       })
    .catch(function (error) {
        // handle error
        log.error(error);
      })
    .finally(function () {
        log.info("End of test")
      });
  };
