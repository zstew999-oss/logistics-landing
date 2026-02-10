import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <section className={styles.section} id="contacts">
      <div className="container">
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.lead}>
          Свяжитесь с нами удобным способом — обсудим маршрут, груз и условия перевозки по РФ и СНГ.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.label}>Телефон</p>
            <p className={styles.value}>+7 (000) 000-00-00</p>

            <p className={styles.label}>Email</p>
            <p className={styles.value}>logistics@example.com</p>
          </div>

          <div className={styles.card}>
            <p className={styles.label}>Режим работы</p>
            <p className={styles.value}>Пн–Сб, 9:00–19:00 (МСК)</p>

            <p className={styles.label}>География</p>
            <p className={styles.value}>Россия и страны СНГ</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Logistics Landing</span>
          <span className={styles.muted}>B2B перевозки · контроль · ответственность</span>
        </footer>
      </div>
    </section>
  );
}