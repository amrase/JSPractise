// Budget Controller
var budgetController = (function(){
    //function constructure
    let Expense = function(id,description,value){
            this.id = id;
            this.description = description;
            this.value = value;
    };

    let Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp:[],
            inc:[],

        },
        totals: {
            exp : 0,
            inc : 0
        }
    }


    return {
        addItem : function(type,description,value){
            let newItem,ID ;
            let dt = new Date().getTime();
            // Generate a UUID 
            ID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });

        //    ID = data.allItems[type][data.allItems[type].length -1].id + 1;

            if(type === 'exp'){
                newItem = new Expense(ID,description,value);
            }
            else if( type==='inc'){
                newItem = new Income(ID,description,value);
            }
            data.allItems[type].push(newItem);
            
            return newItem;
            
        }
    };

})();


//UI Controller 
var UIController = (function(){
        let DOMStrings =  {
            inputType : '.add__type',
            addDecript :'.add__description',
            addValue : '.add__value',
            addButton : '.add__btn',
            incomeContainer : '.income__list',
            expenseContainer : '.expenses__list'
        }
        return {
            getInput : function(){
                return {
                    type : document.querySelector(DOMStrings.inputType).value ,// will be inc or exp
                    addDecript : document.querySelector(DOMStrings.addDecript).value ,
                    addValue : document.querySelector(DOMStrings.addValue).value 
                }
            },

            addListItem: function(obj,type){
                 let html,newHTML,element;
                    

                   //create html string with placeholder text;
                   if( type === 'inc'){
                        element = DOMStrings.incomeContainer ;
                        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                   }
                   else if( type ==='exp'){
                       element = DOMStrings.expenseContainer;
                       html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                   }
                   // replace the placeholder text with actual data
                   newHTML = html.replace('%id%',obj.id);
                   newHTML = newHTML.replace('%description%',obj.description);
                   newHTML = newHTML.replace('%value%',obj.value);
           
                   // insert the html into the dom
                   document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
                  
            },

            clearFields : function(){
                let fields,fieldsArray ;
                fields = document.querySelectorAll(DOMStrings.addDecript + ', ' + DOMStrings.addValue)
                fieldsArray = Array.prototype.slice(fields)

                fieldsArray.forEach(function(current,index,array){

                    })           
                 },

            getDOMStrings : function(){
                return DOMStrings;
            }
        }
})()


// Global App Controller
var controller = (function(budgeCtrl,UICtrl){

    //function for setting up eventListeners
    let setupEventListeners = function(){
        let DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.addButton).addEventListener('click',ctrlAddItem)

        document.addEventListener('keypress',(event)=>{
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        })

    }
    
    var ctrlAddItem = function(){
        let input ,newItem;

       //Get the input field data
       input = UICtrl.getInput();

       //Add the item to the budget controller
       newItem = budgeCtrl.addItem(input.type,input.addDecript,input.addValue);

       // add the item to the UI
       UICtrl.addListItem(newItem,input.type);
       UICtrl.clearFields();
       // Calculate the budget  

       // Display the budget on the UI
    }

    return {
        init: function(){
            console.log('Started')
            setupEventListeners();
        }
    };


})(budgetController,UIController)


//Application starting
controller.init();

