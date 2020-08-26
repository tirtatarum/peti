# Payment

Pembayaran dilakukan secara **asyncronous**.
Saat proses pembayaran dilakukan, **task** dikirim ke **Job Server**, di sanalah proses pembayaran terjadi. **Job Server** akan mencoba ulang kembali pembayaran jika gagal.

## Parameters

Berbeda dengan proses [inquiry](/guide/inquiry.html#request), pembayaran memerlukan beberapa parameter JSON (`Content-Type: application/json`) yang harus disediakan, diantaranya:

- inq `string`

  Token yang didapatkan pada response header (x-cross-site) [inquiry](/guide/inquiry.html#response).

- amo `number`

  Total tagihan keseluruhan pada [inquiry](/guide/inquiry.html#response).

- per `number[]`

  List periode tagihan pada [inquiry](/guide/inquiry.html#response).

- mer `number`

  Nama atau ID _merchant_ untuk identifikasi dengan maksimal panjang 4 digit.

- pid `string`

  Token unik sebagai bukti pembayaran dari mitra dengan maksimal panjang 50 karakter.

## Request

Untuk request pembayaran sama seperti request pada [inquiry](/guide/inquiry.html#request), hanya berbeda pada `HTTP Method` yang digunakan yaitu `POST`.

### Usage

```bash
curl -X POST \
-H "Authorization: Bearer $JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"inq":"51f5793d30f9c2f63d15f077aa8ae72a","pid":"evid-123456","amo":345100,"mer":"1234","per":[201901,201902,201903]
}' \
"/tagihan/010101010101"
```

## Response

Response dari pembayaran juga menghasilkan header `x-advice-url` yang bisa digunakan untuk pengecekan status pembayaran jika tidak menggunakan fitur [webhook](/guide/webhook.html).

```json
/** 202 Accepted
....
x-advice-url: /status/010101010101?nob=002008260001
....
*/
{
  "status": "accepted",
  "data": {
    "cid": "010101002004",
    "pid": "8ab1ef54-49a9-4bd7-a316-da885a0735eb",
    "pat": "CD545FFF5E67079E8915",
    "pop": "00",
    "mer": "1234",
    "inq": "357c5cd84b3d81f266310ba1588c051c",
    "pts": 1598431592135,
    "nob": "002008260001"
  },
  "meta": {
    "jumlah_tagihan": null,
    "jumlah_bayar": 747300,
    "jumlah_masalah": null,
    "lembar_tagihan": null,
    "lembar_bayar": 1,
    "lembar_masalah": null,
    "periode_tagihan": null,
    "periode_bayar": [202007],
    "periode_masalah": null
  }
}
```

::: danger
`nob` harus dilampirkan pada cetakan rekening.
:::

::: tip
`pts` adalah timestamp untuk waktu pembayaran dalam format milidetik.

`unixtimestamp` = _floor (pts/1000)_
:::
