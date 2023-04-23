const openMenuBtn = document.querySelector('.left-bar__open_menu-btn');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const menu = document.querySelector('.menu');
const bookingTable = document.querySelector('.booking_table');
const closeBookingTableBtn = document.querySelector('.booking_table__close-btn');
const bookingTableBtn = document.querySelectorAll('.booking_table-btn');


closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('menu--visibled');
    document.body.classList.remove('body--noscrolling');
});

openMenuBtn.addEventListener('click', function() {
    menu.classList.add('menu--visibled');
    document.body.classList.add('body--noscrolling');
});



closeBookingTableBtn.addEventListener('click', function(){
    bookingTable.classList.remove('booking_table--visibled');
    document.body.classList.remove('body--noscrolling');
});

bookingTableBtn.forEach(function(elem) {
    elem.addEventListener('click', function() {
        bookingTable.classList.add('booking_table--visibled');
        document.body.classList.add('body--noscrolling');
    })
})