export const fibonacci = (() => {
    const memo: Record<number, number> = { 0: 0, 1: 1 };

    return (n: number): number => {
        if (n < 0) {
            throw new Error("Input must be a non-negative integer.");
        }

        if (memo[n] !== undefined) {
            return memo[n];
        }

        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    };
})();
