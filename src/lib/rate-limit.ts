import { createHash, randomBytes } from "node:crypto";
export class ContactRateLimiter {
  private readonly buckets = new Map<
    string,
    { count: number; resetAt: number }
  >();
  private readonly salt = randomBytes(16).toString("hex");
  constructor(private readonly maxEntries = 1000) {}
  take(ip: string, now: number): { allowed: boolean; retryAfter: number } {
    for (const [key, bucket] of this.buckets)
      if (bucket.resetAt <= now) this.buckets.delete(key);
    const key = createHash("sha256")
      .update(this.salt + ip.slice(0, 200))
      .digest("hex");
    const existing = this.buckets.get(key);
    if (existing) {
      if (existing.count >= 5)
        return {
          allowed: false,
          retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
        };
      existing.count += 1;
      return { allowed: true, retryAfter: 0 };
    }
    if (this.buckets.size >= this.maxEntries)
      return { allowed: false, retryAfter: 60 };
    this.buckets.set(key, { count: 1, resetAt: now + 3600000 });
    return { allowed: true, retryAfter: 0 };
  }
}
