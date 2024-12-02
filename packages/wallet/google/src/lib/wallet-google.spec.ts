/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { WalletGoogleClient } from './wallet-google';

describe('walletGoogleClient', async () => {
  const walletGoogle = new WalletGoogleClient(
    defaultProvider({ profile: 'fixe' }),
    'us-east-1',
    '7975w5cp1k.execute-api.us-east-1.amazonaws.com'
  );
  it('should work', async () => {
    const ret = await walletGoogle.getObjectUrl(
      '62f29ad399df77328ddc4614',
      '5a38472fb0eead50156f5ff1'
    );
    expect(ret.id).toEqual(
      '3388000000022245828.loyalty_5a38472fb0eead50156f5ff1_62f29ad399df77328ddc4614'
    );
  });
  it('should work fabio', async () => {
    const ret = await walletGoogle.getObjectUrl(
      '62f29ad199df77328ddc4478',
      '5a38472fb0eead50156f5ff1'
    );
    expect(ret.id).toEqual(
      '3388000000022245828.loyalty_5a38472fb0eead50156f5ff1_62f29ad199df77328ddc4478'
    );
  });

  it('should work updatePass', async () => {
    const ret = (await walletGoogle.updateClass({
      heroImageUrl: 'https://api.epossible.com.br/public/logo.png',
      hexBackgroundColor: '#ffffff',
      iconImageUrl: 'https://api.epossible.com.br/public/icon.png',
      issuerName: 'E-Possible',
      passbookId: '1',
      programName: 'E-Possible',
      provider: 'google',
    })) as any;
    expect(ret.id).toEqual('3388000000022245828.loyalty_1_class');
  });

  it('should work updateObject', async () => {
    const ret = (await walletGoogle.updateObject({
      action: 'add',
      ammount: '1',
      label: 'E-Possible',
      serialNumber: '1',
      total: '1',
      userId: '1',
      userName: 'E-Possible',
      heroImageUrl: 'https://api.epossible.com.br/public/logo.png',
      passbookId: '1',
      provider: 'google',
    })) as any;
    expect(ret.id).toEqual('3388000000022245828.loyalty_1_1');
  });
});
