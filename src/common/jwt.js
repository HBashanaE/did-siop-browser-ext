const base64url = require('base64url');

const encodeBase64Url = function(plain){
    try{
        return base64url.encode(JSON.stringify(plain));
    }
    catch(err){
        throw new Error("Cannot encode jwt: " + err);
    }
}

const decodeBase64Url = function (encoded){
    try{
        return JSON.parse(base64url.decode(encoded));
    }
    catch(err){
        throw new Error("Cannot decode jwt: " + err);
    }
}

const signJWT = function(){

}

const verifyJWT = function(){

}


/* const verifyJWT = async function(jwt){
    try{
        let verified = undefined;
        verified = await didJWT.verifyJWT(jwt, {resolver: resolver});
        return verified;
    }
    catch(err){
        if(err.msglist){
            err.msglist.push('jwt/verifyJWT');
        }
        else{
            err.msglist = [];
        }
        throw err;
    }
}

const decodeJWT = function(jwt){
    try{
        return didJWT.decodeJWT(jwt);
    }
    catch(err){
        if(err.msglist){
            err.msglist.push('jwt/decodeJWT');
        }
        else{
            err.msglist = [];
        }
        throw err;
    }
} */

module.exports = {
    encodeBase64Url,
    decodeBase64Url,
    signJWT,
    verifyJWT,
};