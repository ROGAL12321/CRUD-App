import getDBInstance from './storage';

describe('Testing Database', () => {
    const db = getDBInstance('recipes');

    it('get recipes from DB', async () => {    
        const elements = await db.get();
        expect(elements).toEqual([])
    })

    it('save recipe to DB', async () => {
        const newRecipe = {
            id: 1,
            title: 'hello',
            description: 'testing2',
            icon: 'some-icon.png'
        }

        await db.add(newRecipe);
        const elementsAfterAdd = await db.get();
        expect(elementsAfterAdd[0]).toEqual(newRecipe)
    })

    it('edit recipe from DB', async () => {
        const editedItem = {
            id: 1,
            title: 'newhello',
            description: 'newtesting2',
            icon: 'some-icon.png'
        }

        await db.edit(editedItem.id, editedItem);
        const elementsAfterEdit = await db.get();
        expect(elementsAfterEdit[0]).toEqual(editedItem);
    })

    it('find recipe from DB', async () => {
        const itemId = 1;
        const newItemID = await db.find(itemId);

        expect(newItemID.title).toEqual('newhello');
    })

    it('remove recipe from DB', async () => {
        const itemId = 1;
        await db.remove(itemId);
        const recipesAfterRemove = await db.get();

        expect(recipesAfterRemove).toEqual([]);
    })
  })