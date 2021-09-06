"strict mode";


window.onload = function() {

let resultKq = "";
let operator = "";
const arrNumber = [];
let displayKq = document.getElementById('display-ketqua') // value display
let valueButton = document.getElementsByClassName('button-cal');

//Hàm nhập/xuất file
function displayCalcu(){
    for(let i of valueButton){
        i.addEventListener('click', function(){
            if(displayKq.value == "0"){
                resultKq = "0";
                displayKq.value = "";
            }; if(i.value == "." && displayKq.value == ""){
                resultKq = 0;
                displayKq.value = "0";
            }
            if(i.value != "+" && i.value != "-" && i.value != "x" && i.value != "÷" && i.value != "%" && i.value != "^"){
                //Gán kết quả vào result để đẩy vào mảng
                resultKq += i.value;
                //Hiển thị kết quả ra màn hình
                displayKq.value = displayKq.value + i.value;
                console.log(displayKq.value);
                console.log(arrNumber);
                console.log("result: " + resultKq);
                console.log("operator: " + operator);   
            } 

            if((i.value == "+" || i.value == "-" || i.value == "x" || i.value == "÷" || i.value == "%" || i.value == "^") && count == 0){
                operator = i.value;
                arrNumber.push(resultKq);
                resultKq = "";
                arrNumber.push(operator);
                displayKq.value = displayKq.value + i.value;
                console.log(resultKq);
                console.log(arrNumber);
            } else if((i.value == "+" || i.value == "-" || i.value == "x" || i.value == "÷" || i.value == "%" || i.value == "^") && count == 1){
                operator = i.value;
                //arrNumber.push(resultKq);
                resultKq = "";
                //arrNumber.push(operator);
                displayKq.value = displayKq.value + i.value;
                console.log(resultKq);
                console.log(arrNumber);
            }
        }
        )
    }
}

function calcuKQ(value, a, b, index){
    switch (value) {
        case "+":
            displayKq.value = parseFloat(a) + parseFloat(b);
            arrNumber.splice(index-1, 3, displayKq.value);
            operator = value;
            count = 1;
                break;
        case "-":
            displayKq.value = parseFloat(a) - parseFloat(b);
            arrNumber.splice(index-1, 3, displayKq.value);
            operator = value;
            count = 1;
                break;
        case "x":
            displayKq.value = parseFloat(a) * parseFloat(b);
            arrNumber.splice(index-1, 3, displayKq.value);
            operator = value;
            count = 1;
                break;
        case "÷":
            displayKq.value = parseFloat(a) / parseFloat(b);
            arrNumber.splice(index-1, 3, displayKq.value);
            operator = value;
            count = 1;
                break;
        case "%":
            displayKq.value = parseFloat(a) / 100;
            arrNumber.splice(index-1, 3, displayKq.value);
            //operator = value;
            count = 1;
                break;
        case "^":
            displayKq.value = parseFloat(a)**parseFloat(b);
            arrNumber.splice(index-1, 3, displayKq.value);
            //operator = value;
            count = 1;
                break;
    }
}

let count = 0;

function tinhKetQua(){
    let equal = document.getElementById('equal');
    equal.addEventListener('click', function(){
        if (count == 0){
            arrNumber.push(resultKq);
            console.log(arrNumber);
            if (arrNumber[arrNumber.length - 1] == ""){
                arrNumber[arrNumber.length - 1] = arrNumber[0];
            }
            count = 1; //count = 1  de khong bi loop infinity khi an nhieu hon 1 dau "="
            while (arrNumber.length > 1 ){  // 
                for(let i = 0; i < arrNumber.length; i++){
                    //for(let j = 0; j < arrNumber.length; j++){
                        calcuKQ(arrNumber[i], arrNumber[i-1], arrNumber[i+1], i)
                        //arrNumber.splice(i-1, 3, displayKq.kq);
                        console.log(arrNumber);
                        console.log("count: " + count);
                        console.log("operator: " + operator);
                    //}
                };
            }
                
        
               
        }     
        else if (count == 1){
            // Không thể + - 3 4 số nếu dùng push kiểu này
                arrNumber.push(operator); //push operator de tinh ma chua lam duoc
                arrNumber.push(resultKq);
                console.log(arrNumber);
                if (arrNumber[arrNumber.length - 1] == ""){
                    arrNumber[arrNumber.length - 1] = arrNumber[0];
                }
                //while (arrNumber.length > 1){
                    for(let i = 0; i < arrNumber.length; i++){
                        //for(let j = 0; j < arrNumber.length; j++){
                            calcuKQ(arrNumber[i], arrNumber[i-1], arrNumber[i+1], i)
                            //arrNumber.splice(i-1, 3, displayKq.kq);
                            console.log(arrNumber);
                            console.log("count: " + count);
                            console.log("operator: " + operator);
                        //}
                    };
                //}
                console.log(arrNumber);
            };
        } 
    );
}

function allClear(){
    let buttonClear = document.getElementById('clearAll')
    buttonClear.addEventListener('click', function(){
        operator = "";
        resultKq = "";
        displayKq.value = "";
        arrNumber.splice(0,arrNumber.length);
        console.log(arrNumber);
        count = 0;
    });
}

// Gọi hàm
displayCalcu();
tinhKetQua();
//addValueToArr();
allClear();
};