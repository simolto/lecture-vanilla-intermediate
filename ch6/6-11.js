class PriceOrder {
  #product
  #quantity
  #shippingMethod

  constructor(product, quantity, shippingMethod) {
    this.#product = product
    this.#quantity = quantity
    this.#shippingMethod = shippingMethod
  }

  get product() {
    return this.#product
  }
  get quantity() {
    return this.#quantity
  }
  get shippingMethod() {
    return this.#shippingMethod
  }

  get basePrice() {
    return this.product.basePrice * this.quantity
  }
  get discount() {
    console.log(Math.max(this.quantity - this.product.discountThreshold, 0))
    console.log(this.product.basePrice)

    return (
      Math.max(this.quantity - this.product.discountThreshold, 0) *
      this.product.basePrice *
      this.product.discountRate
    )
  }
  get shippingPerCase() {
    return this.basePrice > this.shippingMethod.discountThreshold
      ? this.shippingMethod.discountedFee
      : this.shippingMethod.feePerCase
  }
  get shippingCost() {
    return this.quantity * this.shippingPerCase
  }
  get price() {
    return this.basePrice - this.discount + this.shippingCost
  }
}

const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
}

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
}

const price = new PriceOrder(product, 5, shippingMethod)
console.log(price.price)
