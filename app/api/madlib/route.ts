export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const noun = searchParams.get("noun") ?? "";
  const verb = searchParams.get("verb") ?? "";
  const name = searchParams.get("name") ?? "";
  const place = searchParams.get("place") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/MadLib/Create?name=${encodeURIComponent(name)}&place=${encodeURIComponent(place)}&verb=${encodeURIComponent(verb)}&noun=${encodeURIComponent(noun)}`
  );

  return new Response(await res.text());
}