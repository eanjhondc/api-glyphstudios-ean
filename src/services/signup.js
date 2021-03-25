const TAG = '[SERVICES/SIGNUP]';
const logger = require('../core/logger');
const request = require('request');


module.exports.createUser = async (data) => {
  const ACTION = '[createUser]';
  logger.log('info', `${TAG}${ACTION}`);

    // let nameCheckingFirstName = await checkName(data.firstName);
    // let nameCheckingLastName = await checkName(data.lastName);
    // let emailChecking = await checkEmail(data.email);
    // let phoneNumberChecking = await checkPhoneNumber(data.mobile_number);
    // let websiteUrlChecking = await checkWebsiteUrl(data.website_url);
    let nameCheckingFirstName = true;
    let nameCheckingLastName = true;
    let emailChecking = true;
    let phoneNumberChecking = true;
    let websiteUrlChecking = true;

    return {res: [nameCheckingFirstName, nameCheckingLastName, emailChecking, phoneNumberChecking, websiteUrlChecking]};
  
    
    
}


const checkName = (str) => {
    return new Promise((resolve, reject) => {
        let params = {
            'user-id': 'eabcdcstr',
            'api-key': '7LN5EZyZdVeKcipmsW3gMTm3gxDNf501EkOES2lDSceKk8ro',
            'content': `${str}`
        };

        request.post(
            {url:'https://neutrinoapi.net/bad-word-filter', form: params},
            function (error, response, body) {
                if(!error && response.statusCode == 200) {
                    let result = JSON.parse(body);
                    console.log(result)
                    if(result['is-bad'] == false){
                        resolve(true)
                    }else{
                        reject(false)
                    }  
                }
            }
        );
    })
}

const checkEmail = (email) => {
    return new Promise((resolve, reject) => {
        if(email.includes('@google.com')){
            reject(false);
        }
        
        let params = {
            'user-id': 'eabcdcstr',
            'api-key': '7LN5EZyZdVeKcipmsW3gMTm3gxDNf501EkOES2lDSceKk8ro',
            'email': `${email}`
        };

        request.post(
            {url:'https://neutrinoapi.net/email-validate', form: params},
            function (error, response, body) {
                if(!error && response.statusCode == 200) {
                    let result = JSON.parse(body);
                    console.log(result)
                    if(result['valid'] == true){
                        resolve(true)
                    }else{
                        reject(false)
                    }  
                }
            }
        );
    })
    
}

const checkPhoneNumber = (num) => {
    return new Promise((resolve, reject) => {
        let params = {
            'user-id': 'eabcdcstr',
            'api-key': '7LN5EZyZdVeKcipmsW3gMTm3gxDNf501EkOES2lDSceKk8ro',
            'number': `${num}`,
            'country-code': '+63'
        };

        request.post(
            {url:'https://neutrinoapi.net/phone-validate', form: params},
            function (error, response, body) {
                if(!error && response.statusCode == 200) {
                    let result = JSON.parse(body);
                    console.log(num)
                    if(result['valid'] == true){
                        resolve(true)
                    }else{
                        reject(false)
                    }  
                }
            }
        );
    })
    
}

const checkWebsiteUrl = (weburl) => {
    return new Promise((resolve, reject) => {
        if(weburl.includes('?')){
            reject(false);
        }
        let params = {
            'user-id': 'eabcdcstr',
            'api-key': '7LN5EZyZdVeKcipmsW3gMTm3gxDNf501EkOES2lDSceKk8ro',
            'url': `${weburl}`,
            'ignore-certificate-errors': false
        };

        request.post(
            {url:'https://neutrinoapi.net/url-info', form: params},
            function (error, response, body) {
                if(!error && response.statusCode == 200) {
                    let result = JSON.parse(body);
                    console.log(result)
                    if(result['valid'] == true){
                        resolve(true)
                    }else{
                        reject(false)
                    }  
                }
            }
        );
    })
    
}