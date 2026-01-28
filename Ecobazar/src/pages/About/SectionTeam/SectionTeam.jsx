import * as style from "./SectionTeam.module.scss";
import Carousel from "@components/Carousel/Carousel";

export default function SectionTeam({ team, settingsCarousel }) {
  return (
    <section className={style.sectionTeam}>
      <div className={style.sectionTeam__innerTitle}>
        <h1 className={style.sectionTeam__title}>Our Awesome Team</h1>
        <h4 className={style.sectionTeam__text}>
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </h4>
      </div>
      <Carousel settings={settingsCarousel}>
        {team.map((person) => (
          <div key={person.id} className={style.sectionTeam__innerCard}>
            <div className={style.sectionTeam__innerImg}>
              <img
                loading="lazy"
                className={style.sectionTeam__img}
                src={person.image}
                alt="Team image"
              />
            </div>
            <div className={style.sectionTeam__innerName}>
              <h2 className={style.sectionTeam__name}>{person.name}</h2>
              <h3 className={style.sectionTeam__position}>{person.position}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
