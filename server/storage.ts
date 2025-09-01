import { type User, type InsertUser, type Mine, type InsertMine, type Inquiry, type InsertInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllMines(): Promise<Mine[]>;
  getMineById(id: string): Promise<Mine | undefined>;
  createMine(mine: InsertMine): Promise<Mine>;
  
  getAllInquiries(): Promise<Inquiry[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private mines: Map<string, Mine>;
  private inquiries: Map<string, Inquiry>;

  constructor() {
    this.users = new Map();
    this.mines = new Map();
    this.inquiries = new Map();
    
    // Initialize with sample mines data
    this.initializeMines();
  }

  private initializeMines() {
    const sampleMines: InsertMine[] = [
      {
        name: "Rajasthan Prime",
        location: "Udaipur, Rajasthan",
        state: "rajasthan",
        category: "premium",
        description: "High-grade silica quartz with 99.7% purity. Ideal for glass and semiconductor industries.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        purity: "99.7%",
        isActive: 1
      },
      {
        name: "Gujarat Coastal",
        location: "Bhuj, Gujarat",
        state: "gujarat",
        category: "elite",
        description: "Finest quality white quartz perfect for luxury countertops and architectural applications.",
        imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        purity: "99.5%",
        isActive: 1
      },
      {
        name: "Central India Hub",
        location: "Bhopal, Madhya Pradesh",
        state: "madhya pradesh",
        category: "premium",
        description: "Large-scale extraction facility providing consistent supply for industrial manufacturing.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        purity: "99.2%",
        isActive: 1
      },
      {
        name: "Jharkhand Reserve",
        location: "Ranchi, Jharkhand",
        state: "jharkhand",
        category: "premium",
        description: "Rich mineral deposits with exceptional clarity, perfect for optical and electronic components.",
        imageUrl: "https://pixabay.com/get/g0382c6338eca98ad522f57e4a50874396afcde1dcfdf78c6ed76742378c5c05ef0d8a6e95ac5ec17489554dddb5f0d6137e4cf90e81f6833b2a39a00c2700d43_1280.jpg",
        purity: "99.8%",
        isActive: 1
      },
      {
        name: "Aravalli Peaks",
        location: "Mount Abu, Rajasthan",
        state: "rajasthan",
        category: "elite",
        description: "Mountain-sourced quartz with unique crystalline structure, ideal for high-end applications.",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        purity: "99.9%",
        isActive: 1
      },
      {
        name: "Gujarat Industrial",
        location: "Ahmedabad, Gujarat",
        state: "gujarat",
        category: "premium",
        description: "State-of-the-art processing facility with automated extraction and quality control systems.",
        imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        purity: "99.4%",
        isActive: 1
      }
    ];

    sampleMines.forEach(mine => {
      const id = randomUUID();
      const fullMine: Mine = { 
        ...mine, 
        id,
        purity: mine.purity ?? null,
        isActive: mine.isActive ?? 1
      };
      this.mines.set(id, fullMine);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllMines(): Promise<Mine[]> {
    return Array.from(this.mines.values()).filter(mine => mine.isActive === 1);
  }

  async getMineById(id: string): Promise<Mine | undefined> {
    return this.mines.get(id);
  }

  async createMine(insertMine: InsertMine): Promise<Mine> {
    const id = randomUUID();
    const mine: Mine = { 
      ...insertMine, 
      id,
      purity: insertMine.purity ?? null,
      isActive: insertMine.isActive ?? 1
    };
    this.mines.set(id, mine);
    return mine;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date().toISOString()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
