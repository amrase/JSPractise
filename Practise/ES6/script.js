let box6 = {
    color : 'green',
    position : 1,
    clickMe : function() {
        document.querySelector('.green').addEventListener('click',()=>{
            let str = `This box number is `+ this.position + `and it is` + this.color;
            alert(str)
        })
    }
}

box6.clickMe();

const boxes = document.querySelectorAll('.box')
const boxArr6 = Array.from(boxes);
boxArr6.forEach(cur => cur.style.backgroundColor = 'blue')