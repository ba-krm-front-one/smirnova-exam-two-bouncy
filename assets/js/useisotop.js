;(() => {
    function useIsotope(event) {
        let grid = document.querySelector('.ba-grid');
        let iso = new Isotope( grid, {
            itemSelector: '.ba-grid-item',
            masonry: {
                columnWidth: 50,
                gutter: 10,
                horizontalOrder: true,
                fitWidth: true
            }
        });

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            iso.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.ba-portfolio__item--active');
            if (activeBtn) {
                activeBtn.classList.remove('ba-portfolio__item--active');
            }
            this.classList.add('ba-portfolio__item--active');
        };


        document.querySelectorAll('.ba-portfolio__item').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });

        let activeBtn = document.querySelector('.ba-portfolio__item--active');

        applyFilterFromLink(activeBtn);

    }




    document.addEventListener('DOMContentLoaded', useIsotope);
})();
