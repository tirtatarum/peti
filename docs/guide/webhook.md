# WebHook <Badge text="beta" type="warn"/> 

Setiap [pembayaran](/guide/payment.html) tagihan diproses dengan _asynchronous_. __Job Server__ mendukung `callback` atau `webhook` untuk melaporkan status dari proses pembayaran, untuk menggunakan fitur ini, cukup dengan menyertakan request header `X-Async` dengan url tujuan pelaporan sebagai value.

## Usage

```bash
curl -H "Authorization: Bearer $TEST_TOKEN" \
-H "Content-Type: application/json" \
-H "X-Async: https://callback.me/here" \
-d '{"inq":"e2964d416ccd19a78ff01b6766fc727c", “per”:["201902", "201903"],"pid":"evidence-token","amo":119600, “mer”: “Warteg”}' \
"/tagihan/0201001026"
```

Request yang akan dilakukan adalah HTTP Metode POST (Content-Type: application/json) ke url terkait dengan parameter sebagai berikut:

- Headers
  - Authorization
      Jika X-Async-Token tidak disertakan pada request header (pembayaran) maka request header Authorization saat pembayaran akan dikirimkan kembali pada saat callback. Jika X-Async-Token disediakan, maka request header Authorization pada callback akan berisi dari value X-Async-Token tersebut.

- POST Body
  - code

      404/409 : tagihan sudah terbayar sebelumnya
      102/201 : pembayaran diproses
      206 : data tagihan telah berubah
      200/202 : pembayaran berhasil

  - message

      Text berisi detail informasi, misal “tagihan sudah terbayar sebelumnya”

  - meta

      Sebuah `object` yang berisi detail informasi.

Jika web service me-response dengan error __HTTP Status Code__ (`4xx`/`5xx`) dan status code tersebut < 500 maka web service dianggap menolak dan tidak akan dikirim ulang sedangkan jika web service me-response dengan error >= 500, maka callback akan dilakukan ulang setiap 10 detik. Web service harus mengirimkan status code 2xx jika pesan sudah diterima.

## Request

### 201 Created

<<< @/docs/snippets/hooks/201.json{5}

### 202 Accepted

<<< @/docs/snippets/hooks/202.json{5}

### 206 Changed

<<< @/docs/snippets/hooks/206.json{29}

### 409 Rejected

<<< @/docs/snippets/hooks/409.json
