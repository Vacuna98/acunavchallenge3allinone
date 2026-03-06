export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get("name") ?? "";
  const time = searchParams.get("time") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/AskingQuestion/WakeUp/${name}/${time}`
  );

  return new Response(await res.text());
}