import axios from 'axios';
import Image from 'next/image'

const Home = ({ books, error }) => {
console.log( {books} );

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.acf.repeater.group_title}
          <Image alt="img" width="500" height="500" src={book.acf.image.url}></Image>
        </li>
      ))}
    </ul>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://headless.naphix.com/wp-json/wp/v2/books');
    const books = res.data;
    return { books };
  } catch (error) {
    return { error };
  }
};

export default Home;
