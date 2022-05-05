// for almost each model ther is a controller , that contoller is a file
// we add our functions then export them



const model = require('../models/friends.model')
const path =  require('path');


function getFriend(req,res){
    const freindId = Number(req.params.freindId); // or +instead to make it number
    const friend = model[freindId];
    if(friend){
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error:"friend not found"
        })
    }

}

function getAllFriends(req,res){
    // __dirname is working directory' controller
    const filepath = path.join(__dirname, '..', 'public', '15.1 skimountain.jpg');
    res.json(model);  // json is send but json
    res.sendFile(filepath, function(err) {
        if (err) {
            return res.status(err.status).end();
        } else {
            return res.status(200).end();
        }
    });
}

function addFriend(req,res){
    if( !req.body.name){
        return res.status(400).json({    // return
            error:'bad request'
        })
    }

    newFriend = {
        name: req.body.name,
        id: model.length
    }
    model.push(newFriend);
    res.json(newFriend) // send back json object
}

module.exports = {
    getFriend,
    getAllFriends,
    addFriend

}