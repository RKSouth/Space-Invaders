const API = {
    async getLastStock() {
      let res;
      try {
        res = await fetch("/api/stocks");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    async addStock(data) {
      const id = location.search.split("=")[1];
  
      const res = await fetch("/api/stocks/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const json = await res.json();
  
      return json;
    },
    async createStock(data = {}) {
      const res = await fetch("/api/stocks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
  
      const json = await res.json();
  
      return json;
    },
  
    async getStocksInRange() {
      const res = await fetch(`/api/stocks/range`);
      const json = await res.json();
  
      return json;
    },
  };
  