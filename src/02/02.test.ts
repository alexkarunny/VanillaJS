import {CityType} from "./02-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildAt: 2021,
                repaired: false,
                address: {
                    number: 102,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'Hospital', budjet: 10000, staffCount: 32,
                address: {number: 32, street: {title: 'Top st'}}
            },
            {
                type: 'Fire', budjet: 1000, staffCount: 37,
                address: {number: 23, street: {title: 'Top st'}}
            },

        ],
        citizensNumber: 100000
    }
})

test('City should be fit up', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('Happy street');

    expect(city.houses[1].buildAt).toBe(2020);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(101);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildAt).toBe(2021);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(102);
    expect(city.houses[2].address.street.title).toBe('Happy street');


})

test('city hospitsl', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('Hospital');
    expect(city.governmentBuildings[0].budjet).toBe(10000);
    expect(city.governmentBuildings[0].staffCount).toBe(32);
    expect(city.governmentBuildings[0].address.street.title).toBe('Top st');


    expect(city.governmentBuildings[1].type).toBe('Fire');
    expect(city.governmentBuildings[1].budjet).toBe(1000);
    expect(city.governmentBuildings[1].staffCount).toBe(37);
    expect(city.governmentBuildings[1].address.street.title).toBe('Top st');


})