document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const clickElement = item.querySelector('.questions__click');
        const content = item.querySelector('.accordion-content');

        clickElement.addEventListener('click', function (e) {
            e.preventDefault();


            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                }
            });


            item.classList.toggle('active');
            content.classList.toggle('active');
        });
    });


    document.addEventListener('click', function (e) {
        if (!e.target.closest('.accordion-item')) {
            accordionItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').classList.remove('active');
            });
        }
    });
});