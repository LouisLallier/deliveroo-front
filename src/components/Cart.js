const Cart = ({ cart, setCart }) => {
  let result = 0;
  const handleTotal = () => {
    cart.map((item) => {
      result += Number(item.price * item.quantity);
    });
    return result.toFixed(2);
  };

  const handlePlus = (meal) => {
    const newCart = [...cart];
    let itemIndex = cart.map((item) => item.id).indexOf(meal.id);
    const itemToReplace = cart[itemIndex];
    const newMeal = {
      ...itemToReplace,
      quantity: itemToReplace.quantity + 1,
    };
    newCart.splice(itemIndex, 1, newMeal);
    setCart(newCart);
  };

  const handleMinus = (meal) => {
    const newCart = [...cart];
    let itemIndex = cart.map((item) => item.id).indexOf(meal.id);
    const itemToReplace = cart[itemIndex];
    if (itemToReplace.quantity !== 0) {
      const newMeal = { ...meal };

      newMeal.quantity -= 1;
      newCart.splice(itemIndex, 1, newMeal);
    } else {
      newCart.splice(itemIndex, 1);
    }
    setCart(newCart);
  };

  return (
    <div className="Cart my my-[30px] flex max-h-[867px] w-[350px] flex-col items-center bg-white">
      <button className="mt-2.5 h-[50px] w-[330px] rounded-md bg-[#3DCDBD]">
        Valider mon panier
      </button>
      {cart[0] ? (
        <div>
          {cart.map((meal, index) => {
            return (
              <div key={index}>
                {meal.title} ID{" "}
                <button
                  onClick={() => {
                    handlePlus(meal);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    handleMinus(meal);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
          <div>{handleTotal()}</div>
        </div>
      ) : (
        <div>Votre Panier est vide</div>
      )}
    </div>
  );
};
export default Cart;
