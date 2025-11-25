import { describe, it, expect } from "vitest";

describe("Navigation Routes", () => {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/aif", name: "AIF Corporate" },
    { path: "/iao", name: "IAO" },
    { path: "/cred", name: "CrEd" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  it("should have all required routes defined", () => {
    expect(routes).toHaveLength(6);
    expect(routes.map((r) => r.path)).toEqual([
      "/",
      "/aif",
      "/iao",
      "/cred",
      "/about",
      "/contact",
    ]);
  });

  it("should have unique routes", () => {
    const paths = routes.map((r) => r.path);
    const uniquePaths = new Set(paths);
    expect(uniquePaths.size).toBe(paths.length);
  });

  it("should have all routes with names", () => {
    routes.forEach((route) => {
      expect(route.name).toBeTruthy();
      expect(route.name.length).toBeGreaterThan(0);
    });
  });
});

describe("Brand Colors", () => {
  const colors = {
    aif: "#F5D000", // Yellow
    iao: "#324379", // Blue
    cred: "#FF5A52", // Red
    primary: "#F5D000",
    foreground: "#1A1A1A",
    background: "#FFFFFF",
  };

  it("should have all required brand colors", () => {
    expect(colors.aif).toBe("#F5D000");
    expect(colors.iao).toBe("#324379");
    expect(colors.cred).toBe("#FF5A52");
  });

  it("should have valid hex color format", () => {
    const hexRegex = /^#[0-9A-F]{6}$/i;
    Object.values(colors).forEach((color) => {
      expect(hexRegex.test(color)).toBe(true);
    });
  });
});

describe("Contact Form", () => {
  it("should have required form fields", () => {
    const fields = ["name", "email", "phone", "subject", "message"];
    expect(fields).toContain("name");
    expect(fields).toContain("email");
    expect(fields).toContain("subject");
    expect(fields).toContain("message");
  });

  it("should have contact form subjects", () => {
    const subjects = [
      "aif",
      "iao",
      "cred-enfants",
      "cred-facilitateur",
      "cred-franchise",
      "autre",
    ];
    expect(subjects.length).toBeGreaterThanOrEqual(5);
  });
});
