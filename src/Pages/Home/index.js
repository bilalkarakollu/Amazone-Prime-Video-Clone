import React, { useEffect } from 'react';
import AmzOrginals from '../../Layouts/AmzOrginals'
import Recommended from '../../Layouts/Recommended'
import RecommendedTV from '../../Layouts/RecommendedTV'
import TopMovies from '../../Layouts/TopMovies'
import TopTv from '../../Layouts/TopTV'
export default function Index() {

    useEffect(() => {
        function isScrollEnd(container) {
            return Math.floor(container.scrollLeft) + container.offsetWidth === container.scrollWidth
        }
        function isScrollBegin(container) {
            return container.scrollLeft === 0
        }
        function hasHorizontalScroll(container) {
            return container.scrollWidth > container.offsetWidth
        }
        function scrollControl(scrollable, container) {

            // yatay scroll var ise
            if (hasHorizontalScroll(container)) {

                // scroll başlangıçta ise
                if (isScrollBegin(container)) {
                    scrollable.classList.remove('left')
                    // prev.setAttribute('disabled', 'disabled')
                } else {
                    scrollable.classList.add('left')
                    // prev.removeAttribute('disabled')
                }

                // scroll sonda ise
                if (isScrollEnd(container)) {
                    scrollable.classList.remove('right')
                    // next.setAttribute('disabled', 'disabled')
                } else {
                    scrollable.classList.add('right')
                    // next.removeAttribute('disabled')
                }

            }

        }

        const scrollables = document.querySelectorAll('.scrollable-content')

        scrollables.forEach(scrollable => {
            const container = scrollable.querySelector('.scrollable-inner'),
                next = scrollable.querySelector('.next'),
                prev = scrollable.querySelector('.prev')

            next.addEventListener('click', () => {
                if (isScrollEnd(container)) {
                    container.scrollLeft = 0
                }
                container.scrollLeft += container.offsetWidth - 100
            })
            prev.addEventListener('click', () => {
                if (isScrollBegin(container)) {
                    container.scrollLeft = container.scrollWidth
                }
                container.scrollLeft -= container.offsetWidth - 100
            })
            container.addEventListener('scroll', () => scrollControl(scrollable, container))
            new ResizeObserver(() => scrollControl(scrollable, container)).observe(container)
        })
    }, [0])

    return (
        <div className={'main'}>
            <div className='h-80 px-48 mb-6'>
                <div className='bg-white h-full'>

                </div>
            </div>
            <AmzOrginals />
            <Recommended />
            <TopMovies />
            <RecommendedTV />
            <TopTv />

        </div>
    )
}
