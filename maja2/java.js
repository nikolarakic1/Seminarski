const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.dataset.item;
        const itemPrice = item.querySelector('td:nth-child(2)').innerText;

        document.getElementById('selected-item-name').innerText = itemName;
        document.getElementById('selected-item-price').innerText = `Cena: ${itemPrice}`;
        document.getElementById('selected-item').classList.remove('hidden');
    });
});

var map = L.map('map').setView([45.4845, 20.6699], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = L.marker([45.4845, 20.6699]).addTo(map);
marker.bindPopup("<b>Srpski Itebej, Serbia</b>").openPopup();



document.addEventListener('DOMContentLoaded', function() {
    var showMoreBtn = document.getElementById('show-more-btn');
    var additionalText = document.getElementById('additional-text');

    showMoreBtn.addEventListener('click', function() {
        if (additionalText.classList.contains('hidden')) {
            additionalText.classList.remove('hidden');
            showMoreBtn.innerText = 'Zatvori';
        } else {
            additionalText.classList.add('hidden');
            showMoreBtn.innerText = 'Prikaži više';
        }
    });
});




function poruci(){
  alert("Uspešno ste poručili kafu");
}

document.getElementById('submit-button').addEventListener('click', () => {
  const checkbox = document.getElementById('feedback-checkbox');
  if (checkbox.checked) {
      alert('Hvala na recenziji!');
  } else {
      alert('Molimo vas da označite "Hvala na recenziji" pre nego što potvrdite.');
  }
});

function recenzija(){
  alert("Hvala vam na recenziji");
}
