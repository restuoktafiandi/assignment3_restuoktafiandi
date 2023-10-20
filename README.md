# Assignment 3

## Cara Menggunakan

### Install dependensi:
```
npm install
```
### Buat database:
```
npx sequelize db:create
```
### Migrate database
```
npx sequelize db:migrate
```
### Seed database
```
npx sequelize db:seed:all
```
<br>

## Router User

```js
POST /users/register
```
Pada tab Body pilih x-www-form-url-encoded di Postman, Masukkan key email, username, dan password lalu isi valuenya.

```js
POST /users/login
```
Pada tab Body pilih x-www-form-url-encoded di Postman, Masukkan key email,dan password lalu isi valuenya sesuai dengan data yg sudah di regist, maka akan ter-generate token pada respon.

Unruk mengakses Photo perlu login terlebih dahulu. Caranya Letakkan token yang didapat saat login. Pada tab Headers di tiap endpoint photos pada Postman, lalu pada key nya ketik <b>token</b> dan isi value dengan tokennya.

## Router Photos

Mengambil seluruh data photos
```js
GET /photos
```
Mengambil data photos berdasarkan id
```js
GET /photos/:id
```
Membuat data photos<br>
Pada tab Body pilih x-www-form-url-encoded di Postman, Masukkan key title, caption, dan image_url lalu isi valuenya.
```js
POST /photos
```
Untuk menjalankan PUT dan DELETE akan diterapkan ketika UserId dan id yang sedang login sama. Pada tab Body pilih x-www-form-url-encoded di Postman, Masukkan key title, caption, dan image_url lalu ubah valuenya
```js
PUT /photos/:id
```
Delete Photos berdasarkan id<br>
Data akan terhapus sesuai dengan id yang dikirimkan dan sesuai dengan userId yang sedang login, jika tidak maka tidak bisa dihapus.
```js
DELETE /photos/:id
```
## Testing
Berikut langkah-langkahnya:
```
npm run db:create:test
```
```
npm run db:migrate:test
```
```
npm run test
```
