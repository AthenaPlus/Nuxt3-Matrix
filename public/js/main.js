const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 200;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - animItemHeight / animStart;
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    animItem.classList.remove('_active')
                }

            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        animOnScroll()
    }
