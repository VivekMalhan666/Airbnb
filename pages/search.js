import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  //To format dates from ISO string
  const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} `} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchResults?.length || 1}+ stays - {range} - for {noOfGuests}{' '}
            guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* Custom utility class of tailwind css */}
            <p className="filterButton">Cancellation Facilities</p>
            <p className="filterButton">Types of Place</p>
            <p className="filterButton">Price</p>
            <p className="filterButton">Rooms and Beds</p>
            <p className="filterButton">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  image={img}
                  location={location}
                  price={price}
                  description={description}
                  star={star}
                  total={total}
                  title={title}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (response) => response.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
