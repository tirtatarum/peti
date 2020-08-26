<!-- # Reversal <Badge text="beta" type="warn"/>

Pembatalan dapat dilakukan dengan melakukan `DELETE` request ke `/tagihan/:id`, request tersebut membutuhkan parameter dalam bentuk _querystring_ berupa `pid` dan `pat`

::: danger
Pembatalan hanya bisa dilakukan pada **H+1** sebelum pukul **12:00**.
:::

## Usage

```bash
curl -X DELETE \
-H "Authorization: Bearer $JWT_TOKEN" \
-H "Content-Type: application/json" \
"/tagihan/0201007071?pid=evid-123456&pat=57A591AD8AC0E6531300"
```

Setelah pembatalan berhasil dilakukan, data `rev` pada [status](/guide/status.html) dan [rekonsiliasi](/guide/reconsiliation.html) akan berisi _value_ **1** -->
