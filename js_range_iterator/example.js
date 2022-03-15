function range(start, end, step = 1) {
    if (step === 0) throw new Error('Step cannot be zero');
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (start < end) {
                start = start + step;
                return { value: start - step, done: false };
            }
            return { done: true, value: end };
        }
    };
}

for (const n of range(0, 20, 2)) {
    console.log('Value', n);
}
