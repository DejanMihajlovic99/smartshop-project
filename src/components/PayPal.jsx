import { ShopContext } from "../context/shop-context";
import { useRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";

export default function PayPal() {
    const paypal = useRef();
    const { getTotalCartAmount } = useContext(ShopContext);
    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking",
                            amount: {
                                currency_code: "CAD",
                                value: getTotalCartAmount()
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}