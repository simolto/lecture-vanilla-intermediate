export function acquireData(input) {
  return input
    .split('\n')
    .splice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(','))
    .filter(line => line[1].trim() === 'India')
    .map(line => ({
      city: line[0].trim(),
      phone: line[2].trim(),
    }))
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`
const result = acquireData(input)
console.log(result)

// 현재 웹 개발에서는 Git과 같은 버전 관리 시스템을 활용하기에 주석 처리가 불필요할 수도
//  사용하지 않는 코드는 과감히 지우도록 할 것
