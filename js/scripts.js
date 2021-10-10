function ChangeValues() {
  var name = document.getElementById("text_name").value;
  var emailid  = document.getElementById("text_phone-number").value;
  var phoneno  = document.getElementById("text_emailid").value;
  var adress = document.getElementById("text_address").value;


console.log(name);

  document.getElementById("name").innerHTML=name;
  document.getElementById("phone-number").innerHTML=emailid;
  document.getElementById("emailid").innerHTML=phoneno;
  document.getElementById("address").innerHTML=adress;

}
function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);
  }

