
window.onload = function() {
    document.querySelector('.character-wrapper').addEventListener('click', function(){
        document.querySelector('.characters').insertAdjacentHTML('afterbegin', `
        <div class="character-wrapper">
        <p class="name-raw">имя</p>
            <div  contenteditable="true" data-placeholder="Введите текст"></div>
        <p class="name-raw">Внешность</p>
        <div  contenteditable="true" data-placeholder="Введите текст"></div>
        <p class="name-raw">Характер</p>
        <div  contenteditable="true" data-placeholder='Введите текст'></div>
        <p class="name-raw">Предыстория</p>
        <div  contenteditable="true" data-placeholder='Введите текст'></div>
    </div>
        `);
    });
    
}   
function upload(event){
    console.log(event);
    event.target.closest('.parent').querySelector('.child').insertAdjacentHTML('afterbegin', `
    <div class="parent">
        <div class="start"></div>
        <div class="location" >
            <div class="loc-text" contenteditable="true" data-placeholder="событие"></div>
        </div>
        <div class="line"></div>
        <div class="child">
            
            <div class="location-plus" >
                <img src="svg/plus-svgrepo-com.svg" alt="plus" class="loc-plus-img" onclick="upload(event)">
            </div>
        </div>
    </div>
    `);
}