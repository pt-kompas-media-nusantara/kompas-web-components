
async function cryptos() {
  const swgUuid = "da0eee17-c670-19bd-944d-4d7263ea08e6";
  const swgApiKey = "fTrcWPuDNd//ObnIeGh59w==";
  const datetime = Math.floor(new Date().getTime() / 1000).toString();
  const signaturePayload = `${swgApiKey}${datetime}`;

  let xSignature: string;
  try {
    xSignature = await generateHmacSHA256(signaturePayload, swgUuid);
  } catch (error) {
    console.error('Error generating HMAC-SHA256 Signature:', error);
    throw error; // Rethrow the error if needed
  }

  console.log("xSignature", xSignature);

  const crypt = {
    xSignature,
    datetime
  };
  
  return crypt;
}


function generateHmacSHA256(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  .then(key => crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(message)
  ))
  .then(signature => Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
  );
}

export {
  cryptos
}
