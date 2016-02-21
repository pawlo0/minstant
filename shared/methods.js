/* global Chats */

Meteor.methods({
    addChat:function(userId, otherUserId){
        Chats.insert({user1Id: userId, user2Id: otherUserId});
    },
    pushMessage: function (chat, text) {
        console.log(chat._id)
        var msgs = chat.messages; // pull the messages property
        if (!msgs){// no messages yet, create a new array
          msgs = [];
        }
        
        //Besides the text, added the userId and a timestamp.
        msgs.push({text: text, userId: Meteor.user()._id, sentOn: new Date()});
        // put the messages array onto the chat object
        chat.messages = msgs;
        // update the chat object in the database.
        Chats.update(chat._id, chat);
    }
})