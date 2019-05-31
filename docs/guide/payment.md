# Payment

PeTi melakukan pembayaran dengan metode __asyncronous__. Metode ini sebenarnya bukan hal yang baru,
sejak awal pembukaan pembayaran online di PDAM Tirta Tarum sampai tahun 2017 metode ini digunakan untuk mempercepat proses pembayaran dikarenakan database billing berada di masing-masing cabang unit dengan kualitas koneksi yang kurang baik.

Metode __asyncronous__ digunakan kembali untuk menghindari terjadinya pembatalan pembayaran oleh pelanggan dikarenakan proses pembayaran memakan waktu yang lama.

## How it Works

Saat proses pembayaran dilakukan, PeTi mengirimkan __task__ kepada __Job Server__, di sanalah proses pembayaran terjadi. __Job Server__ akan mencoba ulang pembayaran setiap 30 detik jika gagal.

## Parameters

Berbeda dengan proses [inquiry](/guide/inquiry.html#request), pembayaran memerlukan beberapa parameter JSON (`Content-Type: application/json`) yang harus disediakan, diantaranya:

- inq `string`

    Token yang didapatkan pada response header (x-cross-site) [inquiry](/guide/inquiry.html#response).

- amo `number`

    Total tagihan keseluruhan pada [inquiry](/guide/inquiry.html#response).

- per `number[]`

    List periode tagihan pada [inquiry](/guide/inquiry.html#response).

- mer `string`

    Nama atau ID _merchant_ untuk identifikasi dengan maksimal panjang 64 karakter.

- pid `string`

    Token unik sebagai bukti pembayaran dari mitra dengan maksimal panjang 64 karakter.

## Request

Untuk request pembayaran sama seperti request pada [inquiry](/guide/inquiry.html#request), hanya berbeda pada `HTTP Method` yang digunakan yaitu `POST`.

### Usage

```bash
curl -X POST \
-H "Authorization: Bearer $JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"inq":"51f5793d30f9c2f63d15f077aa8ae72a","pid":"evid-123456","amo":345100,"mer":"warteg123","per":[201901,201902,201903]
}' \
"/tagihan/0201007071"
```

## Response

Response dari pembayaran juga menghasilkan header `x-advice-url` yang bisa digunakan untuk pengecekan status pembayaran jika tidak menggunakan fitur [webhook](/guide/webhook.html).

```json
/** 202 Accepted
....
x-advice-url: /status/0201007071?inq=51f5793d30f9c2f63d15f077aa8ae72a&pid=evid-123456
....
*/
{
  "status":"accepted",
  "data":{
    "amo":345100,
    "mer":"warteg123",
    "per":[
      201901,
      201902,
      201903
    ],
    "pid":"evid-123456",
    "pat": "57A591AD8AC0E6531300",
    "pop":"99",
    "pts":1555679261846,
    "inq":"51f5793d30f9c2f63d15f077aa8ae72a"
  }
}
```

::: danger
`pat` harus dilampirkan pada cetakan rekening.
:::

::: tip
`pts` adalah timestamp untuk waktu pembayaran dalam format milidetik.

`unixtimestamp` = _floor (pts/1000)_
:::

