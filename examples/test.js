var smartmsg = require('../index');

console.log("Using the combination of constructor/Prototype pattern");
console.log("");
var mymessage = 'This is amazing!';
var towhom    = 'Son';
var mood  =  "happy";

var msg = new smartmsg(mymessage, mood, towhom);
msg.say();

mymessage = 'I cannot stand this';
msg = new smartmsg(mymessage,"bored" , "Man");
msg.say();


msg = new smartmsg('This is wonderful!', "cheerful", "Karen");
msg.say();
console.log("");
console.log("Using the Dynamic Prototype pattern");
console.log("");
var smartmsg2 = require('../smartmessage');

mymessage = 'This is amazing!';
towhom    = 'Son';
mood  =  "happy";

var msg2 = new smartmsg2(mymessage, mood, towhom);
msg2.say();

mymessage = 'I cannot stand this';
msg2 = new smartmsg2(mymessage,"bored" , "Man");
msg2.say();


msg2 = new smartmsg2('This is wonderful!', "cheerful", "Karen");
msg2.say();
