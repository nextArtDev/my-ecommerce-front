import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`

interface Query {
  amount: number
  referenceId: string
}

// const myHeaders = new Headers()
// myHeaders.append('Access-Control-Allow-Origin', '*')
// myHeaders.append(
//   'Access-Control-Allow-Methods',
//   'GET, POST, PUT, DELETE, OPTIONS'
// )
// myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')

// const myInit = {
//   headers: myHeaders,
//   mode: 'no-cors',
// }

const getZibal = async (query: Query) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      amount: query.amount,
      referenceId: query.referenceId,
    },
  })

  const res = await fetch(url)

  console.log(res)
  return res.body
}

export default getZibal
