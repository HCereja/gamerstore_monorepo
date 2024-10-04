import { useCallback } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const useApi = () => {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeUrl = `${baseURL}${uri}`;

    const res = await fetch(completeUrl);
    return extractData(res);
  }, []);

  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeUrl = `${baseURL}${uri}`;

    const res = await fetch(completeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return extractData(res);
  }, []);

  async function extractData(res: Response) {
    let content = "";
    try {
      content = await res.text();
      return JSON.parse(content);
    } catch (e) {
      console.error(e);
      return content;
    }
  }

  return { httpGet, httpPost };
};

export default useApi;
