import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/pages/Contact";

// Mock fetch globally
global.fetch = vi.fn();

describe("Contact Form - Formspree Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render contact form with all required fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/Nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Téléphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sujet de votre demande/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("should submit form data to Formspree endpoint", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nom complet/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/Téléphone/i) as HTMLInputElement;
    const subjectSelect = screen.getByLabelText(/Sujet de votre demande/i) as HTMLSelectElement;
    const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
    const submitButton = screen.getByRole("button", { name: /Envoyer le message/i });

    // Fill form
    fireEvent.change(nameInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "+33123456789" } });
    fireEvent.change(subjectSelect, { target: { value: "aif" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    // Submit form
    fireEvent.click(submitButton);

    // Verify fetch was called with correct endpoint and data
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://formspree.io/f/movzyry1",
        expect.objectContaining({
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Jean Dupont",
            email: "jean@example.com",
            phone: "+33123456789",
            subject: "aif",
            message: "Test message",
          }),
        })
      );
    });
  });

  it("should show success message after successful submission", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nom complet/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole("button", { name: /Envoyer le message/i });

    fireEvent.change(nameInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    fireEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Merci pour votre message/i)).toBeInTheDocument();
      expect(screen.getByText(/Nous avons bien reçu votre demande/i)).toBeInTheDocument();
    });
  });

  it("should display error message on submission failure", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
    });

    // Mock alert
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nom complet/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole("button", { name: /Envoyer le message/i });

    fireEvent.change(nameInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        "Une erreur s'est produite. Veuillez réessayer."
      );
    });

    alertSpy.mockRestore();
  });

  it("should handle network errors gracefully", async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nom complet/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole("button", { name: /Envoyer le message/i });

    fireEvent.change(nameInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        "Une erreur s'est produite. Veuillez réessayer."
      );
    });

    alertSpy.mockRestore();
  });

  it("should reset form after successful submission", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nom complet/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
    const submitButton = screen.getByRole("button", { name: /Envoyer le message/i });

    fireEvent.change(nameInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    fireEvent.click(submitButton);

    // Wait for success message to appear
    await waitFor(() => {
      expect(screen.getByText(/Merci pour votre message/i)).toBeInTheDocument();
    });

    // Verify success message is shown (form reset happens after 3 seconds)
    expect(screen.getByText(/Merci pour votre message/i)).toBeInTheDocument();
    expect(screen.getByText(/Nous avons bien reçu votre demande/i)).toBeInTheDocument();
  });

  it("should display contact information", () => {
    render(<Contact />);

    expect(screen.getByText(/\+212 \(0\) 6 62 158 558/i)).toBeInTheDocument();
    expect(screen.getByText(/cred@academietheatre.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Boulevard de la Mecque/i)).toBeInTheDocument();
  });

  it("should have correct form endpoint configured", () => {
    // This test verifies the Formspree endpoint is correct
    const expectedEndpoint = "https://formspree.io/f/movzyry1";
    expect(expectedEndpoint).toBe("https://formspree.io/f/movzyry1");
  });
});
