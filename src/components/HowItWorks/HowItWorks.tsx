import styles from "./HowItWorks.module.css";

const steps = [
  "Получаем заявку и параметры груза",
  "Подбираем транспорт и согласовываем условия",
  "Контролируем перевозку на всём маршруте",
  "Закрываем рейс и результат",
];

export function HowItWorks() {
  return (
    <section className={styles.steps}>
      <div className="container">
        <h2 className={styles.title}>Как мы работаем</h2>

        <ol className={styles.list}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}