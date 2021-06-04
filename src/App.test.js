

 const addBands = data => ({
    type: 'ADD_BANDS',
    payload: data
});
describe('actions', () => {
    it('should trigger an action to add data to app local memore', () => {
        const text = 'data'
        const expectedResult = {
            type: 'ADD_BANDS',
            payload: text
        }
        expect(addBands(text)).toEqual(expectedResult)
    })
})