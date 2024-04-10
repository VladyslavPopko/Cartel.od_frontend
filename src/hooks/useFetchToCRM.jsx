import { CRM, CRM_API } from "../constanses/constanses";

const UseFetchToCRM = (data, setIsLoading) => {
  const postData = () => {
    const url = CRM;

    const apiKey = CRM_API; // замените на ваш API-ключ

    fetch(url, {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey, // замените на ваш API-ключ
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((out) => {
        setIsLoading(false); // ответ сервера в формате JSON
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Ошибка:", error);
      });
  };
  return postData();
};

export default UseFetchToCRM;
