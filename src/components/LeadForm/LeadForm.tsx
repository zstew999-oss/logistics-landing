import { useEffect, useMemo, useState } from "react";
import styles from "./LeadForm.module.css";

type FormState = "idle" | "loading" | "success" | "error";

type FormValues = {
  name: string;
  company: string;
  phoneOrEmail: string;
  route: string;
  cargo: string;
  comment: string;
};

type LeadFormProps = {
  prefill?: Partial<FormValues>;
};

const initial: FormValues = {
  name: "",
  company: "",
  phoneOrEmail: "",
  route: "",
  cargo: "",
  comment: "",
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function isPhone(v: string) {
  // very loose phone check: digits + optional +, spaces, dashes
  const s = v.trim();
  return /^[+]?[\d\s()-]{8,}$/.test(s) && (s.match(/\d/g)?.length ?? 0) >= 8;
}

export function LeadForm({ prefill }: LeadFormProps) {
  const [values, setValues] = useState<FormValues>({ ...initial, ...prefill });
  const [state, setState] = useState<FormState>("idle");

  useEffect(() => {
    if (!prefill) return;

    setValues((prev) => ({
      ...prev,
      ...prefill,
    }));
  }, [prefill?.nonce]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormValues, string>> = {};

    if (values.name.trim().length < 2) e.name = "Укажите имя (минимум 2 символа)";
    if (values.phoneOrEmail.trim().length < 5)
      e.phoneOrEmail = "Укажите телефон или email";
    else if (!isEmail(values.phoneOrEmail) && !isPhone(values.phoneOrEmail))
      e.phoneOrEmail = "Введите корректный телефон или email";

    if (values.route.trim().length < 3) e.route = "Укажите маршрут (А → Б)";
    if (values.cargo.trim().length < 2) e.cargo = "Укажите тип груза (что везём)";

    return e;
  }, [values]);

  const canSubmit = state !== "loading" && Object.keys(errors).length === 0;

  function onChange<K extends keyof FormValues>(key: K, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState("loading");

    try {
      // имитация отправки (позже подключим реальный endpoint)
      await new Promise((r) => setTimeout(r, 900));

      setState("success");
      setValues(initial);

      // возвращаем форму в idle через время, чтобы можно было отправить ещё раз
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("error");
    }
  }

  return (
    <section className={styles.section} id="lead">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Рассчитать перевозку</h2>
            <p className={styles.lead}>
              Оставьте контакты и параметры груза — логист свяжется с Вами и предложит
              условия по доставке.
            </p>

            <ul className={styles.points}>
              <li>Ответим с уточняющими вопросами</li>
              <li>Подберём транспорт под груз</li>
              <li>Согласуем сроки и условия</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={onSubmit} aria-busy={state === "loading"}>
            <div className={styles.row}>
              <label className={styles.label}>
                Имя*
                <input
                  className={styles.input}
                  value={values.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  placeholder="Иван"
                  autoComplete="name"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>

              <label className={styles.label}>
                Компания
                <input
                  className={styles.input}
                  value={values.company}
                  onChange={(e) => onChange("company", e.target.value)}
                  placeholder="ООО Ромашка"
                />
              </label>
            </div>

            <label className={styles.label}>
              Телефон или email*
              <input
                className={styles.input}
                value={values.phoneOrEmail}
                onChange={(e) => onChange("phoneOrEmail", e.target.value)}
                placeholder="+7… / name@company.com"
                autoComplete="email"
              />
              {errors.phoneOrEmail && (
                <span className={styles.error}>{errors.phoneOrEmail}</span>
              )}
            </label>

            <div className={styles.row}>
              <label className={styles.label}>
                Маршрут (А → Б)*
                <input
                  className={styles.input}
                  value={values.route}
                  onChange={(e) => onChange("route", e.target.value)}
                  placeholder="Казань → Екатеринбург"
                />
                {errors.route && <span className={styles.error}>{errors.route}</span>}
              </label>

              <label className={styles.label}>
                Груз*
                <input
                  className={styles.input}
                  value={values.cargo}
                  onChange={(e) => onChange("cargo", e.target.value)}
                  placeholder="Металл, 20 т"
                />
                {errors.cargo && <span className={styles.error}>{errors.cargo}</span>}
              </label>
            </div>

            <label className={styles.label}>
              Комментарий
              <textarea
                className={styles.textarea}
                value={values.comment}
                onChange={(e) => onChange("comment", e.target.value)}
                placeholder="Температурный режим / сроки / особенности погрузки…"
                rows={4}
              />
            </label>

            <button className={styles.submit} disabled={!canSubmit}>
              {state === "loading" ? "Отправляем…" : "Отправить заявку"}
            </button>

            {state === "success" && (
              <div className={styles.success}>Заявка отправлена. Скоро свяжемся с вами.</div>
            )}
            {state === "error" && (
              <div className={styles.fail}>Не удалось отправить. Попробуйте ещё раз.</div>
            )}

            <p className={styles.note}>
              Нажимая «Отправить», вы соглашаетесь на обработку контактных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}