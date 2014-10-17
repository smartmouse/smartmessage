var mood = require("smartmood");

//Use dynamic prototype pattern
function smartmessage(text, mymood, towhom){
    this.text = text;
    this.mood = mymood;
    this.towhom = towhom;
    this.smartmsg = text;

    if (typeof this.say != "function"){

       smartmessage.prototype.say = function() {

              this.smartmsg = this.towhom + ',' + this.text+'!!';
  
              console.log(mood.moodify(this.mood, this.smartmsg));


       }            

    }
}


module.exports = smartmessage;
