export const api_stripePayment = async (payload: any) => {
  try {
    const req = await fetch('http://localhost:8000/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(res => res.json());

    return req;
  } catch (error) {
    return error;
  }
};
