export const createAction = (type, payload) => {
    if (!type) {
        console.error('Action type is missing');
        return;
    }

    return { type, payload };
};