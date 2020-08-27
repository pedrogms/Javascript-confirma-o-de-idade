
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var idade = document.getElementById("idade").value;
var nome = document.getElementById("nome").value;



function clicar() {
    // pega os valores do index de nome e idade
    var idade = document.getElementById("idade").value;
    var nome = document.getElementById("nome").value;
  
    // condições 
    if (idade >= 18) {
        
        modal.style.display = "block";
        document.getElementById("info").innerHTML = nome + " você é maior de idade então pode participar pois tem " + idade + " anos";
    } 
    else{
      modal.style.display = "block";
        document.getElementById("info").innerHTML = nome + " infelizmente você não poderá participar pois tem " + idade + " anos";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}