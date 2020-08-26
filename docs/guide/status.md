# Status

Status pembayaran dapat diperoleh dengan melakukan `GET` request ke `/status/:id`, dengan _querystring_ `pid` dan `pat`.

```bash
curl "/status/0123456789?nob=002008260001"
```

Jika request saat pembayaran terputus dan `pat` tidak berhasil didapatkan, `pat` dapat diganti dengan `inq` token

```bash
curl "/status/0123456789?pid=abc&inq=qwerty"
```

## Created 201

```json
{
  "status": "created",
  "message": "payment in progress",
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

## Accepted 202

```json
{
  "status": "accepted",
  "message": "Payment accepted"
}
```
