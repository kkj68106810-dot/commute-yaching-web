import axios from "axios";

interface ApiResponse {
  message: string;
  status: string;
}

async function getHelloData(): Promise<ApiResponse> {
  // Spring Boot API 호출 (캐시 없이 실시간 요청)
  const res = await axios("http://localhost:8080/api/hello");

  if (!res.data) {
    throw new Error("Failed to fetch data from Spring Boot");
  }

  return res.data;
}

export default async function HomePage() {
  const data = await getHelloData();

  return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Next.js 16 & Spring Boot 3.5 API 연동 테스트</h1>

        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Response Message:</strong> {data.message}</p>
        </div>
      </main>
  );
}