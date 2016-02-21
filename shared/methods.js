/* global Chats */

Meteor.methods({
    addChat:function(userId, otherUserId){
        Chats.insert({user1Id: userId, user2Id: otherUserId});
    }
})