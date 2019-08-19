function oska () {

    var dd = parseInt(document.getElementById('dd').value);
    var mm = parseInt(document.getElementById('mm').value);
    var yyyy = parseInt(document.getElementById('yyyy').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var cc = parseInt(yyyy.toString().substring(0,2)) + 1;
    
    var yy = parseInt(yyyy.toString().substring(2,4));
    
    var d=(((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7;
    if(cc === 21){
      var workingD = Math.ceil(d);
    } else {
      var workingD = Math.round(d);
    }
   
    console.log(workingD)
    
    if (gender === "male"){
      if(workingD === 7){
        alert("Kwasi");
      } else if(workingD === 1){
        alert("b");
      } else if(workingD === 2){
        alert("c");
      } else if(workingD === 3){
        alert("Kwaku");
      } else if(workingD === 4){
        alert("e");
      } else if(workingD === 5){
        alert("Kofi");
      } else {
        alert("g");
      }
    } else{
      if(workingD === 7){
        alert("h");
      } else if(workingD === 1){
        alert("i");
      } else if(workingD === 2){
        alert("j");
      } else if(workingD === 3){
        alert("k");
      } else if(workingD === 4){
        alert("l");
      } else if(workingD === 5){
        alert("Afua");
      } else {
        alert("n");
      }
    }
    
  }