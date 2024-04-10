import { GOOGLE_API } from "../constanses/constanses";

export const UseFetchToGoogle = (formBody, setIsLoading) => {
  const postData = async () => {
    const result = await fetch(GOOGLE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      mode: "no-cors",
      body: formBody,
    })
      .then((res) => res.json())
      .catch((err) => {
        setIsLoading(false);
      });
    if (result.type === "success") {
      setIsLoading(false);
    }
    if (result.type === "error") {
      setIsLoading(false);
    }
  };
  return postData();
};
