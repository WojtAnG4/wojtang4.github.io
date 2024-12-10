function showEquipmentOptions() {
    document.getElementById('equipment-options').style.display = 'block';
}

function showDetails(option) {
    let detailsHtml = '';
    
    if (option === 'laptop') {
        detailsHtml = `
            <ul>
                <li><strong>OS:</strong> Windows 11 (Home)</li>
                <li><strong>CPU:</strong> AMD Ryzen 5 5500U</li>
                <li><strong>RAM:</strong> 8GB DDR4</li>
                <li><strong>GPU:</strong> integra</li>
                <li><strong>HDD:</strong> INTEL SSDPEKNW512GZL</li>
            </ul>`;
    } else if (option === 'pc') {
        detailsHtml = `
            <ul>
                <li><strong>OS:</strong> Windows 7 (Home Premium)</li>
                <li><strong>CPU:</strong> AMD Athlon II X2 240</li>
                <li><strong>RAM:</strong> 3GB DDR2</li>
                <li><strong>GPU:</strong> Geforce GT 240</li>
                <li><strong>HDD:</strong> SAMSUNG HD251HJ</li>
            </ul>`;
    }

    document.getElementById('equipment-details').style.display = 'block';
    document.getElementById('details-text').innerHTML = detailsHtml;
}

function showLinks() {
    document.getElementById('links').style.display = 'block';
}
