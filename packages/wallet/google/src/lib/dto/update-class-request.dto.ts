export type UpdateClassRequest = {
  passbookId: string;

  issuerName: string;
  programName: string;

  iconImageUrl: string;
  hexBackgroundColor: string;
  heroImageUrl: string;

  provider: 'google';
};
