"use server";

export const registerPatient = async (fromData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: fromData,
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
};
