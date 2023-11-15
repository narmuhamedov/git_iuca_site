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



