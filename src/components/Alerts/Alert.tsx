import styles from "./Alert.module.css"
export default function Alert({ message }: { message: string }) {
  return (
    <div className={styles.alert}>
      {message}
    </div>
  )
}
