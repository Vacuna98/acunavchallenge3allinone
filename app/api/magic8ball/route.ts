export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const question = searchParams.get("question") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/Magic8Ball`
  );

  return new Response(await res.text());
}