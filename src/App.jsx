import { useState } from "react";
import "./App.css";

const moviesData = [
  {
    mal_id: 21,
    title: "Cinta dalam Ikhlas",
    year: 2024,
    image:
      "https://dorangadget.com/wp-content/uploads/2024/09/Film-Indonesia-Terbaru-November-cinta-dalam-ikhlas-566x800.jpg",
    score: 8.71,
    synopsis:
      "Terakhir ada ‘Cinta dalam Ikhlas’ yang diangkat dari novel berjudul sama ditulis oleh Abay Adhitya. Film ini menceritakan drama percintaan yang dipadu unsur religi. Di sini berkisah seputar pertemuan antara Ara dengan Athar. Dimana Athar merasa Ara menjadikan hidupnya lebih bermakna. Akan tetapi, jalan cinta keduanya tak berlangsung mulus. Pasalnya, keduanya masih terlalu muda untuk membina rumah tangga. Hingga pada akhirnya, Athar dan Ara memutuskan berfokus dengan mimpi mereka. Di sini, kita bisa mengambil hikmat tentang persahabatan serta perjuangan yang sangat inspiratif.",
  },
  {
    mal_id: 20,
    title: "Hidup Ini Terlalu Banyak Kamu",
    year: 2024,
    image:
      "https://dorangadget.com/wp-content/uploads/2024/11/Film-Indonesia-Terbaru-November-Hidup-Ini-Terlalu-Banyak-Kamu--566x800.jpg",
    score: 8.71,
    synopsis:
      "Film romantis selanjutnya ada ‘Hidup Ini Terlalu Banyak Kamu’ yang diangkat dari novel Pidi Baiq dengan judul yang sama. Menceritakan tentang kehidupan yang penuh dilema tiga orang yakni Sadali, Arnaza, dan Mera. Sadali dikisahkan sedang merantau ke Yogyakarta dengan tujuan menyelesaikan kuliahnya.Di sanalah dia pun bertemu dengan wanita bernama Mera. Setelah beberapa lama, keduanya menjalin kedekatan. Namun, di sisi lain sebenarnya Sadali sudah menjalin taaruf dengan gadis yang bernama Arnaza di kampungnya. Bagaimana akhir kisah mereka? Anda bisa menontonnya tanggal 21 November 2024.",
  },
  {
    mal_id: 269,
    title: "Pantaskah Aku Berhijab",
    year: 2024,
    image:
      "https://dorangadget.com/wp-content/uploads/2024/11/Film-Indonesia-Terbaru-November-Pantaskah-Aku-Berhijab-566x800.jpg",
    score: 8.71,
    synopsis:
      "Ada juga film religi yang bisa Anda tonton bulan ini. Misalnya saja ‘Pantaskah Aku Berhijab’. Mengangkat kisah tentang seorang wanita yang bernama Sofi. Dalam perjalanan hidupnya, dia mengalami masalah yang rumit. Ditambah kisah cintanya yang tak kalah peliknya. Ketika mengalami titik terendahnya, Aqsa yang merupakan sahabat setianya selalu ada untuk menemaninya. Aqsa pun terus mendukung Sofi agar melupakan masa alunya dan terus melanjutkan hidupnya. Sejumlah aktor dan aktris yang bermain di film ini di antaranya Nadya Arina, Nadzira Shafa, dan Bryan Domani..",
  },
  {
    mal_id: 31964,
    title: "Bila Esok Ibu Tiada",
    year: 2024,
    image:
      "https://dorangadget.com/wp-content/uploads/2024/11/Film-Indonesia-Terbaru-November-Bila-Esok-Ibu-Tiada--566x800.jpg",
    score: 8.71,
    synopsis:
      "film Indonesia terbaru bulan ini juga ada film keluarga. Salah satunya adalah ‘Bila Esok Ibu Tiada’ yang dibintangi oleh aktris kawakan Christine Hakim. Bercerita tentang single parent yang bernama Rahmi dengan keempat orang anaknya. Di sini Rahmi dihadapkan pada masing-masing anaknya yang memiliki masalah. Itulah yang membuat keluarga mereka kurang harmonis. Lambat laun, ini membuat kesehatan Rahmi menurun dan berharap keempat anaknya bisa saling damai ketika dia tiada kelak. Sejumlah aktor dan aktris terbaik Indonesia juga turut membintangi film ini. Mulai dari Fedi Nuril, Slamet Rahardjo, Adinia Wirasti, Amanda Manopo, dan lainnya.",
  },
];

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  function handleSelectedMovie(id) {
    const newMovie = movies.filter((movie) => movie.mal_id === id);
    setSelectedMovie(newMovie[0]);
  }

  return (
    <>
      <NavBar>
        <Search setMovies={setMovies}>
          <NumResult movies={movies} />
        </Search>
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
        </Box>
        <Box>
          <MovieDetail selectedMovie={selectedMovie} />
        </Box>
      </Main>
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

// Stateless Component (karena tidak memiliki state/data)
function Logo() {
  return (
    <div className="logo">
      <span role="img">🎬</span>
      <h1>Movie App</h1>
      <span role="img">🎧</span>
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectedMovie }) {
  return (
    <ul className="list list-movie">
      {movies?.map((movie) => (
        <Movie
          key={movie.mal_id}
          movie={movie}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
}

// Stateless Component (karena tidak memiliki state/data)
// Movie Component state nya mengambil dari component lain dan diterima jaadi props
function Movie({ movie, onSelectedMovie }) {
  return (
    <li onClick={() => onSelectedMovie(movie.mal_id)}>
      <img src={movie.image} alt={`${movie.title} cover`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>{movie.year}</span>
        </p>
      </div>
    </li>
  );
}

// Stateful Component (Memiliki state)
function Search({ children, setMovies }) {
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    const keyword = event.target.value.toLowerCase();
    setQuery(keyword);

    // Filter data berdasarkan kata kunci
    const filtered = moviesData.filter((item) =>
      item.title.toLowerCase().includes(keyword)
    );
    setMovies(filtered);
  }

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={handleSearch}
      />
      {children}
    </div>
  );
}

function NumResult({ movies }) {
  return (
    <p className="search-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function MovieDetail({ selectedMovie }) {
  return (
    <div className="details">
      <header>
        <img src={selectedMovie.image} alt={`${selectedMovie.title} cover`} />
        <div className="details-overview">
          <h2>{selectedMovie.title}</h2>
          <p>
            {selectedMovie.year} &bull; {selectedMovie.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedMovie.synopsis}</em>
        </p>
      </section>
    </div>
  );
}
