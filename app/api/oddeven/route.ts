import { fetchOddEven } from "@/utils/service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const number = searchParams.get("number") ?? "";

  const res = await fetch(
    `https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/OddorEven/Check/${number}`
  );

  return new Response(await res.text());
}