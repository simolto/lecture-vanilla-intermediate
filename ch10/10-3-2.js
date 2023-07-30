export function adjustedCapital(instrument) {
  return isEligibleForAdjustedCapital(instrument)
    ? (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
    : 0
}

function isEligibleForAdjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  )
}
