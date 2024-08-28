const Image = ({ data }) => {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href={data.urls.regular}>
        <img
          className="h-72 w-full rounded-lg shadow-md object-cover"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
    </>
  );
};

export default Image;
