export interface Item {
  id: string,
  name: string,
  mimeType: string,
  webContentLink?: string, // webContentLink available for files only
}
