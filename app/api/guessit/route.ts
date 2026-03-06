export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const difficulty = searchParams.get("difficulty") ?? "easy";
  const guess = searchParams.get("guess") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/GuessIt/${difficulty}/${guess}`
  );

  return new Response(await res.text());
}