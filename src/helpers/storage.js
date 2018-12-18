const getDBInstance = (name) => {
    const get = async () => {
        return localStorage && localStorage.getItem(name) 
            ? JSON.parse(localStorage.getItem(name))
            : []
    }

    const add = async item => {
        const items = await get();
        localStorage.setItem(name, JSON.stringify([...items, item]))

        return item.id;
    }

    const find = async id => {
        const items = await get();

        return items.filter(element => element.id === id)[0];
    }

    const remove = async id => {
        const items = await get();
        const listAfterRemove = items.filter(element => element.id !== id);

        return localStorage.setItem(name, JSON.stringify(listAfterRemove))             
    }

    const edit = async (id, item) => {
        const items = await get();
        const objIndex = items.findIndex((obj => obj.id === id));
        const newArr = [...items];

        newArr[objIndex].title = item.title
        newArr[objIndex].description = item.description
  
        return localStorage.setItem(name, JSON.stringify(newArr))
    }

    return {
        get,
        add,
        find,
        remove,
        edit
    }
}

export default getDBInstance;