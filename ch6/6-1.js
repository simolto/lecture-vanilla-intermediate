export function printOwing(invoice) {
  const outstanding = getOutstanding(invoice)

  function getOutstanding(invoice) {
    return invoice.orders.reduce((prev, curr) => (prev += curr.amount), 0)
  }

  function recordDueDate(invoice) {
    const today = new Date()
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    )
  }

  function printBanner() {
    console.log('***********************')
    console.log('**** Customer Owes ****')
    console.log('***********************')
  }

  function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
  }

  printBanner()
  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
}
printOwing(invoice)
