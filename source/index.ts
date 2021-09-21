export const encode = (content: string): string =>
  Buffer.from(content, "utf8").toString("hex");
export const decode = (content: string): Buffer =>
  Buffer.from(content, "hex");
