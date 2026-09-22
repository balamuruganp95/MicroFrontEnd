import './styles.css'

export default function AccountsApp() {
  return (
    <article className="remote-panel accounts-panel">
      <p className="remote-label">Accounts remote</p>
      <h2>Customer identity and access</h2>
      <p>This independently deployed feature is loaded into the shell through Module Federation.</p>
      <div className="remote-stat">
        <strong>1,248</strong>
        <span>active accounts</span>
      </div>
    </article>
  )
}
