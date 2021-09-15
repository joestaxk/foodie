import { $get, $on } from "./document";
export default class foodieFunction {
    pageGreeting() {
        // get time
        const greetings = ['Good morning', 'Good Afternoon', 'Good Evening']
        // icons for a day
        const icon = ['wb_cloudy', 'light_mode', 'nightlight_round', 'dark_mode'];

        var today = {
            greet: ''
        }
        // time function from the local computer
        const date = ( new Date() ).getHours();
        const on =  "We're avalaible now, we currently have!"
        const off =   "We're unavalaible now, but we currently have!"

        if (date  <= 12) {
            today.greet = greetings[0]
            today.icon  = icon[0]
            today.status = on
        } else if (date > 12 && date < 16) {
            today.greet = greetings[1]
            today.icon  = icon[1]
            today.status = on
        } else if (date > 16 && date <= 18) {
            today.greet = greetings[2]
            today.icon  = icon[2]
            today.status = on
        } else if (date > 18) {
            today.greet = greetings[2]
            today.icon  = icon[3]
            today.status = off
        }

        return today
    }

    scrollThroughBtn() {
        // find btn
        $on('click', document.body, THISevent, 'once')

        function THISevent(ev) {
            const tar = ev.target; 
            var element = $get('.feeds')
            if (tar.id === 't_right') {
                element.scrollBy({
                    top: 0,
                    left: parseInt(element.clientWidth) ,
                    behaviour: 'smooth'
                })
            } else if (tar.id === 't_left') {
                element.scrollBy({
                    top: 0,
                    left: -element.offsetWidth,
                    behaviour: 'smooth'
                })
            }
        }
    }

    removeAnglebtnOnMoibile() {
        const mobile = navigator.platform;

        if (!/^(linux|win|mac)/i.test(mobile)) {
            $get('.btnAngle').remove()
        }
    }

    init() {
        return {
            pageGreeting: this.pageGreeting(),
            scrollBtn: this.scrollThroughBtn(),
            removeAnglebtn: this.removeAnglebtnOnMoibile()
        }
    }
}