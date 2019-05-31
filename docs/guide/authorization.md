# Authorization

PeTi bukanlah _public_ **API** jadi semua `route` yang ada dilindungi oleh [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). Untuk mengaksesnya diperlukan sebuah token yang dibuatkan khusus untuk setiap mitra.

## Token

Layanan pembuatan token tidak disediakan pada PeTi tetapi dibuat langsung oleh administrator dengan masa _expire_ **6 bulan** atau sesuai **tanggal PKS**.

Berikut adalah contoh JWT token dibuat.

```vim
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGVyIiwiaWF0IjoxNTU1NjYwMjg3LCJuYmYiOjE1NTU2NjAzNDcsImV4cCI6MTU1NTc0NjY4NywiaXNzIjoidGlydGF0YXJ1bS5pZCIsInN1YiI6Ijk5IiwianRpIjoiN2YyZmViMjIyMmRmNmFmNmE1ODQ0ZWY2MGM4ZTgzMGQifQ.IMZvY0Ec9UqPL3ymlU0Mn1Mn_zW4fvHlUV8BN56YcrePfb7LS0Q3wfYFYRFLX6Cvaz_8oyEnl7iwIkgXIwn7XFHdrTwpSIesDo0EA8KbHw06dtBQJTPnAGwpf1S0U_uSVA-9BrWrkfHE9rYHC3cI87C57r5LwGIE4TJbva5I3J_AVaK5KeYP8v7id-O6er_B2v6hQb5re6tGjv6aMDY0qxwl22kuUcl7K1cjReXEDmUuiPRBbSLm5jPKTUEQ753m5EaFWqtbVGoDHwhSOI6rkVWpwgWVdsT250qcaa0pY1-WyPxQG_eubTLBqf-hXtG3LUyiGIhWuZ2GJHxCGEIk0g
```

Token tersebut dapat di-decode dengan skema [Base64](https://en.wikipedia.org/wiki/Base64) atau dapat dengan mudah melalui [jwt.io](https://jwt.io).

```json
{
  "name": "Tester",
  "iat": 1555660287,
  "nbf": 1555660347,
  "exp": 1555746687,
  "iss": "tirtatarum.id",
  "sub": "99",
  "jti": "7f2feb2222df6af6a5844ef60c8e830d"
}
```

::: warning
Walaupun token tersebut bisa dengan mudah di-_decode_, merubah sebagian _value_ dari token akan mencegah pengaksesan layanan.
:::

## Usage

Berikut adalah contoh penggunaan token menggunakan program [curl](https://curl.haxx.se/)

```bash
curl -H "Authorization: Bearer $JWT_TOKEN" "/tagihan/0234567891"
```

## Revoke

Untuk beberapa alasan mungkin diperlukan _blacklist_ token, saat token masuk dalam daftar _blacklist_, maka token tersebut dianggap tidak sah. Untuk melakukan _blacklist_ token, silahkan hubungi administrator dan lampirkan token atau `jti` dari token terkait beserta alasan untuk melakukan _blacklist_.
