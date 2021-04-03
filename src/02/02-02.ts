export type Streettype = {
    title: string

}
export type AddressType = {
    number: number
    street: Streettype
}
export type HouseType = {
    buildAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingsType = {
    type: "Hospital" | 'Fire',
    budjet: number,
    staffCount: number,
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number
}

