# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Component

> 1. Update `components` directory, create a new directory: `book`
> 2. Move `BookComponent.js` to `book` directory

Open `BookComponent.js` and then modify like this
```js
<Col lg={3} md={6}>
  <Card className="mt-5">
      ...
  </Card>
</Col>
```

#### PART Props

Open `App.js` and then modify like this
```js
function App() {
  const books = [
    {
      id: 1,
      title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
      description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
      image: 'https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg'
    },
    {
      id: 2,
      title: 'Fs Mudah Membuat dan Berbisnis Aplikasi Android dengan Android Studio',
      description: 'Mudah Membuat dan Berbisnis Aplikasi Android dengan Android Studio Penulis: Yudha Yudhanto & Ardhi Wijayanto Pengembangan aplikasi digital untuk perangkat mobile (ponsel pintar dan tablet) merupakan salah satu bidang yang prospektif untuk terus dikembangkan.',
      image: 'https://cdn.gramedia.com/uploads/items/ID_MMBAA2018MTH05MMBAA.jpg'
    },
    {
      id: 3,
      title: 'Pemrograman Web Seri Php: Langkah Mudah Dan Praktis Memahami',
      description: 'Saat ini, PHP banyak dipakai untuk membuat program situs web dinamis. Contoh aplikasi program PHP adalah forum (phpBB) dan MediaWiki (software di belakang Wikipedia). ',
      image: 'https://cdn.gramedia.com/uploads/items/Pemrograman_WEb_PHP.jpg'
    },
    {
      id: 4,
      title: 'Mahir Bahasa Pemrograman PHP',
      description: 'Dengan pesatnya perkembangan teknologi saat ini, kita dituntut untuk bisa membuat dan mengembangkan sebuah sistem atau program berbasis web. Pembuatan sebuah sistem berbasis web bisa menggunakan berbagai macam bahasa pemrograman. Namun, pada umumnya orang menggunakan bahasa pemrograman PHP.',
      image: 'https://cdn.gramedia.com/uploads/items/9786020498768_Mahir_Bahasa_.jpg'
    }
  ];

  return (
    <Container>
      <Row>
        {
          books.map((book) =>
            <BookComponent
              key={book.id}
              title={book.title}
              description={book.description}
              variant="primary" />
          )
        }
      </Row>
    </Container>
  );
}

```

##### Hands On

> Rapihkan di `App.js` supaya tidak terlihat seperti di atas
> 
> Buat sebuah compenent baru dengan nama `Book` dan `BookList` silahkan atur dan sesuaikan
>
> Jika sudah, maka di `App.js` yang di panggil adalah component `Boook`