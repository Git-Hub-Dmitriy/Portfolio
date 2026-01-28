import * as style from "./Checkout.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Helmet } from "react-helmet";
import Information from "./Information/Information";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import OrderSummery from "./OrderSummery/OrderSummery";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const shipping = "free";
  const shoppingCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const [data, setData] = useState({
    countries: [],
    cities: [],
  });
  const [statesCheckout, setStatesCheckout] = useState({
    selectedCountry: "Select",
    selectedCity: "Selects",
    zipCode: "",
    name: "",
    surname: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    orderNote: "",
    addressCheckbox: false,
    methodPayment: "cashDelivery",
  });

  async function submitDataUser() {
    try {
      const submit = await fetch("", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "DataUserOrder",
          data: statesCheckout,
        }),
      });
      const response = await submit.json();
    } catch (err) {
      console.log(err.status);
      console.log(err.message);
    }
  }

  useEffect(() => {
    const response = fetch(
      "https://countriesnow.space/api/v0.1/countries/states"
    )
      .then((json) => json.json())
      .then((json) =>
        setData({
          ...data,
          countries: json.data,
        })
      )
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const response = fetch(
      "https://countriesnow.space/api/v0.1/countries/states"
    )
      .then((json) => json.json())
      .then((respond) => {
        const cities = respond?.data.find(
          (country) => country.name === statesCheckout.selectedCountry
        );
        if (cities?.states.length === 0) {
          setStatesCheckout({
            ...statesCheckout,
            selectedCity: "Not Found",
          });
          setData({
            ...data,
            cities: [],
          });
        } else {
          setStatesCheckout({
            ...statesCheckout,
            selectedCity: "Selects",
          });
          setData({
            ...data,
            cities: cities.states,
          });
        }
      })
      .catch((err) => console.log(err.message));
  }, [statesCheckout.selectedCountry]);

  return (
    <main className={style.checkout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
      </Helmet>
      <Navigate one={"Shopping Cart"} two={"Checkout"} />
      <div className={style.checkout__wrapper}>
        <div className={style.checkout__wrappContent}>
          <Information
            data={data}
            setStatesCheckout={setStatesCheckout}
            statesCheckout={statesCheckout}
          />
          <ExtraInfo />
        </div>
        <OrderSummery
          shipping={shipping}
          shoppingCart={shoppingCart}
          submit={submitDataUser}
          setStatesCheckout={setStatesCheckout}
          statesCheckout={statesCheckout}
        />
      </div>
    </main>
  );
}
