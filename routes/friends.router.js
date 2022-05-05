const express = require('express');
const FriendsController = require('../controllers/friends.controller');

//create router 
friendsRouter =  express.Router();

//we can make middleware for this router only
friendsRouter.use((req, res, next)=>{
    console.log('ip address: ', req.ip);  // user ip
    // without next server will stuck
    next();
});
friendsRouter.post('/', FriendsController.addFriend)
friendsRouter.get('/', FriendsController.getAllFriends)
friendsRouter.get('/:freindId', FriendsController.getFriend)

module.exports = friendsRouter;