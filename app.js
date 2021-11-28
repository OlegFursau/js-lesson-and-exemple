const btn = document.querySelectorAll('.tabs__nav-btn'); //выборка селектора кнопак всех
const links = document.querySelectorAll('.tabs__item'); //выборка селектора ссылок всех


btn.forEach(function(item) { // выбираем правило к каждой из кнопок 

    item.addEventListener('click', function() { // вешаем слушатель событий 
        //let fistBtn = item;
        let tab = item.getAttribute('data-tab'); // переменные с выбором по ID
        let link = document.querySelector(tab); // переменные с выбором каждой ссылки по id

        if (!link.classList.contains('active')) { // если уже есть актив тогда 
            btn.forEach(function(item) {
                item.classList.remove('active'); // убираем класс у кнопки с помощью функции item 
            });

            links.forEach(function(item) {
                item.classList.remove('active'); // убираем класс у links с помощью функции item 
            });




            item.classList.add('active'); // add class btn 
            link.classList.add('active'); // add class links
        }



    });
});