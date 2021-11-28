export const mockActivation = (company: string, id?: number) => {
  if (id) {
    return {
      company: company,
      activationId: id,
      activationType: "ok",
      createDate: 10001,
      customerName: "activated user"
    };
  }

  return null;
};
