# Authorization

PeTi menggunakan [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). Untuk mengaksesnya diperlukan sebuah token yang dibuatkan khusus.

## Token

Layanan pembuatan token tidak disediakan pada PeTi tetapi dibuat langsung oleh administrator dengan masa _expire_ **1 bulan** atau sesuai **tanggal PKS**.

Berikut adalah contoh JWT token dibuat.

```vim
eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQkFOSzEiLCJpYXQiOjE1OTg0MzA0MjMsImV4cCI6MTYwMTAyMjQyMywiaXNzIjoicGV0aS50aXJ0YXBhdHJpb3QuY29tIiwic3ViIjoiMDAiLCJqdGkiOiIwMDhiYjU2ODBmNjM3ZWExN2E4YmIzZjgzZWRkYjJlZiJ9.htO3O_MSGNoKEDxCtkkoSBxjsjeGiiriw3jbvCTpkfDJQgj5wxIZLD0nCgyE2NqFpDME_bP2VStma9zF5WFW3A
```

Token tersebut dapat di-decode dengan skema [Base64](https://en.wikipedia.org/wiki/Base64) atau dapat dengan mudah melalui [jwt.io](https://jwt.io).

```json
{
  "name": "BANK1",
  "iat": 1598430423,
  "exp": 1601022423,
  "iss": "peti.tirtapatriot.com",
  "sub": "00",
  "jti": "008bb5680f637ea17a8bb3f83eddb2ef"
```

::: warning Peringatan
Walaupun token tersebut bisa dengan mudah di-_decode_, merubah sebagian _value_ dari token akan mencegah pengaksesan layanan.
:::

## Usage

Berikut adalah contoh penggunaan token menggunakan program [curl](https://curl.haxx.se/)

```bash
curl -H "Authorization: Bearer $JWT_TOKEN" "/tagihan/0234567891"
```

## Revoke

Untuk beberapa alasan mungkin diperlukan _blacklist_ token, saat token masuk dalam daftar _blacklist_, maka token tersebut dianggap tidak sah. Untuk melakukan _blacklist_ token, silahkan hubungi administrator dan lampirkan token atau `jti` dari token terkait beserta alasan untuk melakukan _blacklist_.
