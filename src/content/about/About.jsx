import s from "./About.module.css";

export const About = () => {
  return (
    <div className={s.about_container}>
      <div className={s.box_container}>
        <div className={s.box}>
          <div className={s.box_img}>
            <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="" />
          </div>
          <div className={s.content}>
            <div>
              <h2>About me</h2>
              <p>
                My name is Elizabeth, I am 27 years old. I am looking for a job as a Frontend developer. Programming
                became interesting to me 3 years ago. My first experience is working for 1.5 years as a layout designer.
                But I decided that I was more interested in doing full development of websites and applications. I
                decided to take a course on React/Redux. At the moment, I have finished them and am looking for a job.
              </p>
            </div>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box_img}>
            <img
              src="https://media.istockphoto.com/photos/word-in-wooden-cube-picture-id1138179710?k=6&m=1138179710&s=612x612&w=0&h=UgR8FeCKv5NTxY8lpaSY9G7Eg737T5OO-cdpd1iHJSc="
              alt=""
            />
          </div>
          <div className={s.content}>
            <div>
              <h2>Skills</h2>
              <p>HTML, CSS, React, Redux, TypeScript, JS, Rest ARI, Axios, Thunk</p>
            </div>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box_img}>
            <img src="https://ogak.by/wp-content/uploads/2019/02/contacts.jpg" alt="" />
          </div>
          <div className={s.content}>
            <div>
              <h2>Contacts</h2>
              <p>
                <ul className={s.sort_descript}>
                  <li>
                    <span>Email:</span>
                    <span>
                      <a href="mailto:cheptsova.liza@mail.ru">cheptsova.liza@mail.ru</a>
                    </span>
                  </li>
                  <li>
                    <span>Github:</span>
                    <span>
                      <a href="https://github.com/Liza-Cheptsova">My git</a>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
