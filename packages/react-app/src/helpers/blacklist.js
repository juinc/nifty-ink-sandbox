
const blacklist = [
  "QmUr59dCZeXR4ozGNV7D8TYtVvTAGoZcvaPg6FALqxvWTG",
  "QmYto8RMovpQfpdGL2z5eVzCaEDtz1ckhpWSezVct2rjd9",
  "Qmb7qQjz1Z7p97G5i7hUnZ477FcU5RsWQYEBrfdSHjdcWC",
  "QmVRc6yKjjAmDvuNa9Lg17rCbfp8jiD73krGV2CPXUoZid",
  "QmY8h1Cgt5d7TueU1QPTdd4ZLMTCZ2FdfhiBJYwYorWKK1",
  "QmTmdMygNFZ3Ukzr7KDPmXsj6rj59AjenLLiBuU8mVxp2g",
  "Qmbpm61GFdoU13nCu6wP1mejFDK9BQ9gKVUmmTQiY77m6x",
  "QmNnoHKiWHnfqQ4CjLgbJEeFvFqC1h5Be4Dwaa25t6TJXs",
  "QmQZmDkMiv8EsrMwmb8Wt5REEp3SmoMFJJ6UAL8YNsKFnd"
]

export default function isBlacklisted(hash) {
  return (blacklist.indexOf(hash)>=0)
}
