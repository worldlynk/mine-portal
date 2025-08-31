import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all mines
  app.get("/api/mines", async (req, res) => {
    try {
      const mines = await storage.getAllMines();
      res.json(mines);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mines" });
    }
  });

  // Get mine by ID
  app.get("/api/mines/:id", async (req, res) => {
    try {
      const mine = await storage.getMineById(req.params.id);
      if (!mine) {
        return res.status(404).json({ message: "Mine not found" });
      }
      res.json(mine);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mine" });
    }
  });

  // Create inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid inquiry data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create inquiry" });
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
