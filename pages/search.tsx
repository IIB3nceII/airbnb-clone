import { Footer, Header } from "@components/common";

const Search = () => {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays</h1>

          <div>
            <p>Cancellation Flexibility</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
