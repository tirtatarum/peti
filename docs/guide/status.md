# Status

Status pembayaran dapat diperoleh dengan melakukan `GET` request ke `/status/:id`, dengan _querystring_ `pid` dan `pat`.

```bash
curl "/status/0123456789?pid=abc&pat=xyz"
```

Jika request saat pembayaran terputus dan `pat` tidak berhasil didapatkan, `pat` dapat diganti dengan `inq` token

```bash
curl "/status/0123456789?pid=abc&inq=qwerty"
```

## Created

<<< @/docs/snippets/status/created.json

## Accepted

<<< @/docs/snippets/status/accepted.json

## Rejected

<<< @/docs/snippets/status/rejected.json

## Suspect

<<< @/docs/snippets/status/suspect.json
 