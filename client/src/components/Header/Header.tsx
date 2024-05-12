import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div className={style.wrapper}>
          Сборник рецептов из разных стран мира
        </div>
        <div className={style.headingExtra}></div>
      </div>
    </header>
  );
}
