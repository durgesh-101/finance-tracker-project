let ProfitorLoss=0;
let  transactionArr=[];
let minSaving=prompt("enter the minimum saving amount");
let loss;

function update_income(){
let incomeElement=document.querySelector('.income span');
let expenseElement=document.querySelector('.expense span');
let profitElement=document.querySelector('.profit span');
let savingElement=document.querySelector('.saving span');
let transactionlist=document.querySelector('.content ul');
let itemdiscription =document.querySelector('#description');
let discriptiondData=itemdiscription.value;
let amountElement=document.getElementById('amount');
let amountData=parseFloat(amountElement.value);

if(discriptiondData==""|| isNaN(amountData)){
alert("Enter a valid description and amount");
return;
}

if(amountData<0){
    let expense=parseFloat(expenseElement.textContent);
    expense+=amountData;
    expenseElement.textContent=expense.toFixed(2);
}
else{
    let income=parseFloat(incomeElement.textContent);
    income+=amountData;
    incomeElement.textContent=income.toFixed(2);
}
ProfitorLoss+=amountData;
if(ProfitorLoss>0){
    profitElement.style.color='green';
}
else{
    profitElement.style.color='red';

}
if(ProfitorLoss>minSaving){
    savingElement.style.color='green';
    savingElement.textContent=ProfitorLoss.toFixed(2);
}
else{
    savingElement.style.color='red';
    loss=minSaving-ProfitorLoss;
    savingElement.textContent=loss.toFixed(2);

}
profitElement.textContent=ProfitorLoss.toFixed(2); 
let amountData2=discriptiondData+"---> "+amountData;
itemdiscription.value=" ";
amountElement.value=" ";
transactionArr.push(amountData2);
transactionlist.innerHTML="";
for(let i=0;i<transactionArr.length;i++){
    let listItem=document.createElement('li');
    listItem.textContent=transactionArr[i];
    transactionlist.appendChild(listItem);
}
}
function reset(){
let incomeElement=document.querySelector('.income span');
let expenseElement=document.querySelector('.expense span');
let profitElement=document.querySelector('.profit span');
let savingElement=document.querySelector('.saving span');
let transactionlist=document.querySelector('.content ul');
transactionlist.innerHTML="";
incomeElement.textContent='00.0';
expenseElement.textContent='00.0';
profitElement.textContent='00.0';
savingElement.textContent='00.0';
ProfitorLoss=0;
transactionArr=[]
}


