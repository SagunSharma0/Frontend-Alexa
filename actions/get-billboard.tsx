
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_UR}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const ress = await fetch (`${URL}/${id}`);

  return ress.json();
};

export default getBillboard;