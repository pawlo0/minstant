/* global Chats */

Template.chat_page.events({
// this event fires when the user sends a message on the chat page
'submit .js-send-chat':function(event){
  // stop the form from triggering a page reload
  event.preventDefault();
  // see if we can find a chat object in the database
  // to which we'll add the message
  var chat = Chats.findOne({_id:Session.get("chatId")});

  if (chat){// ok - we have a chat to use
    // Then calls corresponding method to add messages to the chat
    Meteor.call("pushMessage", chat, event.target.chat.value);
    // reset the form
    event.target.chat.value = "";
  }
}
})