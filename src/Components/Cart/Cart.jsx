

const Cart = ({ carts, setCarts }) => {
  // console.log(carts)

  const totalPrice = carts.reduce((sum , item ) => sum + item.price, 0)
 
 const handleRemove = (id) => {
    const updated = carts.filter(item => item.id !== id)
    setCarts(updated)
  }


  const handlePayment = () =>{
    setCarts([])
  }

  return (
     <div className="max-w-5xl mx-auto mt-10 p-5">
      <h2 className="text-3xl font-bold mb-6">Your Carts ({carts.length})</h2>


        {
          carts.length === 0 ? <p className="text-2xl text-center font-bold border py-2 rounded-md" > Cart is empty </p> :
          <>
          {carts.map(item => (
        <div 
          key={item.id} 
          className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            {/* icon */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
              {item.icon}
            </div>

            {/* text */}
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500 text-sm">${item.price} </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <button 
           onClick={() => handleRemove(item.id)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>

        </div>
      ))}

      <div className=" flex justify-between rounded text-2xl p-5 mt-5 bg-gray-200"> 
        <div> Total </div>
        <div> ${totalPrice}  </div>
      </div>

      <button onClick= {handlePayment} 
      
      className="bg-gradient-to-r from-purple-600 to-blue-500 text-white   flex justify-center rounded-md text-xl w-full p-5 mt-5 " > 

        Proceed To checkout 
        </button>
          
          </>
        }

    </div>
  );
};

export default Cart;