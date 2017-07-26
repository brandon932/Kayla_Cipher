// jquery test
$(document).on('ready', () => {
  console.log('sanity check!');
});

 $('#Calculate').on('click', function(e){
   e.preventDefault();
   console.log($('#codeString').val());
 });
// es6 test

const phrase1 = "anr'p bngq pnn kdga cnvg kfwa jwc ftdynaf";
var translati = "-o-'t_-o--_too_----_-o--_----_---_----o--";

const PI = 3.14;

// mocha test
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
