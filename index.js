let number = null;
do{
    number = +prompt("Nhập vào một số từ 1 đến 10 ");
}while (number < 1 || number > 10);
alert("Số bạn vừa nhập là " + number);