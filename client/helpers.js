/*global Chats */

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
  ava1:function(){
    if(Meteor.user()){
      var user1Id = Chats.findOne({_id:Session.get("chatId")}).user1Id;
      return Meteor.users.findOne({_id: user1Id}).profile.avatar;
    }
  },
  ava2:function(){
    if(Meteor.user()){
      var user2Id = Chats.findOne({_id: Session.get("chatId")}).user2Id;
      return Meteor.users.findOne({_id: user2Id}).profile.avatar;
    }
  },
  messages:function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    return chat.messages;
  }, 
  other_user:function(){
    if(Meteor.user()){
      var userId = Chats.findOne({_id:Session.get("chatId")}).user2Id;
      return Meteor.users.findOne({_id: userId}).profile.username;
    }
  }, 

})

Template.chat_message.helpers({
  username: function(userId){
    console.log(userId);
    return Meteor.users.findOne({_id: userId}).profile.username;
  }
})