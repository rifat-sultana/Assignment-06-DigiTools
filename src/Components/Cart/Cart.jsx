

const Cart = ({ carts }) => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold mb-4">Your Carts</h2>

      {carts.map(item => (
        <div key={item.id} className="mb-4">

          <div> 
          <img
            className="w-20 h-20 object-contain"
            src={item.icon}
            alt="item"/>
         </div>

          <div> 
            <h2 className="text-2xl font-bold"> {item.name} </h2>
          </div>
         <div> {item.price} </div>


        </div>
      ))}
    </div>
  );
};

export default Cart;