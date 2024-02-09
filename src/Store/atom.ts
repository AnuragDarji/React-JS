import { atom, selector } from "recoil";

export const cardState = atom({
    key: 'item',
    default: 0,
})

export const openLogin = atom({
    key: 'openLogin',
    default: false,
})

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({get}) =>{
        const cart = get(cardState);
        return cart 
    }
})