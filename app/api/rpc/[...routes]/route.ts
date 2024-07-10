import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { routes: string[] } }
) {
  const body = await req.json();

  const res = await fetch(
    "https://api.g.alchemy.com" + `/${params.routes.join("/")}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.ALCHEMY_API_KEY}`,
        ...req.headers,
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    return NextResponse.json(await res.json().catch((e) => ({})), {
      status: res.status,
    });
  }

  return NextResponse.json(await res.json());
}
