import Link from "next/link"

export default function Home() {
  const apps = [
    { slug: "kataku", name: "Kataku App" },
    { slug: "reasign", name: "Reasign" },
    { slug: "maku", name: "Maku" }
  ]

  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      }}
    >
      <h1>Privacy Policy</h1>

      <p>Select an application:</p>

      <ul style={{ paddingLeft: "20px" }}>
        {apps.map((app) => (
          <li key={app.slug} style={{ marginBottom: "10px" }}>
            <Link
              href={`/apps/${app.slug}`}
              style={{
                textDecoration: "none",
                color: "#2563eb",
                fontWeight: "500",
              }}
            >
              {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
