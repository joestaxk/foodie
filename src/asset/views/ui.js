import foodie from './api';
import {$get, $on} from './document'
import foodieFunction from './functions'

class userInterface {
    loadpage() {
        this.loadGreetings()
        this.loadHeroBanner();
        this.loadAvalaibility()
        this.showNavFn();
    }

    loadHeroBanner() {
        const food = ( new foodie() ).SetGallaryDisplayDay()
        const banner = $get('.carousel');
        const textBranding = `
            <h2>${food.title} <span class="material-icons">${food.icon}</span> </h2>
            <div class="material-icons">
                arrow_circle_right
            </div>
        `
        // css styling here!
        banner.innerHTML     =  textBranding;
        banner.style.cssText = `background-image: linear-gradient(90deg,rgba(44, 42, 42, 0.288) 40%, rgba(37, 37, 37, 0.399)), url(${/^https:*/.test(food.img) ? food.img : `../img/${food.img}`})`;
    }

    loadAvalaibility() {
        const ArrAvailaible = ( new foodie() ).RenderAvailaibility();

        ArrAvailaible.forEach(ObjData => {
            var htmlMarkup = `
                <div class="meal">
                    <div class="img">
                        <img loading="lazy" src=${'../img/' + ObjData.img} alt=${ObjData.title}>
                        <h4 class="title">${ObjData.title}| <small>${ObjData.price}/plate</small></h4>
                    </div>
                    <div class="avail">
                        <label>availability: </label>
                        <div class="progress">
                            <div class="text ${readPercentToColor(ObjData.percentage)}">${ObjData.percentage}%</div>
                        </div>
                    </div>
                    <div class="checkout">
                        <span class="cart">add to cart: </span>
                        <input type="checkbox" name="checkbox" id="">
                    </div>
                </div>`
            
            $get('.feeds').insertAdjacentHTML('beforeend', htmlMarkup)
        })

        $get(null, '.meal').forEach(el => {
            const widths = el.querySelector('.text');

            widths.style.cssText = `width: 0%`
        })

        function readPercentToColor(percent) {
            const per = parseInt(percent);
            var colorClass = "";      

            if (per > 69 && per < 99) {
                colorClass = 'green'
            } else if (per > 49 && per < 68) {
                colorClass = 'orange'
            } else {
                colorClass = 'red'
            }

            return colorClass;
        }
    }

    loadGreetings() {
        const newGreeting = new foodieFunction()
        const today = newGreeting.init();
        const htmlMarkup = `
        <h2>${today.pageGreeting.greet}<span class="material-icons">${today.pageGreeting.icon}</span> </h2>
        <span>Available meal for ${today.pageGreeting.greet}</span>
        `
        $get('.greetings').innerHTML = htmlMarkup
        $get('.opening').textContent = today.pageGreeting.status
    }

    showNavFn() {
        const closeIcon = $get("[data-close]");
        const openIcon = $get("[data-show]");

        [closeIcon, openIcon].forEach((el, i) => {
            $on('click', el, function () {
                const status1 = el.dataset.close;
                const status2 = el.dataset.show;

                
                if (status1) { // when click close icon
                    // show open icon
                    closeIcon.classList.add('none')
                    // remove open
                    openIcon.classList.remove('none')

                    // show
                    $get('.nav').classList.remove('none')
                    // hide scroll
                    $get('body').style.cssText = "overflow-y: hidden"
                    // animate nav opacit - slow entry
                    $get('.nav').animate([
                        {opacity: 0},
                        {opacity: 1}
                    ], {duration: 250})
                    
                } else if (status2) { // when click open
                    // remove close icon
                    closeIcon.classList.remove('none')
                    // show open icon
                    openIcon.classList.add('none')
                    // unshow nav
                    $get('.nav').classList.add('none')
                    // show scroll bar
                    $get('body').style.cssText = "overflow-y: scroll"
                }
            })
        })
    }
}

export default (new userInterface()).loadpage()