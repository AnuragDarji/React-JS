import { atom, selector } from 'recoil';

export const formState = atom({
    key: 'formState',
    default: {
        name: '',
        email: '',
    },
});

export const characterCountSelector = selector({
    key: 'characterCountSelector',
    get: ({get}) => {
        const form = get(formState);
        return form.name.length;
    }
})