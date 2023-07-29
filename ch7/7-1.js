const organization = { name: 'Acme Gooseberries', country: 'GB' }

// case1 - Object.assign(shallow copy)
const organ = Object.assign({}, organization, { name: 'Dream Coding' })
console.log(organ.name, organization.name)

// case2 - Spread Operator(deep copy)
const organ2 = { ...organization, name: 'Dream Coding' }
console.log(organ2.name, organization.name)

// case3 - Immutable Libraries(e.g. Immutable.js or Immer or cloneDeep in lodash...)

// case4 - Class(encapsulation)
class Organization {
  #name
  #country
  constructor(data) {
    this.#name = data.name
    this.#country = data.country
  }

  get name() {
    return this.#name
  }

  set name(value) {
    this.#name = value
  }

  get country() {
    return this.#country
  }

  set country(value) {
    this.#country = value
  }

  get rawData() {
    return { name: this.name, country: this.country }
  }
}

const organization3 = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
})
