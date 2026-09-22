import './styles.css'

export default function PaymentsApp() {
  return (
    <article className="remote-panel payments-panel">
      <p className="remote-label">Payments remote</p>
      <h2>Move money with confidence</h2>
      <p>This payment domain is owned and deployed independently from the shell application.</p>
      <div className="remote-stat">
        <strong>$84,290</strong>
        <span>processed today</span>
      </div>
    </article>
  )
}
