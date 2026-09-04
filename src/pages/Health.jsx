import { useEffect, useState } from "react";

function Health() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkApi() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }&t=Inception`
        );

        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
          setStatus("Healthy");
        } else {
          throw new Error(data.Error || "API request failed");
        }
      } catch (err) {
        setStatus("Unhealthy");
        setError(err.message);
      }
    }

    checkApi();
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold">System Health</h2>

      <div className="rounded-lg border p-6">
        <p>
          Status: <strong>{status}</strong>
        </p>

        {error && <p className="mt-2">Error: {error}</p>}

        {movie && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Fetched Data</h3>

            <p className="mt-2">Movie: {movie.Title}</p>
            <p>Year: {movie.Year}</p>
            <p>API Response: {movie.Response}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Health;