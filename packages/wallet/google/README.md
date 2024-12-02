# wallet-google

This library is party of fixe crm loyalty system sdk.

# How to use

```typescript
// import the library
import { WalletGoogleClient } from "@fixe-sdk/wallet-google";
// import the aws credential provider
import { defaultProvider } from "@aws-sdk/credential-provider-node";

// create a new instance of the client
const walletGoogle = new WalletGoogleClient(
    defaultProvider({ profile: 'fixe' }),
    'us-east-1',
    '7975w5cp1k.execute-api.us-east-1.amazonaws.com'
);

// create a new class
const ret = (await walletGoogle.updateClass({
    passbookId: '1',
    heroImageUrl: '<logo-url>',
    hexBackgroundColor: '#ffffff',
    iconImageUrl: '<icon-url>',
    issuerName: 'Issuer Name',
    programName: 'Program Name',
    provider: 'google',
})) as any;

// create a new object (refers to a user loyalty card)
const ret = (await walletGoogle.updateObject({
    userId: '1',
    passbookId: '1',
    action: 'add',
    ammount: '1',
    label: 'Label',
    serialNumber: '1',
    total: '1',
    userName: 'User Name',
    heroImageUrl: '<hero-image-url>',
    provider: 'google',
})) as any;

// get the object url
const ret = await walletGoogle.getObjectUrl(
    'user-id',
    'passbook-id',
);
```