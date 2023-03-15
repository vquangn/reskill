import s from "./style.module.css";

export function Header() {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <h1>Velkommen </h1>
      </div>

      <div className= {s.links}>
        <a href="https://www.gjensidige.no">Gjensidige Norge</a>
        <a href="https://www.gjensidige.se">Gjensidige Sverige</a>
        <a href="https://www.gjensidige.dk">Gjensidige Danmark</a>
      </div>

    </div>
  );
}
