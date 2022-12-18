const locationService = require('./locations.service')
const Location = require('./locations.model')

jest.mock('./locations.model')

describe('Locations findAll', () => {
    it('should call model find', async () => {
        Location.find.mockResolvedValue([1,2,3,4])
        expect(await locationService.findAll()).toEqual([1,2,3,4])
        expect(Location.find).toHaveBeenCalledTimes(1)
    })
})

describe('Locations findOne', () => {
    it('Should get a Location', async () => {
        const mockLocation = {
            _id: '6594654498efgdf56v4sdf6g54df', filmName: 'Jiji la Crevette',
        }
        Location.findById.mockResolvedValue(mockLocation)

        expect(await locationService.findOne('6594654498efgdf56v4sdf6g54df').toEqual(mockLocation))
        expect(Location.findOne).toHaveBeenCalledWith('6594654498efgdf56v4sdf6g54df')
    })
})
/*
location.find.mockImplementation(() => ({
    limit: jest.fn().
    mockImplementation(
        () => ({
            lean: jest.fn().mockResolvedValue([1, 2, 3, 4])
        })),
}))
*/