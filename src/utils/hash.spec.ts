import { base64Encode } from './hash'

describe('base64 encode', () => {
  it('return hashed string', () => {
    expect(base64Encode('https://nasional.kompas.com/read/2021/04/14/07011481/kejar-aset-obligor-blbi-pemerintah-siapkan-upaya-penyanderaan-badan')).toEqual('aHR0cHM6Ly9uYXNpb25hbC5rb21wYXMuY29tL3JlYWQvMjAyMS8wNC8xNC8wNzAxMTQ4MS9rZWphci1hc2V0LW9ibGlnb3ItYmxiaS1wZW1lcmludGFoLXNpYXBrYW4tdXBheWEtcGVueWFuZGVyYWFuLWJhZGFu')
  })
})
