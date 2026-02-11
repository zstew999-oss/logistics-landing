import styles from "./Hero.module.css";

type HeroProps = {
  onConsultationClick: () => void;
};

export function Hero({ onConsultationClick }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.kicker}>Перевозки по РФ и СНГ для бизнеса</p>

            <h1 className={styles.h1}>
              Надёжная организация грузоперевозок для бизнеса — без срывов и хаоса
            </h1>

            <p className={styles.sub}>
              Берём на себя ответственность за выполнение перевозки —
              от подбора транспорта до доставки и закрытия рейса.
            </p>

            <div className={styles.actions}>
              <button
                className={styles.primary}
                onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}
              >
                Рассчитать перевозку
              </button>
              <button className={styles.secondary} onClick={onConsultationClick}>
                Получить консультацию
              </button>
            </div>

            <ul className={styles.badges}>
              <li>Контроль в пути</li>
              <li>Ответственность за результат</li>
              <li>Закрывающие документы</li>
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.benefits}>
              <p className={styles.cardTitle}>Что вы получаете</p>
              <ul className={styles.cardList}>
                <li>Подбор транспорта под ваш груз</li>
                <li>Контроль рейса и связь 24/7</li>
                <li>Закрытие рейса документально</li>
              </ul>
              <p className={styles.cardHint}>
                Без «пересогласований», потерянных документов и зависших оплат.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}