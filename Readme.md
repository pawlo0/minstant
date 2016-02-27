# **Minstant**

Living in http://pss.minstant.meteor.com/

# Final assigment
### Web Application Development with JavaScript and MongoDB
by University of London, Goldsmiths, University of London

4th Course on the
[Create a Web Experience Specialization](https://www.coursera.org/learn/web-application-development/)

---

### Accomplished Tasks

#### Task 1: Improved the look and feel
The templates and helper functions were adapted so that the messaging window displays users’ avatars next to their messages.

#### Task 2: Implemented data writing security
Insecure package removed from the application and Meteor methods were implemented to allow the insertion of chat items in the Chats collection.
Insertions/ updates can't be made from console.

#### Task 3: Data reading security implemented
Autopublish package removed from the application and publish and subscribe methods were implemented for Chats collection.
Users are only able to retrieve chats that have their user id in either the user1Id field or the user2Id field.

#### Challange task: Emoticons implemented
Emoticon functionality was implemented, which allows the user to insert graphical emoticons into their message.

#### Extra spec 1: Users can't see chat page or users list nor create new chats unless logged in
Altought having acomplished all tasks, there was a little bug in the app. One could see the available users and select one to chat without being logged in.
This caused the insertion of new chats in the colletion even though one could not maintain that chat.
Found this bug when tried to find chats through the console and chats keep coming up, without messages though.

#### Extra spec 2: Users are redirected to welcome page if not logged in
Implemented a welcome page and then, through the router, implemented redirect so that users are redireted to welcome page when they logout.</p>
The redirect works when the users logs out in a chat page or in the users list or even if they try to access a chat page through the URL when logged out.</p>

#### Extra soec 3: Messages are displayed in group
Tried to look a bit lot google talk, were messages from the same user go in the same panel.
New panel is created when the next message comes from the other user.