
export const fetchCoinDetail = async (coin) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };
  