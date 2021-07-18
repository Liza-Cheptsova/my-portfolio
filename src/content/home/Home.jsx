import s from "./home.module.css";

export const Home = () => {
  return (
    <div className={s.home_container}>
      <div className={s.avatar}>
        <div className={s.image}></div>
      </div>
      <div className={s.greeting}>
        <p>Hi! My name is</p>
        <h3>Elizabeth Cheptsova</h3>
        <p>and i'm a Fontend developer</p>
      </div>
    </div>
  );
};
