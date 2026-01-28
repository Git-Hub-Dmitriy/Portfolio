import * as style from "./SectionAddress.module.scss";
import ChoiceCountry from "./ChoiceCountry/ChoiceCountry";
import ChangeName from "./ChangeName/ChangeName";

export default function ChangeAddress({
  changeUser,
  setChangeUser,
  activeBorder,
  setActiveBorder,
  countries,
  activeCountries,
  setActiveCountries,
  selectedCountry,
  setSelectedCountry,
  cities,
  selectedCity,
  setSelectedCity,
  activeCities,
  setActiveCities,
}) {
  return (
    <section className={style.sectionAddress}>
      <h2 className={style.sectionAddress__title}>Billing Address</h2>
      <form
        action=""
        name="changeAddressEmailName"
        className={style.sectionAddress__form}
      >
        <ChangeName changeUser={changeUser} setChangeUser={setChangeUser} />
        <div className={style.sectionAddress__wrapAddress}>
          <h4 className={style.sectionAddress__subtitle}>Street Address</h4>
          <input
            onFocus={() => {
              setActiveBorder({
                ...activeBorder,
                address: true,
              });
            }}
            onBlur={() => {
              setActiveBorder({
                ...activeBorder,
                address: false,
              });
            }}
            onChange={(e) =>
              setChangeUser({
                ...changeUser,
                address: e.target.value,
              })
            }
            className={
              activeBorder.address === false
                ? style.sectionAddress__inputAddress
                : `${style.sectionAddress__inputAddress} ${style.sectionAddress__inputAddress_active}`
            }
            type="text"
            id="changeAddress"
            autoComplete="off"
            value={changeUser.address}
            required
          />
        </div>
        <ChoiceCountry
          activeBorder={activeBorder}
          setActiveBorder={setActiveBorder}
          activeCountries={activeCountries}
          setActiveCountries={setActiveCountries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          activeCities={activeCities}
          setActiveCities={setActiveCities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          countries={countries}
          cities={cities}
          changeUser={changeUser}
          setChangeUser={setChangeUser}
        />
        <div className={style.sectionAddress__wrapEmail}>
          <div className={style.sectionAddress__column}>
            <h4 className={style.sectionAddress__subtitle}>Email</h4>
            <input
              value={changeUser.email}
              type="email"
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  email: e.target.value,
                })
              }
              onFocus={() =>
                setActiveBorder({
                  ...activeBorder,
                  email: true,
                })
              }
              onBlur={() =>
                setActiveBorder({
                  ...activeBorder,
                  email: false,
                })
              }
              required
              autoComplete="off"
              id="changeEmail"
              className={
                activeBorder.email === false
                  ? style.sectionAddress__input
                  : `${style.sectionAddress__input} ${style.sectionAddress__input_active}`
              }
            />
          </div>
          <div className={style.sectionAddress__column}>
            <h4 className={style.sectionAddress__subtitle}>Phone</h4>
            <input
              value={changeUser.phone}
              type="tel"
              required
              autoComplete="off"
              id="changePhone"
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  phone: e.target.value,
                })
              }
              onFocus={() =>
                setActiveBorder({
                  ...activeBorder,
                  phone: true,
                })
              }
              onBlur={() =>
                setActiveBorder({
                  ...activeBorder,
                  phone: false,
                })
              }
              className={
                activeBorder.phone === false
                  ? style.sectionAddress__input
                  : `${style.sectionAddress__input} ${style.sectionAddress__input_active}`
              }
            />
          </div>
        </div>
        <button className={style.sectionAddress__btnSaveAddress}>
          Save Changes
        </button>
      </form>
    </section>
  );
}
