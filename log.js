function show(){
   var username= document.getElementById('name').value;
   var pass= document.getElementById('pass').value;
   var res= document.getElementById('response');

    var xmlhttp = new XMLHttpRequest();
    var url = "backend.php?name="+username+'&pass='+pass;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myresponse = this.responseText;
       res.textContent=myresponse;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}