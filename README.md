# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Component

> 1. Create file `Book.js`
> 2. Creat file `BookForm.js`


#### PART Reactive Form

Open `App.js` and the change like this
```js
const App = () => {
  return (
    <Book />
  );
}

export default App;
```

Open `Book.js` and adding script like this
```js
const Book = () => {

  const [getBook, setBook] = useState([
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
  ])

  const eventCreateBook = (book) => {
    setBook(getBook.concat(book))
    console.log(getBook);
  }
  return (
    <>
      <Container>
        <Row>
          <BookForm onCreateBook={eventCreateBook} />
        </Row>
        <Row>
          <BookList dataBooks={getBook} />
        </Row>
      </Container>

    </>
  )
}

export default Book;
```

Open `BookForm.js` and then adding script like this
```js
const BookForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()

    const newBook = {
      id: 5,
      title: 'New Book',
      description: 'New Book Description',
      image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c0bd04600%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c0bd04600%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    }
    console.log(newBook);
    props.onCreateBook(newBook);

  }
  return (
    <Col lg={3} md={6} className="mt-5">
      <h4>Form Book</h4>
      <Form onSubmit={handleSubmit}>
        <button className="btn btn-success" type="submit">Save</button>
      </Form>
    </Col>
  )
}

export default BookForm;
```

#### PART Two Way Data Binding

Open `BookForm.js` and then modify like this
```js

```