// Budget Controller
var budgetController = (function(){

})();


//UI Controller 
var UIController = (function(){

})()


// Global App Controller
var controller = (function(budgeCtrl,UICtrl){

    var ctrlAddItem = function(){
       //Get the input field data
       let descrInput = document.querySelector('.add__description')
       let valueInput = document.querySelector('.add__value')
       console.log(descrInput)
       //Add the item to the budget controller
       // add the item to the UI
       // Calculate the budget  
       // Display the budget on the UI
    }


    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)

    document.addEventListener('keypress',(event)=>{
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    })
 
})(budgetController,UIController)

