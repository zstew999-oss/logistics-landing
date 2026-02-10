import styles from "./Solution.module.css"

export function Solution() {
  return (
    <section className={styles.solution}>
      <div className="container">
        <h2 className={styles.title}>
          Ответственность за перевозку и результат по РФ и СНГ
        </h2>

        <p className={styles.text}>
          Для бизнеса важно не просто доставить груз, а быть уверенным,
          что перевозка выполнена без рисков, с понятной ответственностью
          и корректным закрытием рейса.
        </p>

        <p className={styles.text}>
          Мы сопровождаем перевозку от заявки до результата —
          без потери контроля и неопределённости на этапе исполнения.
        </p>

        <ul className={styles.list}>
          <li>Контроль перевозки на всём маршруте</li>
          <li>Одна точка ответственности за выполнение рейса</li>
          <li>Корректное закрытие перевозки и расчётов</li>
        </ul>
      </div>
    </section>
  )
}