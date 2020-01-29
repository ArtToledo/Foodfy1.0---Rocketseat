const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

//Para cada cartao encontrado em cards
for (let card of cards) {
    card.addEventListener('click', function() {
        let imageId = card.getAttribute('id');
        let titleImage = card.querySelector('.titulo').textContent;
        let creatorFood = card.querySelector('.card_info_creator').textContent;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('.modal-content img').src = `./assests/${imageId}`;
        modalOverlay.querySelector('.title').textContent = `${titleImage}`;
        modalOverlay.querySelector('.creator').textContent = `${creatorFood}`;
    });
}

document.querySelector('.modalInfos button').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('.modal-content img').src = '';
    modalOverlay.querySelector('.title').textContent = '';
    modalOverlay.querySelector('.creator').textContent = '';
});