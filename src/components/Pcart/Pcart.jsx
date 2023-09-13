const Pcart = ({ player, handlePlayerName }) => {
  const { id, name, image, details, age, position, salary } = player;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Player: {name}</h2>
          <p>Details: {details}</p>
          <p>Age: {age}</p>
          <p>Position: {position}</p>
          <p className="font-semibold text-lg">Salary: {salary}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handlePlayerName(name, salary)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pcart;
