/*global Chats, Router */

// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {

  this.render("navbar", {to:"header"});
  this.render("lobby_page", {to:"main"});  
});

// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function () {
  
  var route = this;
  
  this.render("navbar", {to:"header"});
  
  if (!Meteor.userId() && this.ready()){
    this.redirect('/');
  } else {
  
    this.render("loading", {to:"main"});
    
    // the user they want to chat to has id equal to 
    // the id sent in after /chat/... 
    var otherUserId = this.params._id;
  
    // Set ssession by calling the getChatId method
    Meteor.call("getChatId", otherUserId, function(err, res){
      if(err){
        console.log("getChatId callback got error: "+err);
      } else {
        Session.set("chatId", res);
        route.render("chat_page", {to:"main"}); 
      }
    });
  }
});