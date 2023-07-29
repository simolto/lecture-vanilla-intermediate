export class TrackingInformation {
  #shippingCompany
  #trackingNumber
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber
    this.#shippingCompany = shippingCompany
  }

  get shippingCompany() {
    return this.#shippingCompany
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg
  }

  get trackingNumber() {
    return this.#trackingNumber
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

export class Shipment {
  #trackingInformation
  constructor(trackingInformation) {
    this.#trackingInformation = trackingInformation
  }

  get trackingInfo() {
    return this.#trackingInformation.display
  }

  get trackingInformation() {
    return this.#trackingInformation
  }

  set trackingInformation(trackingInformation) {
    this.#trackingInformation = trackingInformation
  }
}

const shipment = new Shipment(new TrackingInformation(999, 'Maersk'))
console.log(shipment.trackingInfo)

shipment.trackingInformation.shippingCompany = 'COSCO'
console.log(shipment.trackingInfo)

// 현재 프로젝트의 진행 여부에 따라서 클래스 추출 및 인라인에 대한 의사 결정을 자유롭게 진행하도록 할 것
