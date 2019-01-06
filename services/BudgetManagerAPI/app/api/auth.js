const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('@config')

const api = {};

//finding the user that has a matching username 
api.login = (User) => (req, res) => {
    User.findOne({ username: req.body.username}, (error, user) => {
        if(error) throw error;
        if(!user) res.status(401).send({
             success: false, message: 'Authentication failed. User not found,'
            });
        else {
            user.comparePassword(req.body.password, (error, matches) => {
                if (matches && !error) {
                    const token = jwt.sign({user}, config.secret);
                    res.json({ success: true, message: 'Token granted', token});
                } else {
                    res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.'});
                }
            });
        }
    })
}

//get the token and parse it
//verifies the headers and gets the authorization header
api.verify = (headers) => {
    if (headers && headers.authorization) {
       const split = headers.authorization.split(' ');
    
    if(split.length === 2) return split[1];
        else return null;
    }
        else return null
}

module.exports = api;