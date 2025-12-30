export function extractNameFromEmail(email: string): string {
    const localPart = email.split("@")[0];
    const nameParts = localPart
        .replace(/[_\.\-]/g, " ") // Replace underscores, dots, and hyphens with spaces
        .split(" ") // Split into parts
        .filter(Boolean); // Remove empty strings

    return nameParts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each part
        .join(" ");
}
