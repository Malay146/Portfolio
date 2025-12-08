export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const apiKey = process.env.LASTFM_API_KEY!;
    const user = process.env.LASTFM_USERNAME!;

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return Response.json({
        title: null,
        artist: null,
        nowPlaying: false,
        image: null,
        url: null,
      });
    }

    const title = track?.name ?? "";
    const artist = track?.artist?.["#text"] ?? "";

    // Generate YouTube Music search link
    const query = encodeURIComponent(`${artist} ${title}`);
    const ytMusicUrl = `https://music.youtube.com/search?q=${query}`;

    return Response.json({
      title,
      artist,
      nowPlaying: track?.["@attr"]?.nowplaying === "true",
      image: track?.image?.[3]?.["#text"] ?? null,
      url: ytMusicUrl, // YouTube Music link
    });

  } catch (err) {
    console.error("LASTFM API ERROR:", err);
    return Response.json({
      title: null,
      artist: null,
      nowPlaying: false,
      image: null,
      url: null,
    });
  }
}
