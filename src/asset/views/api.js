import api from "../../api.json"

export default class Foodie {

    Front_gallary(day) {
        const gallary = api.banner.gallary;

        var today = {};

        switch (day) {
            case 'sunday':
                today = gallary.breakfast
                break;
            case 'monday':
                today = gallary.tomatorice
                break;
            case "tuesday":
                today = gallary.cake;
                break;
            case 'wednesday':
                today = gallary.coffee;
                break;
            case 'thursday':
                today = gallary.soup;
                break;
            case 'friday':
                today = gallary.pizza;
                break;
            case 'saturday':
                today = gallary.meat;
                break;
            default:
                today = gallary.drink;
                break;
        }

        if (typeof today === 'object') {
            return today;
        }
    }

    SetGallaryDisplayDay() {
        const foodie = this.Front_gallary;

        const days = [
            'sunday', 'monday', 'tuesday', 'wednesday',
            'thursday', 'friday', 'saturday',
        ]

        // initiate date based on local computer;
        const Day = days [ (new Date()).getDay() ]; // days of the week

        const newToday = foodie.call(null, Day);
        // restructure Object;

        var Obj = {
            img:   '', // only one random img,
            title: '',
            icon:  '',
        }

        const particularObj = newToday; // pick the object property name
        const randomizeImg  = Array.isArray( particularObj.img )  ? Math.floor(Math.random() * particularObj.img.length) :  null;
        Obj.img = Array.isArray(particularObj.img) ? particularObj.img[randomizeImg] : particularObj.img;

        // title and icon
        Obj.title = particularObj.title;
        Obj.icon  = particularObj.icon;

        return Obj;
    }

    RenderAvailaibility() {
        const ArrAvailaible = api.availability;
        return ArrAvailaible;
    }
}