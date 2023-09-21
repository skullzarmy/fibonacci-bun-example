import fibonacciAPI from "./fib-api";

export default {
    fetch: async (req: Request) => {
        const url = new URL(req.url);
        if (url.pathname.startsWith("/fibonacci")) {
            return fibonacciAPI.fetch(req);
        } else if (url.pathname === "/") {
            const htmlFile = Bun.file("./index.html");
            const html = await htmlFile.text();
            return new Response(html, {
                headers: { "Content-Type": "text/html" },
            });
        }
        return new Response("404!", { status: 404 });
    },
};
