import {$get, $on} from './document'

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
                entries.target.scrollIntoView({behavior: "smooth"})
            })
        }, option)

        availEle.forEach(el => {
            observer.observe(el)
        })
    }
    static observeGalleries(){
        const gallary = $get(null, '.meal');
        const firstItem = gallary[0];
        const lastItem = gallary[gallary.length -1];

        const lAngle = $get('.availaible_btn_left');
        const rAngle = $get('.availaible_btn_right')
        const pAngle = $get('.btnAngle') //parent
        if (!pAngle) return;

        // FOR Left Angle
        const observeLastElement = new IntersectionObserver( function (entry, observe) {
            entry.forEach(entries => {
                if (!entries.isIntersecting) {
                    const btnHtml = `
                        <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>
                        <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>
                    `;
                    pAngle.innerHTML = btnHtml;
                }
            })
        }, { threshold: .75 })
        observeLastElement.observe(lastItem)


        const obs_LAST = new IntersectionObserver( function (entry, observe) {
            entry.forEach(entries => {
                if (entries.isIntersecting) {
                    const btnHtml = `
                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>
                    `;
                    pAngle.innerHTML = btnHtml;

                    if (rAngle) {
                        rAngle.remove()
                    }
                }
            })
        }, { threshold: .75 })
        obs_LAST.observe(lastItem)

        const observe_First = new IntersectionObserver( function (entry, observe) {
            entry.forEach(entries => {
                if (!entries.isIntersecting) {
                    const btnHtml = `
                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>
                    <div class="material-icons availaible_btn_right id="t_right">chevron_right</div>
                    `;

                    pAngle.innerHTML = btnHtml;
                }
            })
        }, { threshold: .75 })
        observe_First.observe(firstItem)

        const obs_First = new IntersectionObserver( function (entry, observe) {
            entry.forEach(entries => {
                if (!entries.isIntersecting) {
                    const btnHtml = `
                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>
                    <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>
                    `;

                    pAngle.innerHTML = btnHtml;
                }
                const btnHtml = `
                <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>
                `;
                pAngle.innerHTML = btnHtml;

                if (lAngle) {
                    lAngle.remove()
                }
            })
        }, { threshold: .75 })
        obs_First.observe(firstItem)
    }

    static init () {
        animation.observeGallery()
        animation.observeService()
        animation.observeGalleries()
    }
}

export default animation.init()