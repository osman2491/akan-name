function oska (dd, mm, yyyy, gender) {
  
    var cc = parseInt(yyyy.toString().substring(0,2)) + 1
    console.log(cc)
    
    var yy = parseInt(yyyy.toString().substring(2,4))
    console.log(yy)
    
    var d=(((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7
    if(cc === 21){
      var workingD = Math.ceil(d);
    } else {
      var workingD = Math.round(d);
    }
   
    console.log(workingD)
    
    if (gender === "male"){
      if(workingD === 7){
        return "Kwasi";
      } else if(workingD === 1){
        return "b";
      } else if(workingD === 2){
        return "c";
      } else if(workingD === 3){
        alert("Kwaku");
      } else if(workingD === 4){
        return "e";
      } else if(workingD === 5){
        return "Kofi";
      } else {
        return "g";
      }
    } else{
      if(workingD === 7){
        return "h";
      } else if(workingD === 1){
        return "i";
      } else if(workingD === 2){
        return "j";
      } else if(workingD === 3){
        return "k";
      } else if(workingD === 4){
        return "l";
      } else if(workingD === 5){
        return "Afua";
      } else {
        return "n";
      }
    }
    
  }