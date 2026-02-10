import styles from "./Trust.module.css";

export function Trust() {
  return (
    <section className={styles.trust}>
      <div className="container">
        <h2 className={styles.title}>Почему бизнес доверяет нам перевозки</h2>

        <ul className={styles.list}>
          <li>Работаем с коммерческими и B2B-грузами</li>
          <li>Опыт перевозок по РФ и СНГ</li>
          <li>Контроль, страхование и ответственность за результат</li>
        </ul>
      </div>
    </section>
  );
}