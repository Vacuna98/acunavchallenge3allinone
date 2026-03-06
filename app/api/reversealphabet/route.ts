export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const word = searchParams.get("word") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/ReverseItAlpha/${word}`
  );

  return new Response(await res.text());
}