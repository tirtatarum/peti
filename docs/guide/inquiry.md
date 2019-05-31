# Inquiry

Saat inquiry berhasil, PeTi menyimpan `body` dari _response_ dengan masa _expire_ 15 menit.
Hal ini dilakukan untuk pencegahan **bulk payment**. Data tersebut kemudian divalidasi saat pembayaran dilakukan dengan mencocokan `id`, `amo`, `per` dan parameter lainnya. Selanjutnya ini disebut sebagai **`inq` token**

## Request

Inquiry tagihan bisa dilakukan dengan melakukan request `GET /tagihan/:id`, dimana `:id` adalah nomor sambungan atau id pelanggan.

### Usage

Berikut contoh request [inquiry](#inquiry) menggunakan program [curl](https://curl.haxx.se/)

```bash
curl -H "Authorization: Bearer $JWT_TOKEN" \
"/tagihan/0123456789"
```

## Response

Pada proses [inquiry](#inquiry), PeTi menggunakan response [header](#header) dan [body](#body) dalam penerapannya.

### Header

Ada 2 key yang harus diperhatikan dalam response ini, yaitu;

1. X-Cross-Site

    Header key ini berisi `inq` token yang diperlukan untuk proses pembayaran.

2. X-Message

    Header key ini berisi pesan yang harus dicetak di struk pembayaran.

::: tip
Header keys (not the values) are case-insensitive, we use lowercase format for clarity.
:::

### Body

Response body berisi sebuah `object` dengan `properties` __pelanggan__ dan __tagihan[]__.
Ada beberapa properti yang harus dicatat untuk kemudian dikirim saat proses pembayaran, diantaranya:

1. `tagihan.biaya.jumlah`

    Hasil kalkulasi dari properti ini harus dikirim pada parameter `amo` saat pembayaran.

    Contoh: `amo=123000`

2. `tagihan.periode`

    List periode pada tagihan harus dikirim pada parameter `per` saat pembayaran

    Contoh: `per=[201902,20193]`

<<< @/docs/snippets/inquiry.json
