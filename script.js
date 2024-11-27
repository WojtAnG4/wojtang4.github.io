function showEquipmentOptions() {
    document.getElementById('equipment-options').style.display = 'block';
}

function showDetails(option) {
    let detailsText = '';
    
    if (option === 'laptop') {
        detailsText = 'lenovo IdeaPad Slim 3 | AMD Ryzen 5 5500U | 8 GB DDR4 | 512GB SSD | W11';
    } else if (option === 'pc') {
        detailsText = 'GA-MA78LM-S2H | AMD Athlon II X2 240 | 3 GB DDR2 | 230GB HDD | W7';
    }

    document.getElementById('equipment-details').style.display = 'block';
    document.getElementById('details-text').innerText = detailsText;
}

function showLinks() {
    document.getElementById('links').style.display = 'block';
}
