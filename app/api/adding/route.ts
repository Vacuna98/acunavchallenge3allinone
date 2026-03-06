export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const num1 = searchParams.get("num1") ?? "0";
  const num2 = searchParams.get("num2") ?? "0";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/AddingTwoNumbers/${num1}/${num2}`
  );

  return new Response(await res.text());
}