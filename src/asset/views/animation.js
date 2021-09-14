import {$get} from './document'

class animation {
    /**
     * @param {HTMLElement} observe 
     */
    static observeGallery() {
        const availEle = $get('.availaible');
        const option = {
            rootMargin: "10%",
            threshold: 1
        }
        const observer = new IntersectionObserver(function observeCallback(entry, observe) {
            entry.forEach(entries => {
                if (!entries.isIntersecting) {
                    return;
                }

                const targetElement = entries.target;
    
                targetElement.querySelectorAll('.meal').forEach(el => {
                    const widths =  el.querySelector('.text')
                    widths.style.cssText = `transition: .5s; width: ${widths.textContent}`
                })

                // observe.unobserve(entries.target)
            })
        }, option)
        observer.observe(availEle)
    }

    static observeService() {
        const availEle = $get(null, '.post');
        const option = {
            rootMargin: "-10px",
            threshold: 0
        }
        const observer = new IntersectionObserver(function observeCallback(entry, observe) {
            entry.forEach(entries => {
                if (!entries.isIntersecting) {
                    return
                }
                entries.target.querySelector('.postImage').classList.add('postImageR')
                entries.target.querySelector('.postText').classList.add('postTextR')
                entries.target.scrollTo({
                    top: -200,
                    left: 0,
                    behavior: 'smooth'
                  });
            })
            // availEle.forEach(el => {
            //     observe.unobserve(el)
            // })
        }, option)

        availEle.forEach(el => {
            observer.observe(el)
        })
    }

    static init () {
        animation.observeGallery()
        animation.observeService()
    }
}

export default animation.init()