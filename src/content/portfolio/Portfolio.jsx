import s from "./Portfolio.module.css";
import slider_photo from "./../imges/slider.png";
import social_photo from "./../imges/social-network.png";
import todos_photo from "./../imges/todos.png";

export const Portfolio = () => {
  return (
    <div className={s.portfolio_container}>
      <div className={s.grid}>
        <figure className={s.effect_sadie}>
          <img src={slider_photo} alt="img02" />
          <figcaption>
            <h2>
              Project <span>slider</span>
            </h2>
            <p>Custom slider can be viewed by clicking on the card</p>
            <a href="https://liza-cheptsova.github.io/slider/">View more</a>
          </figcaption>
        </figure>

        <figure className={s.effect_sadie}>
          <img src={social_photo} alt="img02" />
          <figcaption>
            <h2>
              {" "}
              Project <span>social-network</span>
            </h2>
            <p>The social network can be viewed by clicking on the card</p>
            <a href="https://liza-cheptsova.github.io/social-network/">View more</a>
          </figcaption>
        </figure>

        <figure className={s.effect_sadie}>
          <img src={todos_photo} alt="img02" />
          <figcaption>
            <h2>
              Project <span>todos</span>
            </h2>
            <p>The todos can be viewed by clicking on the card</p>
            <a href="https://liza-cheptsova.github.io/todolist/">View more</a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
