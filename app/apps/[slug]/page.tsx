import fs from "fs"
import path from "path"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {

  const dir = path.join(process.cwd(), "content/apps")

  const apps = fs.readdirSync(dir)

  return apps.map((app) => ({
    slug: app
  }))
}

export default async function AppPage({ params }: Props) {

  const { slug } = await params

  const filePath = path.join(
    process.cwd(),
    "content/apps",
    slug,
    "privacy-policy.md"
  )

  const content = fs.readFileSync(filePath, "utf8")

  return (
  <div
    style={{
      background: "white",
      padding: "40px",
      borderRadius: "10px",
      maxWidth: "800px",
      width: "100%",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      lineHeight: "1.7",
    }}
  >
    <pre
        style={{
            whiteSpace: "pre-wrap",
            fontFamily: "inherit",
            color: "#374151"
        }}
        >
        {content}
    </pre>
  </div>
)
}