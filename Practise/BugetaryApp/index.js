

// Budget Controller 
let budgetController = (function(){

    let Expense = function(id,descritpion,value){
        this.id = id;
        this.descritpion = descritpion;
        this.value = value;
    };

    let Income = function(id,descritpion,value){
        this.id = id;
        this.descritpion = descritpion ;
        this.value = value;
    };




    let data = {
            allItems : {
                exp:[],
                inc:[]
            },
            totals :{
                exp :0,
                inc :0
            }
    };

    return {
        addItem : function(type,descritpion,value){

            let newItem,ID ;
            var dt = new Date().getTime();
            ID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
            if (type == 'exp'){
                newItem =  new Expense(ID,descritpion,value)
            }
            else if (type == 'inc'){
                newItem = new Income(ID,descritpion,value);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },

    }
})();

// User Interface Controller
let UIController = (function(){
    let DOMStrings = {
        addType  : ".add__type",
        addDescription : ".add__description",
        addNumber : ".add__value",
        addButton : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer : '.expense__list'
    }

    return {
        getInput : function(){
            return {
                addType : document.querySelector(DOMStrings.addType).value,
                addDescription  :document.querySelector(DOMStrings.addDescription).value,
                addNumber : document.querySelector(DOMStrings.addNumber).value
    
            }   
        },
        addListItem: function(obj,type){
            // Create HTML string with placeholder text
            let html,newHTML,element;
            if (type == 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div> <div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i> </button></div> </div></div>';
            }
            else if(type=='exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-0"> <div class="item__description">Apartment rent</div> <div class="right clearfix"> <div class="item__value">- 900.00</div><div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>';
            }
            // Replace the placeholder with some actual data
            newHTML = html.replace('%id%',obj.id)
            newHTML = newHTML.replace('%desription%',obj.descritpion)
            newHTML = newHTML.replace('%value%',obj.value)
            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML)



        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    }

})();



//main controller
let controller  = (function(budgetCtrl,UICtrl){
        let input,newItem;
        let setupEventListeners  = () =>{
            let DOM  = UICtrl.getDOMStrings();
            document.querySelector(DOM.addButton).addEventListener("click",ctrAddItem);
            document.addEventListener("keypress",(event)=>{
               if ( event.keyCode ==13 || event.which===13){
                   ctrAddItem();
               }
            })
        }

        
        let ctrAddItem = () =>{
            // 1.get input data
            input = UICtrl.getInput();
            // 2.add item to budget controller
            newItem = budgetCtrl.addItem(input.addType,input.addDescription,input.addNumber)
            // 3.add new item to user interface
            UICtrl.addListItem(newItem,input.type)
            // 4.calculate the budget 
            // 5.display the budget
        
       
    }

    return {
        init : function(){
            console.log("App Started!")
            setupEventListeners();
        }};
   

})(budgetController,UIController);

controller.init();