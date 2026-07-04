export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q");

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${q!}&format=jsonv2&limit=10&namedetails=1`,
    { headers: { "User-Agent": "nearx (mawunyohafoba28@email.com)" } },
  );

  return Response.json(await res.json());
}
