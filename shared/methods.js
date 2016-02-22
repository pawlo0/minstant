/* global Chats */

Meteor.methods({
    addChat:function(userId, otherUserId){
        Chats.insert({user1Id: userId, user2Id: otherUserId});
    },
    pushMessage: function (chat, text) {
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
    },
    users: function(){
        console.log("method:" + Meteor.users.find());
        return Meteor.users.find();
    },
    getChatId: function(otherUserId){
        // find a chat that has two users that match current user id
        // and the requested user id
        if(this.userId){
            var filter = {$or:[
                      {user1Id:this.userId, user2Id:otherUserId}, 
                      {user2Id:this.userId, user1Id:otherUserId}
                      ]};
            var chat = Chats.findOne(filter);
            if (!chat){// no chat matching the filter - need to insert a new one
                return Chats.insert({user1Id: this.userId, user2Id: otherUserId});
            }
            else {// there is a chat going already - use that. 
                return chat._id;
            }
        }
    }
})