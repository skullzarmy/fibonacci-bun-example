import { fibonacci } from "./fib";

export default {
    fetch(req: Request) {
        const url = new URL(req.url);
        if (url.pathname === "/fibonacci") {
            const n = parseInt(url.searchParams.get("n") || "0", 10);
            try {
                const result = fibonacci(n);
                return new Response(JSON.stringify({ result }), {
                    headers: { "Content-Type": "application/json" },
                });
            } catch (error) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
            }
        }
        return new Response("404!", { status: 404 });
    },
};
