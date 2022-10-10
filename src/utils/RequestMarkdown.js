import Http from "@/server/http.js";

export async function requestMarkdown(name) {
  return new Promise((resolve, reject) => {
    Http.get("md/home.md")
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject("");
        }
      })
      .catch(() => {
        reject("");
      });
  });
}
