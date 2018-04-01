export interface Item {
  id: string,
  name: string,
  mimeType: string,
  webContentLink?: string, // webContentLink available for files only
}

export interface Album {
  id: string,
  name: string,
  coverUrl: string,
}

export interface imageDialogData {
  image: string,
  imageIndex: number,
  collectionLength: string,
}
