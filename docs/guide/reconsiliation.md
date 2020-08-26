<!-- # Reconsiliation  <Badge text="beta" type="warn"/> 

Data pembayaran bisa didapatkan di route `GET /audit`, data pembayaran yang dikeluarkan adalah data pembayaran saat request dilakukan.

Untuk mendapatkan data pembayaran pada tanggal tertentu, bisa dilakukan dengan menambahkan *querystring* **tgl** dengan *pattern*:
```js
/^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/

// 1945-08-17 atau 19450817
```

Berikut contoh dari response `/audit`

<<< @/docs/snippets/audit.json -->
