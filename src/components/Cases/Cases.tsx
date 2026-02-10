import styles from "./Cases.module.css";

type CaseItem = {
  title: string;
  route: string;
  details: string;
  tags: string[];
};

const cases: CaseItem[] = [
  {
    title: "Коммерческий груз (20 т)",
    route: "Казань → Екатеринбург",
    details: "Контроль рейса на всём маршруте, согласование условий и закрытие рейса без доработок.",
    tags: ["B2B", "Межгород"],
  },
  {
    title: "Температурная перевозка",
    route: "Москва → Санкт-Петербург",
    details: "Контроль параметров и сроков, минимизация рисков порчи груза, корректные документы.",
    tags: ["Температура", "Сроки"],
  },
  {
    title: "Ценный груз",
    route: "Самара → Алматы",
    details: "Перевозка по РФ и СНГ с повышенным контролем и ответственностью за результат.",
    tags: ["РФ+СНГ", "Повышенный контроль"],
  },
];

export function Cases() {
  return (
    <section className={styles.section} id="cases">
      <div className="container">
        <h2 className={styles.title}>Примеры выполненных перевозок</h2>
        <p className={styles.lead}>
          Несколько типовых сценариев, чтобы показать подход к ответственности, контролю и закрытию рейса.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.top}>
                <h3 className={styles.h3}>{c.title}</h3>
                <p className={styles.route}>{c.route}</p>
              </div>

              <p className={styles.text}>{c.details}</p>

              <ul className={styles.tags}>
                {c.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}