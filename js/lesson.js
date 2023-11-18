//Phone Checker

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (reqExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK';
        phoneSpan.style.color = 'green';
    }else {
        phoneSpan.innerHTML = 'NOT OK';
        phoneSpan.style.color = 'red';
    }
})


//TAB SLOEDER

const tabsContentCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParents = document.querySelector('.tab_content_items')

const hightTabsContentCards = ()=>{
    tabsContentCards.forEach((tabContentCard)=>{
        tabContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement=0)=>{
    tabsContentCards[indexElement].style.display='block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hightTabsContentCards()
showTabsContentCards()

tabsItemsParents.onclick = (event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabsItems.forEach((tabItem, tabItemIndex )=>{
            if (event.target===tabItem){
                hightTabsContentCards()
                showTabsContentCards(tabItemIndex)
            }
        })
    }
}

let currentIndex = 0; // первая вкладка
let intervalId; // Переменная для хранения иинтервала

// Функция для автоматического переключения
const startAutoSlider = () => {
    intervalId = setInterval(() => {
        hightTabsContentCards();
        showTabsContentCards(currentIndex);
        currentIndex = (currentIndex + 1) % tabsItems.length; // Переключение на следующую вкладку
    }, 3000); // Интервал - каждые 3 секунды
};

// Запуск автослайда
startAutoSlider();

// Остановка автослайда при клике на вкладку
tabsItemsParents.onclick = (event) => {
    clearInterval(intervalId); // Остановка интервала при клике на вкладку
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hightTabsContentCards();
                showTabsContentCards(tabItemIndex);
                currentIndex = tabItemIndex; // Обновляем текущий индекс
                startAutoSlider(); // После клика запускаем автоматический слайдер снова
            }
        });
    }
};
