import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Sample phone models database
const phoneModelsData = [
  { id: "1", brand: "Apple", model: "iPhone 15", displayName: "Apple iPhone 15" },
  { id: "2", brand: "Apple", model: "iPhone 15 Pro", displayName: "Apple iPhone 15 Pro" },
  { id: "3", brand: "Apple", model: "iPhone 14", displayName: "Apple iPhone 14" },
  { id: "4", brand: "Samsung", model: "Galaxy S24", displayName: "Samsung Galaxy S24" },
  { id: "5", brand: "Samsung", model: "Galaxy S24 Ultra", displayName: "Samsung Galaxy S24 Ultra" },
  { id: "6", brand: "Samsung", model: "Galaxy A14", displayName: "Samsung Galaxy A14" },
  { id: "7", brand: "Google", model: "Pixel 8", displayName: "Google Pixel 8" },
  { id: "8", brand: "Google", model: "Pixel 8 Pro", displayName: "Google Pixel 8 Pro" },
  { id: "9", brand: "OnePlus", model: "12", displayName: "OnePlus 12" },
  { id: "10", brand: "Xiaomi", model: "14", displayName: "Xiaomi 14" },
  { id: "11", brand: "Motorola", model: "Edge 50", displayName: "Motorola Edge 50" },
  { id: "12", brand: "iPad", model: "Air", displayName: "iPad Air" },
];

export async function registerRoutes(app: Express): Promise<Server> {
  // Search phone models endpoint
  app.get("/api/search-phones", (req, res) => {
    const query = (req.query.q as string)?.toLowerCase() || "";
    
    if (!query) {
      return res.json([]);
    }

    const results = phoneModelsData.filter(
      (phone) =>
        phone.displayName.toLowerCase().includes(query) ||
        phone.brand.toLowerCase().includes(query) ||
        phone.model.toLowerCase().includes(query)
    );

    res.json(results);
  });

  const httpServer = createServer(app);

  return httpServer;
}
