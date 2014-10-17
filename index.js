var mood = require("smartmood");


//Use combination constructor/prototype pattern

function smartmessage(text, mymood, towhom){
    this.text = text;
    this.mood = mymood;
    this.towhom = towhom;
    this.smartmsg = text;

}

smartmessage.prototype = {
    constructor : smartmessage,

     say         : function() {
      
     this.smartmsg = this.towhom + ',' + this.text+'!!';
  
      console.log(mood.moodify(this.mood, this.smartmsg));

    }
};

module.exports = smartmessage;
