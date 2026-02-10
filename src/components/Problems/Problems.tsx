import styles from "./Problems.module.css";

const problems = [
  {
    title: "Срывы сроков и отсутствие контроля в пути",
    text: "Груз в пути — а статуса нет. Любое отклонение превращается в стресс и потери.",
  },
  {
    title: "Непонятно, кто отвечает за груз в форс-мажоре",
    text: "Когда что-то идёт не так, важна одна точка ответственности, а не “созвонитесь с водителем”.",
  },
  {
    title: "Рейс выполнен, но возникают проблемы с закрытием и оплатой",
    text: "Ошибки в документах = рейс не закрыт, бухгалтерия не проводит оплату, деньги зависают.",
  },
];

export function Problems() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.h2}>С какими проблемами сталкивается бизнес при перевозках</h2>
        <p className={styles.lead}>
          Мы выстроили процесс так, чтобы перевозка была управляемой — по срокам, ответственности и документам.
        </p>

        <div className={styles.grid}>
          {problems.map((p) => (
            <article key={p.title} className={styles.card}>
              <h3 className={styles.h3}>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Мы отвечаем за выполнение рейса, а не за отдельные этапы процесса.
        </p>
      </div>
    </section>
  );
}