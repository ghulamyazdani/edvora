import type { NextApiRequest, NextApiResponse } from "next";
import next from "next";

type Data = {
  users: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    users: {
      station_code: 40,
      name: "Dhruv Singh",
      profile_key: "url",
    },
  });
}
