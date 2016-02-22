/*global Chats, Router */

Template.available_user_list.helpers({
  users:function(){
    return Meteor.users.find();
  }
})
Template.available_user.helpers({
  getUsername:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.username;
  }, 
  isMyUser:function(userId){
    if (userId == Meteor.userId()){
      return true;
    }
    else {
      return false;
    }
  }
})


Template.chat_page.helpers({
  messages:function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat){
      var messages = chat.messages;
      var chuncks = [], lines=[messages.shift()];
      while (messages.length > 0) {
        if (lines[lines.length -1].userId == messages[0].userId) {
          lines.push(messages.shift());
        } else {
          chuncks.push({lines: lines, userId: lines[0].userId});
          lines = [messages.shift()];
        }
      }
      chuncks.push({lines: lines, userId: lines[0].userId});
    }
    return chuncks;
  },
  noMessages:function(){
    if(!Chats.findOne({_id:Session.get("chatId")}).messages){
      return true;
    } else {
      return false;
    }
  },
  other_user:function(){
    if(Meteor.user()){
      var other_user_id = Router.current().params._id;
      return Meteor.users.findOne({_id: other_user_id}).profile.username;
    }
  }, 

})

Template.chat_message.helpers({
  username: function(userId){
    return Meteor.users.findOne({_id: userId}).profile.username;
  },
  ownMessage: function(userId){
    if(Meteor.userId() == userId){
      return true;
    } else {
      return false;
    }
  },
  avatar:function(userId){
    return Meteor.users.findOne({_id: userId}).profile.avatar;
  }
})