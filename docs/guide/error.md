# Error

Untuk pesan dan kode error, kami memaksimalkan penggunaan HTTP Status Code dengan format response body:

```json
{
  "error": 404,
  "message": "Not Found"
}
```

Dimana properti `error` berisi _HTTP StatusCode_ dan `message` berisi `HTTP StatusText` atau _custom error message_ jika diperlukan.

## 400 Bad request

Muncul jika parameter pada request tidak terpenuhi atau format parameter salah.

## 401 Unauthorized

Muncul jika terjadi permasalahan otorisasi, dalam hal ini token.

## 403 Forbidden

Muncul jika request bersangkutan tidak diperkenankan untuk mitra.

## 404 Not Found

Selain muncul pada layanan yang tidak tersedia, error ini muncul pada beberapa `route`, diantaranya:

1. Tagihan tidak ada
2. Nomor pelanggan tidak ditemukan
3. `inq` token kadaluarsa atau tidak ada

## 409 Conflict

Muncul saat ada duplikasi bayar

## 410 Gone

Muncul saat data pada `inq` token tidak valid.

## 503 Service Unavailable

Muncul saat terjadi kesalahan pada koneksi server _Job Server_, _Database Server_ dan _Token Server_
