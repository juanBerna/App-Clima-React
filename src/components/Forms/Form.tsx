import Alert from "../Alerts/Alert";
import { countries } from "../data/countries";
import type { SearchFormData } from "../types";
import styles from "./Form.module.css";
import { useState, type ChangeEvent } from "react";

export default function Form() {
    const [alert, setAlert] = useState("");

    const [search, setSearch] = useState<SearchFormData>({
        city: '',
        country: ''
    });

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(search).includes('')) {
        setAlert("Todos los campos son obligatorios");
        return;
  }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        {alert && <Alert message={alert} />}
      <div className={styles.inputGroup}>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Buscar ciudad..."
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Pais:</label>
        <select id="country" name="country"
          value={search.country}
          onChange={(e) => setSearch({ ...search, country: e.target.value })}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Consultar Clima" className={styles.submitBtn} />
    </form>
  );
}
