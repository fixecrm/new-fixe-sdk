export type UpdateObjectRequest = {
  userId: string;
  passbookId: string;
  serialNumber: string;
  userName: string;

  label: string;
  total: string;

  action: 'add' | 'remove';
  ammount: string;

  heroImageUrl: string;

  provider: 'google';
};
