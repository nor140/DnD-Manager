window.onload = function() {
    document.querySelector('.character-wrapper').addEventListener('click', function(){
        document.querySelector('.characters').insertAdjacentHTML('afterbegin', `
        <div class="character-wrapper">
            <input class='name' type="text" name="input">
        </div>
        `);
    });
 }