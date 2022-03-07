const btn_calculate = document.querySelector('.calculate-btn');
const result_box = document.querySelector('#result');
const notify_box = document.querySelector('#notification');
let check = false;


function showError(first_num, second_num) {
    if(!check)
        notify_box.innerText = 'Vui lòng chọn phép tính trước khi tính toán';
    else if(Number.isNaN(first_num) && Number.isNaN(second_num))
            notify_box.innerText = 'Vui lòng nhập cả hai số';
        else if(Number.isNaN(first_num))
                notify_box.innerText = 'Vui lòng nhập số thứ nhất';
            else if(Number.isNaN(second_num))
                    notify_box.innerText = 'Vui lòng nhập số thứ hai';
                else
                    notify_box.innerText = '';
}


// btn_calculate.addEventListener('click', (e) => {
//     // e.preventDefault();
//     const calculation = document.querySelectorAll('input[type="radio"]');
//     const first_num = Number.parseInt(document.querySelector('#first_num').value);
//     const second_num =  Number.parseInt(document.querySelector('#second_num').value);
    
//     calculation.forEach(item => {
//         if(item.checked) {
//             let cal = item.id;
//             let result;
//             check = true;
                   
//             if(!Number.isNaN(first_num) && !Number.isNaN(second_num))
//                 switch(cal)
//                 {
//                     case 'plus':
//                         result = first_num + second_num;
//                         break;
//                     case 'minus':
//                         result = first_num - second_num;
//                         break;
//                     case 'multi':
//                         result = first_num * second_num;
//                         break;
//                     case 'divide':
//                         result = first_num / second_num;
//                         break;
//                 }

//             result_box.value = result;

//         }
//     })

//     showError(first_num, second_num)
// })




