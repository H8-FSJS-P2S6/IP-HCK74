import Portofolio from "./portofolio";
export default function CardList({ portofolio }) {
  return (
    <div
      id="job-cards"
      className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6"
    >
      {/* Job Card */}
      {portofolio.map((el) => {
        return (
          <portofolio
            key={el.id}
            id={el.id}
            title={el.title}
            imgUrl={el.imgUrl}
            companyName={el.Company?.title}
            price={el.price}
          />
        );
      })}
      {/*  */}
    </div>
  );
}
