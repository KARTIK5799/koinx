
export const fetchData = async () => {
    try {
      const response = await fetch("https://example.com/api/user");
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
  