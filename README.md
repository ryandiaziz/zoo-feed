Zoo app

| Method | Route                            | Keterangan                                                                                                  |
| ------ | ---------------------------------| ----------------------------------------------------------------------------------------------------------- |
| GET    | /                                | Menampilkan halaman home                                                                                    |
| GET    | /animals                         | Menampilkan semua data hewan                                                                                |
| GET    | /animals/add                     | Menampilkan halaman _add_ data hewan                                                                        |
| POST   | /animals/add                     | Menambahkan data hewan                                                                                      |
| GET    | /animals/detail/:id              | Menampilkan data detail dari seekor hewan                                                                   |
| GET    | /animals/update/:id              | Menampilkan halaman update data hewan                                                                       |
| POST   | /animals/update/:id              | Melakukan _update_ data hewan                                                                               |
| GET    | /animals/delete/:id              | Melakukan _delete_ data hewan                                                                               |
| GET    | /foods                           | Menampilkan semua data makanan hewan                                                                        |
| GET    | /foods/add                       | Menampilkan halaman _add_ data makanan hewan                                                                |
| POST   | /foods/add                       | Menambahkan data makanan hewan                                                                              |
| GET    | /foods/detail/:id                | Menampilkan data detail dari makanan hewan                                                                  |
| GET    | /foods/update/:id                | Menampilkan halaman update data makanan hewan                                                               |
| POST   | /foods/update/:id                | Melakukan _update_ data makanan hewan                                                                       |
| GET    | /foods/delete/:id                | Melakukan _delete_ data makanan hewan                                                                       |
| GET    | /habitats                        | Menampilkan semua data habitat hewan                                                                        |
| GET    | /habitats/add/:id                | Menampilkan halaman _add_ data hewan dengan habitat yang sudah dipilih                                      |
| POST   | /habitats/add/:id                | Menambahkan data hewan                                                                                      |
| GET    | /habitats/detail/:id             | Menampilkan data detail dari habitat dan hewan-hewan yang berada pada habitat tersebut                      |
| GET    | /habitats/delete/:id             | Melakukan _delete_ habitat                                                                                  |
| GET    | /classtypes                      | Menampilkan semua data kelas pada hewan                                                                     |
| GET    | /classtypes/add/:id              | Menampilkan halaman _add_ data hewan dengan kelas yang sudah dipilih                                        |
| POST   | /classtypes/add/:id              | Menambahkan data hewan                                                                                      |
| GET    | /classtypes/detail/:id           | Menampilkan data detail dari kelas dan hewan-hewan yang sesuai dengan kelas tersebut                        |
| GET    | /classtypes/delete/:id           | Melakukan _delete_ kelas hewan                                                                              |
| GET    | /animalfoods                     | Menampilkan semua data hewan dan makanannya                                                                 |
| GET    | /animalfoods/FA/add/:id          | Menampilkan halaman yang akan menambahkan hewan untuk makanan yang dipilih                                  |
| POST   | /animalfoods/FA/add/:id          | Menambahkan data hewan untuk makan yang dipilih                                                             |
| GET    | /animalfoods/FA/delete/:id1/:id2 | Melakukan _delete_ data hewan untuk makanan yang dipilih                                                    |
| GET    | /animalfoods/AF/add/:id          | Menampilkan halaman yang akan menambahkan makanan untuk hewan yang dipilih                                  |
| POST   | /animalfoods/AF/add/:id          | Menambahkan data makanan untuk hewan yang dipilih                                                           |
| GET    | /animalfoods/AF/delete/:id1/:id2 | Melakukan _delete_ data makanan untuk hewan yang dipilih                                                    |