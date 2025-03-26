document.addEventListener('DOMContentLoaded', function () {
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');
    const profitValue = document.getElementById('profitValue');
    const scalePath = document.getElementById('scalePath');
    const roundEdge = document.getElementById('roundEdge');


    const positions = {
        33: { x: 228, y: 35 },
        66: { x: 456, y: 33 }
    };


    function resetGradient() {
        scalePath.setAttribute('fill', '#303030');
        roundEdge.style.display = 'none';
    }

    checkbox1.addEventListener('change', function () {
        if (this.checked) {
            checkbox2.checked = false;
            profitValue.textContent = '5%';
            scalePath.setAttribute('fill', 'url(#gradient1)');


            roundEdge.setAttribute('cx', positions[33].x);
            roundEdge.setAttribute('cy', positions[33].y);
            roundEdge.style.display = 'block';
        } else {

            if (!checkbox2.checked) {
                resetGradient();
            }
        }
    });

    checkbox2.addEventListener('change', function () {
        if (this.checked) {
            checkbox1.checked = false;
            profitValue.textContent = '10%';
            scalePath.setAttribute('fill', 'url(#gradient2)');

            roundEdge.setAttribute('cx', positions[66].x);
            roundEdge.setAttribute('cy', positions[66].y);
            roundEdge.style.display = 'block';
        } else {

            if (!checkbox1.checked) {
                resetGradient();
            }
        }
    });
});



