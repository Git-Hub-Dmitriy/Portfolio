import * as style from "./Settings.module.scss";
import { Helmet } from "react-helmet";
import SectionUser from "./SectionUser/SectionUser";
import SectionAddress from "./SectionAddress/SectionAddress";
import SectionPassword from "./SectionPassword/SectionPassword";
import { useState, useEffect } from "react";
import { users } from "@data/users";

export default function Settings() {
  const user = users.find((item) => item.id == 0);
  const [changeUser, setChangeUser] = useState({
    name: user.name,
    surname: user.surname,
    company: user.company,
    code: user.code,
    email: user.email,
    phone: user.tel,
    address: user.address,
  });
  const [activeBorder, setActiveBorder] = useState({
    name: false,
    surname: false,
    company: false,
    address: false,
    code: false,
    email: false,
    phone: false,
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [countries, setCountries] = useState([]);
  const [activeCountries, setActiveCountries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [activeCities, setActiveCities] = useState(false);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data);
        setSelectedCountry(data.data[0].name);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        const array = data.data.find((item) => item.name == selectedCountry);
        if (array.states.length != 0) {
          setCities(array.states);
          setSelectedCity(array.states[0].name);
        } else {
          setCities([]);
          setSelectedCity("not found");
        }
      })
      .catch((err) => console.log(err));
  }, [selectedCountry]);

  return (
    <main className={style.settings}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Settings</title>
      </Helmet>
      <SectionUser
        user={user}
        changeUser={changeUser}
        setChangeUser={setChangeUser}
      />
      <SectionAddress
        activeBorder={activeBorder}
        setActiveBorder={setActiveBorder}
        changeUser={changeUser}
        setChangeUser={setChangeUser}
        countries={countries}
        activeCountries={activeCountries}
        setActiveCountries={setActiveCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        activeCities={activeCities}
        setActiveCities={setActiveCities}
      />
      <SectionPassword
        activeBorder={activeBorder}
        setActiveBorder={setActiveBorder}
      />
    </main>
  );
}
